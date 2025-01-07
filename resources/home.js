window.addEventListener('DOMContentLoaded', (event) => {
	setupCarousel();
	sortAndDisplayPosts();
	decorateJoinMeetingButton();
	const id = setInterval(decorateJoinMeetingButton, 60000);
});

function setupCarousel() {
	// Show the carousel navigation if JavaScript is enabled
	const carouselNav = document.getElementById("carousel-nav");
	if (carouselNav) {
		carouselNav.style.display = "block";
	}

	// Preload images for the carousel
	const carouselContainer = document.querySelector('#carousel-container');
	if (carouselContainer && carouselContainer.hasAttribute('data-images')) {
		const images = JSON.parse(carouselContainer.getAttribute('data-images'));
		images.forEach(imageSrc => {
			const img = new Image();
			img.src = imageSrc;
		});
	}

	// Preload the carousel substitute image (for mobile)
	const substituteImage = document.querySelector('#carousel-substitute');
	if (substituteImage) {
		const img = new Image();
		img.src = substituteImage.src;
	}

	// Initialize and manage the carousel functionality
	initializeCarousel();
}

function initializeCarousel() {
	let carousel = document.querySelector('#carousel-container');
	if (!carousel || !carousel.hasAttribute('data-images')) return;

	let images = JSON.parse(carousel.dataset.images);
	let dots = carousel.querySelectorAll('.carousel-nav-inner .carousel-nav-dot');
	let firstImage = carousel.querySelector('.post-image.first');
	let secondImage = carousel.querySelector('.post-image.second');
	let isTransitioning = false;
	let carouselAutoadvance = true;
	let autoAdvanceInterval;

	function endTransition() {
		firstImage.style.transition = 'opacity 0ms';
		firstImage.src = secondImage.src;
		firstImage.style.opacity = '1';
		isTransitioning = false;
	}

	function advanceCarouselTo(index) {
		if (isTransitioning || dots[index].classList.contains('active')) {
			return;
		}

		isTransitioning = true;
		dots.forEach(dot => dot.classList.remove('active'));
		dots[index].classList.add('active');

		secondImage.src = images[index];
		firstImage.style.transition = 'opacity 700ms';
		firstImage.style.opacity = '0';

		setTimeout(endTransition, 700);
	}

	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			advanceCarouselTo(index);
			carouselAutoadvance = false;
			if (autoAdvanceInterval) {
				clearInterval(autoAdvanceInterval);
			}
		});
	});

	function autoAdvance() {
		if (!carouselAutoadvance) return;

		let activeDotIndex = Array.from(dots).findIndex(dot => dot.classList.contains('active'));
		let nextIndex = (activeDotIndex + 1) % dots.length;
		advanceCarouselTo(nextIndex);
	}

	autoAdvanceInterval = setInterval(autoAdvance, 5000);
}

function sortAndDisplayPosts() {
	// Collect and sort posts by date
	let posts = Array.from(document.querySelectorAll('.post[data-isodate]'));
	let todayFormatted = getFormattedCurrentDateTime();
	let [futurePosts, pastPosts] = splitAndSortPosts(posts, todayFormatted);

	// Remove existing posts and reinsert them in sorted order
	let parent = posts[0].parentNode;
	posts.forEach(post => parent.removeChild(post));
	insertSortedPosts(parent, futurePosts, pastPosts, todayFormatted);
}

function getFormattedCurrentDateTime() {
	// Format the current date and time
	let today = new Date();
	return [
		today.getFullYear(),
		String(today.getMonth() + 1).padStart(2, '0'),
		String(today.getDate()).padStart(2, '0')
	].join('-') + ' ' + [
		String(today.getHours()).padStart(2, '0'),
		String(today.getMinutes()).padStart(2, '0'),
		String(today.getSeconds()).padStart(2, '0')
	].join(':');
}

function splitAndSortPosts(posts, todayFormatted) {
	// Split posts into future and past and sort future posts
	let futurePosts = posts.filter(post => post.getAttribute('data-isodate') >= todayFormatted);
	let pastPosts = posts.filter(post => post.getAttribute('data-isodate') < todayFormatted);

	pastPosts.forEach(post => {
		// Find and remove the RSVP button
		let rsvpButton = post.querySelector('.rsvp-button');
		if (rsvpButton) {
			rsvpButton.remove();
		}
	});

	futurePosts.sort((a, b) => a.getAttribute('data-isodate').localeCompare(b.getAttribute('data-isodate')));

	return [futurePosts, pastPosts];
}


function insertSortedPosts(parent, futurePosts, pastPosts, todayFormatted) {
	// Insert sorted posts and add a marker for past events
	let sortedPosts = [...futurePosts, ...pastPosts];
	let pastEventsAdded = false;

	sortedPosts.forEach(post => {
		if (post.getAttribute('data-isodate') < todayFormatted && !pastEventsAdded) {
			parent.appendChild(createPastEventsMarker());
			pastEventsAdded = true;
		}
		parent.appendChild(post);
	});
}

function createPastEventsMarker() {
	// Create a marker for past events
	let marker = document.createElement('div');
	marker.classList.add('past-events-marker');
	marker.innerHTML = `<div class="past-text noselect">Past Events</div><div class="past-line"></div>`;
	return marker;
}

function decorateJoinMeetingButton() {
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
			document.getElementById("join-meeting").classList.add("disabled");
			return "tonight at 7:30";
		}
		// Check if it's Tuesday and within 30 minutes of the start of a meeting
		else if (dayOfWeek === 2 && (etHour === 19 && etMinutes < 30)) {
			document.getElementById("join-meeting").classList.remove("disabled");
			return countdown();
		}
		// Check if it's Tuesday and between 7:30 PM and 8:30 PM ET
		else if (dayOfWeek === 2 && (etHour === 19 && etMinutes >= 30 || etHour === 20 && etMinutes <= 30)) {
			document.getElementById("join-meeting").classList.remove("disabled");
			return "meeting in progress";
		}
		else {
			document.getElementById("join-meeting").classList.add("disabled");
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
	document.getElementById("join-meeting-hint-text").innerText = getMeetingStatus();
}