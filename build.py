import json, os, shutil, urllib.parse, hashlib
from datetime import datetime

def cleanup_temp_file():
	if os.path.exists('temp.html'):
		os.remove('temp.html')

def sort_posts():
	print("Standardizing dates and sorting posts.json by date...")
	with open('posts.json', 'r+') as json_file:
		data = json.load(json_file)
		
		# Standardize dates in the posts
		for post in data['posts']:
			if 'date' in post:
				# Split the date into components
				year, month, day = post['date'].split('-')
				
				# Zero-pad month and day if needed
				month = month.zfill(2)
				day = day.zfill(2)
				
				# Reconstruct the standardized date
				post['date'] = f"{year}-{month}-{day}"

		# Sort posts in descending order by date
		data['posts'].sort(key=lambda post: post['date'], reverse=True)

		# Write the sorted and standardized data back into the JSON file (with tab indentation)
		json_file.seek(0)
		json.dump(data, json_file, indent='\t', separators=(',', ': '))
		json_file.truncate()

def build_index():
	sort_posts()

	print("Using posts.json to build index.html...")
	
	with open('index.html', 'r') as html_file:
		lines = html_file.readlines()
		
	state = "scanning" # Set initial state

	with open('temp.html', 'w', encoding='utf-8') as file:
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
	
	shutil.move('temp.html', 'index.html')
		
def json_to_html():
	with open('posts.json') as json_file:
		data = json.load(json_file)
		posts = data['posts']

	html = ""
	for post in posts:
		date = datetime.strptime(f"{post['date']} {datetime.strptime(post['end_time'], '%I:%M%p').strftime('%H:%M')}", '%Y-%m-%d %H:%M')
		start_time = post["start_time"]
		end_time = post["end_time"]
		cancelled = post["cancelled"]
		sold_out = post["sold_out"]

		# Validate member/non-member prices
		if post["non_member_price"] < post["member_price"]:
			print(f"Error: Non-member price (${post['non_member_price']}) is less than member price (${post['member_price']}) for class '{post['title']}'")
			cleanup_temp_file()
			exit(1)

		# Header
		post_date = post['date']
		html += f'\n\t\t\t\t\t<div class="post" data-isodate="{date}" id="{post_date}">\n'
		html += '\t\t\t\t\t\t<div class="post-header">\n'
		
		if date and start_time and end_time:
			html += f'\t\t\t\t\t\t\t<div class="calendar-link">\n'
			html += f'\t\t\t\t\t\t\t\t<div class="circled-date">{date.day}</div>\n'

			month = date.strftime('%B')
			html += f'\t\t\t\t\t\t\t\t<div class="month-and-time">{month}<br>\n'
			
			start_time = datetime.strptime(start_time, "%I:%M%p").strftime("%-I:%M%p").lower()
			end_time = datetime.strptime(end_time, "%I:%M%p").strftime("%-I:%M%p").lower()
			if start_time[-2:] != end_time[-2:]:
				time_string = f"{start_time} - {end_time}"
			else:
				time_string = f"{start_time[:-2]} - {end_time}"
			html += f'\t\t\t\t\t\t\t\t\t<div class="time">{time_string}</div>\n'
			html += '\t\t\t\t\t\t\t\t</div>\n'
			html += '\t\t\t\t\t\t\t</div>\n'

		# Title
		html += '\t\t\t\t\t\t\t<div class="title-and-subtitle-wrapper">\n'
		html += '\t\t\t\t\t\t\t\t<div class="title-and-subtitle">\n'
		html += f'\t\t\t\t\t\t\t\t\t<div class="title">'
		if cancelled:
			html += '(Cancelled) '
		elif sold_out:
			html += '(Sold out) '
		html += f'{post["title"]}</div>\n'
		html += f'\t\t\t\t\t\t\t\t\t<div class="subtitle">{post["subtitle"]}</div>\n'
		html += '\t\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t\t<div class="x-box" onClick="togglePostOpened(this)">\n'
		html += '\t\t\t\t\t\t\t\t<div class="x"></div>\n'
		html += '\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t</div>\n'

		# Image
		html += '\t\t\t\t\t\t<div class="closeable">\n'
		html += '\t\t\t\t\t\t\t<div class="post-body">\n'
		if post["image"]:
			html += f'\t\t\t\t\t\t\t\t<img class="post-image" src="/resources/images/{post["image"]}" loading="lazy">\n'
		html += f'\t\t\t\t\t\t\t\t<div class="post-text"'
		if post["image"]:
			html += '>'
		else:
			html += ' style="width: 100%">'
		
		# Description
		if cancelled:
			html += f'<s>{post["description"]}</s>\n'
			html += '\t\t\t\t\t\t\t\t\t\t<br><p><b>This event has been cancelled.</b></p>\n'
		else:
			html += f'\n\t\t\t\t\t\t\t\t\t{post["description"]}\n'
		
		# Event details (time, location, cost)
		if not cancelled:
			html += '\t\t\t\t\t\t\t\t\t<p>\n'
			if date and start_time and end_time:
				formatted_date_str = f"{date.strftime('%A')}, {date.strftime('%B')} {date.day}{date_suffix(date.day)}"
				html += f'\t\t\t\t\t\t\t\t\t\t<b>Time</b>: {formatted_date_str} from {time_string}<br>\n'
			
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
				html += f'\t\t\t\t\t\t\t\t\t\t<b>Place</b>: {location_str}<br>\n'
		
			if post["offered_online"]:
				html += '\t\t\t\t\t\t\t\t\t\t<b>URL</b>: '
				html += '<a href="https://meet.hacksburg.org/class" target="_blank">meet.hacksburg.org/class</a><br>\n'

			# Cost formatting
			html += '\t\t\t\t\t\t\t\t\t\t<b>Cost</b>: '
			materials_fee = post.get('materials_fee')

			if materials_fee and materials_fee > 0:
				if post["member_price"] == 0 and post["non_member_price"] == 0:
					html += f"This event is free, with an optional ${materials_fee} materials fee."
				elif post["member_price"] == post["non_member_price"]:
					html += f"This event is ${post['member_price']} for all attendees, plus an optional ${materials_fee} materials fee."
				elif post["member_price"] == 0:
					html += f"This event is free for Hacksburg members and ${post['non_member_price']} for non-members, plus an optional ${materials_fee} materials fee."
				else:
					html += f"This event is ${post['member_price']} for Hacksburg members and ${post['non_member_price']} for non-members, plus an optional ${materials_fee} materials fee."
			else:
				if post["member_price"] == 0 and post["non_member_price"] == 0:
					html += "Free!"
				elif post["member_price"] == 0:
					html += f"Free for Hacksburg members; ${post['non_member_price']} for non-members."
				elif post["member_price"] == post["non_member_price"]:
					html += f"${post['non_member_price']}."
				else:
					html += f"${post['member_price']} for Hacksburg members; ${post['non_member_price']} for non-members."

			html += '\n\t\t\t\t\t\t\t\t\t</p>\n'
		
		if post["zeffy_link"]:
			if not cancelled:
				if sold_out:
					html += f'\t\t\t\t\t\t\t\t\t<div class="button rsvp-button disabled">Sold out!</div>\n'
				else:
					html += f'\t\t\t\t\t\t\t\t\t<a class="button rsvp-button" href="{post["zeffy_link"]}" target="_blank">RSVP on Zeffy</a>\n'
		
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
		html += '\t\t\t\t\t\t<div class="post-header">\n'
		html += '\t\t\t\t\t\t\t<div class="title-and-subtitle">\n'
		html += f'\t\t\t\t\t\t\t\t<div class="title">{post["title"]}</div>\n'
		html += f'\t\t\t\t\t\t\t\t<div class="subtitle">{post["subtitle"]}</div>\n'
		html += '\t\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t\t<div class="info">ⓘ</div>\n'
		html += '\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t\t<div class="post-body">\n'
		html += f'\t\t\t\t\t\t\t<div class="post-text" style="width: 100%">{post["description"]}</div>\n'
		html += '\t\t\t\t\t\t</div>\n'
		html += '\t\t\t\t\t</div>\n'
		
	return html

def date_suffix(day):
	if 11 <= day <= 13:
		return "th"
	last_digit = day % 10
	if last_digit == 1:
		return "st"
	elif last_digit == 2:
		return "nd"
	elif last_digit == 3:
		return "rd"
	else:
		return "th"

def build_mailto(subject, body):
	subject = urllib.parse.quote(subject)
	body = urllib.parse.quote(body)
	return f'mailto:rsvp@hacksburg.org?subject={subject}&body={body}'

if __name__ == "__main__":
	try:
		build_index()
		print("Build complete!")
	except Exception as e:
		cleanup_temp_file()
		print(f"Error: {str(e)}")
		exit(1)