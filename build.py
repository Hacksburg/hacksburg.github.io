import json, os, shutil, urllib.parse
from datetime import datetime

def sort_posts():
	print("Sorting posts.json by date...")
	with open('posts.json', 'r+') as json_file:
		data = json.load(json_file)

		# Sort posts in descending order by date
		data['posts'].sort(key=lambda post: post['date'], reverse=True)

		# Write the sorted data back into the JSON file (with tab indentation)
		json_file.seek(0)
		json.dump(data, json_file, indent='\t', separators=(',', ': '))
		json_file.truncate()

def build_index():
	sort_posts()

	print("Using posts.json to build index.html...")
	
	with open('index.html', 'r') as html_file:
		lines = html_file.readlines()
		
	state = "scanning" # Set initial state

	with open('temp.html', 'w') as file:
		for line in lines:
			# Get state based on file flags
			if line.strip().startswith('<!-- ANNOUNCEMENTS START !-->'):
				file.write(line)
				state = "announcements"
			elif line.strip().startswith('<!-- ANNOUNCEMENTS END !-->'):
				state = "scanning"
			elif line.strip().startswith('<!-- FEED START !-->'):
				file.write(line)
				state = "posts"
			elif line.strip().startswith('<!-- FEED END !-->'):
				state = "scanning"
			
			# Execute based on state (replace content between start and end tags)
			if state == "scanning":
				# Copy exiting file
				file.write(line)
			elif state == "announcements":
				# Write announcement to file
				file.write(announcements_to_html())
				state = "waiting" # do nothing
			elif state == "posts":
				# Write posts to file
				file.write(json_to_html())
				state = "waiting" # do nothing
				# file.write("\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>")
	
	shutil.move('temp.html', 'index.html')
		
def json_to_html():
	with open('posts.json') as json_file:
		data = json.load(json_file)
		posts = data['posts']

	html = ""
	for post in posts:
		date = datetime.strptime(post["date"], '%Y-%m-%d')
		start_time = post["start_time"]
		end_time = post["end_time"]
		cancelled = post["cancelled"]

		# Header
		html += f'\n\t\t\t\t\t<div class="post" data-isodate="{date}">\n'
		html += '\t\t\t\t\t\t<div class="post_header">\n'
		
		if date and start_time and end_time:
			html += f'\t\t\t\t\t\t\t<div class="calendar_link noselect">\n'
			html += f'\t\t\t\t\t\t\t\t<div class="circled_date">{date.day}</div>\n'

			month = date.strftime('%B')
			html += f'\t\t\t\t\t\t\t\t<div class="month_and_time">{month}<br>\n'
			
			time_string = start_time + " - " + end_time if start_time[-2:] != end_time[-2:] else start_time[:-2] + " - " + end_time
			html += f'\t\t\t\t\t\t\t\t\t<div class="time">{time_string}</div>\n'
			html += '\t\t\t\t\t\t\t\t</div>\n'
			html += '\t\t\t\t\t\t\t</div>\n'

		# Title
		html += '\t\t\t\t\t\t\t<div class="title_and_subtitle_wrapper">\n'
		html += '\t\t\t\t\t\t\t\t<div class="title_and_subtitle">\n'
		html += f'\t\t\t\t\t\t\t\t\t<div class="title">'
		if cancelled:
			html += '(Cancelled) '
		html += f'{post["title"]}</div>\n'
		html += f'\t\t\t\t\t\t\t\t\t<div class="subtitle">{post["subtitle"]}</div>\n'
		html += '\t\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t\t<div class="x_box" onClick="togglePostOpened(this)">\n'
		html += '\t\t\t\t\t\t\t\t<div class="x"></div>\n'
		html += '\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t</div>\n'

		# Image
		html += '\t\t\t\t\t\t<div class="closeable">\n'
		html += '\t\t\t\t\t\t\t<div class="post_body">\n'
		if post["image"]:
			html += f'\t\t\t\t\t\t\t\t<img class="post_image" src="/resources/images/{post["image"]}" loading="lazy">\n'
		html += f'\t\t\t\t\t\t\t\t<div class="post_text"'
		if post["image"]:
			html += '>'
		else:
			html += ' style="width: 100%">'
		
		# Description
		if cancelled:
			html += f'<s>{post["description"]}</s>\n'
			html += '\t\t\t\t\t\t\t\t\t<br><p><b>This event has been cancelled.</b></p>\n'
		else:
			html += f'{post["description"]}\n'
		
		# Event details (time, location, cost)
		if not cancelled:
			html += '\t\t\t\t\t\t\t\t\t<p>\n'
			if date and start_time and end_time:
				formatted_date_str = f"{date.strftime('%A')}, {date.strftime('%B')} {date.day}{date_suffix(date.day)}"
				html += f'\t\t\t\t\t\t\t\t\t<b>Time</b>: {formatted_date_str} from {time_string}<br>\n'
			
			location_str = ""
			if post["offsite_location"]:
				location_str = post["offsite_location"]
			elif post["offered_in_person"] and post["offered_online"]:
				location_str = 'Online and in person at Hacksburg; <a href="https://www.google.com/maps/dir/?api=1&destination=Hacksburg+Blacksburg,+VA" target="_blank">1872 Pratt Drive Suite 1620</a>.<br>\n\t\t\t\t\t\t\t\t\tEnter through the covered double doors at the back of the building.'
			elif post["offered_in_person"]:
				location_str = 'In person at Hacksburg; <a href="https://www.google.com/maps/dir/?api=1&destination=Hacksburg+Blacksburg,+VA" target="_blank">1872 Pratt Drive Suite 1620</a>. Enter through the covered double doors at the back of the building.'
			elif post["offered_online"]:
				location_str = 'Online only.'
			
			if location_str:
				html += f'\t\t\t\t\t\t\t\t\t<b>Place</b>: {location_str}<br>\n'
		
			if post["offered_online"]:
				html += '\t\t\t\t\t\t\t\t\t<b>URL</b>: '
				html += '<a href="https://meet.hacksburg.org/class" target="_blank">meet.hacksburg.org/class</a><br>\n'

			if post["member_price"] == 0 and post["non_member_price"] == 0:
				html += '\t\t\t\t\t\t\t\t\t<b>Cost</b>: Free!\n'
			elif post["member_price"] == 0:
				html += f'\t\t\t\t\t\t\t\t\t<b>Cost</b>: Free for Hacksburg members; ${post["non_member_price"]} for non-members. Pay in person or online at <a href="https://paypal.me/hacksburg" target="_blank">paypal.me/hacksburg</a>.\n'
			elif post["member_price"] == post["non_member_price"]:
				html += f'\t\t\t\t\t\t\t\t\t<b>Cost</b>: ${post["non_member_price"]}. Pay in person or online at <a href="https://paypal.me/hacksburg" target="_blank">paypal.me/hacksburg</a>.\n'
			else:
				html += f'\t\t\t\t\t\t\t\t\t<b>Cost</b>: ${post["member_price"]} for Hacksburg members; ${post["non_member_price"]} for non-members. Pay in person or online at <a href="https://paypal.me/hacksburg" target="_blank">paypal.me/hacksburg</a>.\n'
			html += '\t\t\t\t\t\t\t\t\t</p>\n'

		# Meetup/RSVP link
		if post["meetup_link"]:
			if not cancelled:
				html += f'\t\t\t\t\t\t\t\t\t<a class="button rsvp_button" href="{post["meetup_link"]}" target="_blank">RSVP on Meetup</a>\n'
				html += '\t\t\t\t\t\t\t\t\t<div class="below_button_text">\n'
				subject = f'RSVP for {post["title"]}'
				body = f'I am confirming my RSVP for \"{post["title"]}\" on {formatted_date_str} from {time_string}.'
				html += f'\t\t\t\t\t\t\t\t\t\tor <a href="{build_mailto(subject, body)}" target="_blank">RSVP by Email</a>\n'
				html += '\t\t\t\t\t\t\t\t\t</div>\n'

			else:
				html += f'\t\t\t\t\t\t\t\t\t<a class="button rsvp_button disabled" href="{post["meetup_link"]}" target="_blank">View on Meetup</a>\n'
		
		html += '\t\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t</div>\n'
		
	return html

def announcements_to_html():
	with open('posts.json') as json_file:
		data = json.load(json_file)
		posts = data['announcements']

	html = ""
	for post in posts:
		html += f'\n\t\t\t\t\t<div class="post">\n'
		html += '\t\t\t\t\t\t<div class="post_header">\n'
		html += '\t\t\t\t\t\t\t<div class="title_and_subtitle">\n'
		html += f'\t\t\t\t\t\t\t\t<div class="title">{post["title"]}</div>\n'
		html += f'\t\t\t\t\t\t\t\t<div class="subtitle">{post["subtitle"]}</div>\n'
		html += '\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t\t<div class="info">ⓘ</div>\n'
		html += '\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t<div class="post_body">\n'
		html += f'\t\t\t\t\t\t\t<div class="post_text" style="width: 100%">{post["description"]}</div>\n'
		html += '\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t</div>\n'
		
	return html

def date_suffix(day):
    if 4 <= day <= 20 or 24 <= day <= 30:
        return "th"
    else:
        return ["st", "nd", "rd"][day%10 - 1]
        
        import urllib.parse

def build_mailto(subject, body):
    subject = urllib.parse.quote(subject)
    body = urllib.parse.quote(body)
    return f'mailto:rsvp@hacksburg.org?subject={subject}&body={body}'


if __name__ == "__main__":
	build_index()
	print("Build complete!")
