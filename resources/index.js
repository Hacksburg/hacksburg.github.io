let images = ['../hacksburg_dot_org/resources/images/seedstarting_cropped.jpg', '../hacksburg_dot_org/resources/images/      casting_cropped.jpg', '../hacksburg_dot_org/resources/images/deadpool_cropped.jpg'];
let index = 0;
let imgElement = null;

window.addEventListener('DOMContentLoaded', (event) => {
	// decorate join meeting button on load, then every minute thereafter
	decorate_join_meeting_button();
	const id = setInterval(decorate_join_meeting_button, 60000);
});

function decorate_join_meeting_button() {
	// Get the current time in Eastern Time Zone (EST/EDT)
	function getETDate() {
		const now = new Date();
		const formatter = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
		const parts = formatter.formatToParts(now);
		const etHour = parseInt(parts.find(part => part.type === 'hour').value, 10);
		const etMinute = parseInt(parts.find(part => part.type === 'minute').value, 10);
		const etSecond = parseInt(parts.find(part => part.type === 'second').value, 10);
		return new Date(now.getFullYear(), now.getMonth(), now.getDate(), etHour, etMinute, etSecond);
	}
	// Check if a meeting is currently in progress, starting soon, or neither
	function getMeetingStatus() {
		const etNow = getETDate();
		const dayOfWeek = etNow.getDay();
		const etHour = etNow.getHours();
		const etMinutes = etNow.getMinutes();
		// Check if it's Tuesday and more than 30 minutes away from the start of a meeting
		if (dayOfWeek === 2 && (etHour < 19)) {
			document.getElementById("join_meeting").classList.add("disabled");
			return "tonight at 7:30";
		}
		// Check if it's Tuesday and within 30 minutes of the start of a meeting
		else if (dayOfWeek === 2 && (etHour === 19 && etMinutes < 30)) {
			document.getElementById("join_meeting").classList.remove("disabled");
			return countdown();
		}
		// Check if it's Tuesday and between 7:30 PM and 8:30 PM ET
		else if (dayOfWeek === 2 && (etHour === 19 && etMinutes >= 30 || etHour === 20 && etMinutes <= 30)) {
			document.getElementById("join_meeting").classList.remove("disabled");
			return "meeting in progress";
		}
		else {
			document.getElementById("join_meeting").classList.add("disabled");
			return "Tuesdays at 7:30";
		}
	}
	function countdown() {
		const etNow = getETDate();
		const etMinutes = etNow.getMinutes();
		const timeToMeeting = 30 - etMinutes;
		if (timeToMeeting === 1) {
			return "starting in 1 minute";
		}
		else {
			return `starting in ${timeToMeeting} minutes`;
		}
	}
	// Display the meeting status message
	document.getElementById("join_meeting_hint_text").innerText = getMeetingStatus();
}

function updateCarousel() {
	index > 1 ? index = 0 : index++;
	imgElement.src = images[index];
}

