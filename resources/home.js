window.addEventListener('DOMContentLoaded', (event) => {
	//if js is enabled, show carousel_nav
	document.getElementById("carousel_nav").style.display = "block";
	
	// Grab the data-images attribute from the div with the id 'carousel_container'
	var images = JSON.parse(document.querySelector('#carousel_container').getAttribute('data-images'));

	// Iterate through the images array and preload each one
	for(var i = 0; i < images.length; i++) {
		new Image().src = images[i];
	}
	
	// Get all posts with the 'data-isodate' attribute
	let posts = Array.from(document.querySelectorAll('.post[data-isodate]'));

	// Get today's date
	let today = new Date();

	// Format today's date to match the 'data-isodate' attribute format
	let todayFormatted = [
		today.getFullYear(),
		String(today.getMonth() + 1).padStart(2, '0'),
		String(today.getDate()).padStart(2, '0')
	].join('-') + ' ' + [
		String(today.getHours()).padStart(2, '0'),
		String(today.getMinutes()).padStart(2, '0'),
		String(today.getSeconds()).padStart(2, '0')
	].join(':');

	console.log(todayFormatted);

	// Split posts into future and past
	let futurePosts = posts.filter(post => post.getAttribute('data-isodate') >= todayFormatted);
	let pastPosts = posts.filter(post => post.getAttribute('data-isodate') < todayFormatted);

	// Sort future posts in ascending order
	futurePosts.sort((a, b) => a.getAttribute('data-isodate').localeCompare(b.getAttribute('data-isodate')));

	// Merge sorted arrays
	let sortedPosts = futurePosts.concat(pastPosts);

	// Get parent element
	let parent = posts[0].parentNode;

	// Remove all posts from DOM
	for (let post of posts) {
		parent.removeChild(post);
	}

	// Insert marker for past events at correct position
	let pastEventsAdded = false;
	for (let i = 0; i < sortedPosts.length; i++) {
		let post = sortedPosts[i];
		if (post.getAttribute('data-isodate') < todayFormatted && !pastEventsAdded) {
			// Insert the past events marker before the current post
			let marker = document.createElement('div');
			marker.classList.add('past_events_marker');
			marker.innerHTML = `<div class="past_text noselect">Past Events</div><div class="past_line"></div>`;
			parent.appendChild(marker);
			pastEventsAdded = true;
		}
		// Add post back into DOM
		parent.appendChild(post);
	}
	
	// Handle image carousel
	let carousel = document.querySelector('#carousel_container');

	if (carousel && carousel.hasAttribute('data-images')) {
		let carousel_autoadvance = true;
		let images = JSON.parse(carousel.dataset.images);
		let dots = carousel.querySelectorAll('.carousel_nav_inner .carousel_nav_dot');
		let firstImage = carousel.querySelector('.post_image.first'); // The image we're transitioning from
		let secondImage = carousel.querySelector('.post_image.second'); // The image we're transitioning to
	
		let isTransitioning = false;

		function endTransition() {
			// Reset states after transition
			firstImage.style.transition = 'opacity 0ms';
			firstImage.src = secondImage.src;
			firstImage.style.opacity = '1';
			isTransitioning = false;
		}

		function advanceCarouselTo(index) {
			if (isTransitioning || dots[index].classList.contains('active')) {
				return; // Ignore clicks during transition
			}

			isTransitioning = true;
			dots.forEach((dot) => dot.classList.remove('active'));
			dots[index].classList.add('active');
			
			setTimeout(() => {
				endTransition();
			}, 700); // Match this time with the duration of the CSS transition

			secondImage.src = images[index];
			firstImage.style.transition = 'opacity 700ms';
			firstImage.style.opacity = '0';
		}

		dots.forEach((dot, index) => {
			dot.addEventListener('click', () => {
				advanceCarouselTo(index);

				// Stop auto-advancement on user interaction
				carousel_autoadvance = false;
				if (autoAdvanceInterval) {
					clearInterval(autoAdvanceInterval);
				}
			});
		});

		function autoAdvance() {
			if (!carousel_autoadvance) return;

			let activeDotIndex = Array.from(dots).findIndex((dot) => dot.classList.contains('active'));
			let nextIndex = (activeDotIndex + 1) % dots.length;
			advanceCarouselTo(nextIndex);
		}

		let autoAdvanceInterval = setInterval(autoAdvance, 5000); // Start auto-advancement
	}

});