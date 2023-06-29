import os
import json
import klembord
import datetime
import base64
import cv2

if __name__ == "__main__":
    klembord.init()

    month = datetime.datetime.now().month
    currentYear = datetime.datetime.now().year
    if month == 12:
        month = 0
        currentYear += 1

    month_name = ["January","February","March","April","May","June","July","August","September","October","November","December"][month]

    output = f"""To All:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hacksburg has the following events coming up in <b>{month_name}</b>:

\"\"\"
"""

    with open('posts.json','r') as infile:
        data = json.load(infile)

    #print(data)

    def keyfunc(post):
        p_date = list(map(int,post['date'].split('-')))
        p_date = datetime.date(*p_date)
        return p_date        

    data['posts'].sort(key=keyfunc)

    for post in data['posts']:
        p_date = list(map(int,post['date'].split('-')))
        p_date = datetime.date(*p_date)
        print(p_date)
        if p_date.year == currentYear and p_date.month == month+1:
            #print(post)
            output += f"<b>{p_date.strftime('%A, %B %e')} from {post['start_time'].upper()} to {post['end_time'].upper()}: {post['title']}</b>\n"
            #with open('resources/images/'+post['image'],'rb') as imagef:
            #    image = imagef.read()
            image = cv2.imread('resources/images/'+post['image'])
            if image.shape[0] > 300 or image.shape[1] > 300:
                if image.shape[0] > image.shape[1]: # Taller
                    height = 300
                    width = int(300/image.shape[0]*image.shape[1])
                    ratio = image.shape[0]/300
                else:
                    width = 300
                    height = int(300/image.shape[1]*image.shape[0])
                    ratio = image.shape[1]/300
                #print(ratio)
                image = cv2.GaussianBlur(image,((int(ratio*2)//2)*2+1,(int(ratio*2)//2)*2+1),0)
                image = cv2.resize(image,(width,height),0,0,cv2.INTER_AREA)
            ok,image = cv2.imencode(".jpg",image)
            if not ok:
                continue
            output += f"<img src=\"data:image/jpg;base64,{base64.b64encode(image).decode('ascii')}\" />\n"

            rsvp = "RSVP at "

            if "<p>" not in post['description']:
                output += "<p>"+post['description']+f" RSVP at <a href=\"{post['meetup_link']}\">"+post['meetup_link']+"</a> .</p>\n"
            else:
                output += post['description']+f"<p>RSVP at <a href=\"{post['meetup_link']}\">"+post['meetup_link']+"</a> .</p>\n"

    output += """Hacksburg is a community makerspace located at 1872 Pratt Drive, Suite 1620. Come to the back of the building. Open meetings for the public are every Tuesday at 7:30PM.
\"\"\"

Thanks,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Max

Board Member, Hacksburg"""
    output = output.split("\n")
    #output = ["<div>"+x+"</div>" for x in output]
    output_2 = list()
    for x in output:
        if len(x) != 0:
            output_2.append("<div>"+x+"</div>")
        else:
            output_2.append("<p></p>")
    output = output_2
    output = '\n'.join(output)
    klembord.set_with_rich_text(output,output)
    print(output)