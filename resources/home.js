window.addEventListener('DOMContentLoaded', (event) => {
	setupCarousel();
	sortAndDisplayPosts();
});

function setupCarousel() {
	// Show the carousel navigation if JavaScript is enabled
	document.getElementById("carousel-nav").style.display = "block";

	// Preload images for the carousel
	let carouselContainer = document.querySelector('#carousel-container');
	if (carouselContainer && carouselContainer.hasAttribute('data-images')) {
		let images = JSON.parse(carouselContainer.getAttribute('data-images'));
		images.forEach(imageSrc => {
			let img = new Image();
			img.src = imageSrc;
		});
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
		let rsvpButton = post.querySelector('.rsvp-button');
		if (rsvpButton) {
			rsvpButton.innerText = 'View on Meetup';
		}
		let belowButtonText = post.querySelector('.below-button-text');
		if (belowButtonText) {
			belowButtonText.remove();
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
