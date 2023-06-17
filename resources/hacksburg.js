window.addEventListener('DOMContentLoaded', (event) => {
	//if js is enabled, enable x buttons on cards
	Array.from(document.getElementsByClassName("x_box")).forEach(x => x.style.display = "flex");
	// dim/undim current page in nav_links while hovering over other nav elements
	current_page = document.getElementById('current_page');
	nav_link_container = document.getElementById('nav_links')
	nav_links = nav_link_container.children;
	nav_link_container.onmouseleave = undim_current_page;
	for (var i = 0; i < nav_links.length; i++) {
		if (nav_links[i].id != "nav_break" && nav_links[i].id != "current_page") {
			nav_links[i].onmouseover = dim_current_page;
		}
	}
	
	// Get all posts with the 'data-isodate' attribute
	let posts = Array.from(document.querySelectorAll('.post[data-isodate]'));

	// Get today's date
	let today = new Date();

	// Format today's date to match the 'data-isodate' attribute format
	let todayFormatted = today.toISOString().substring(0, 10);

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

});

function dim_current_page() {
	current_page.style.cssText = "color: var(--black)";
}

function undim_current_page() {
	current_page.style.cssText = "color: var(--darker_green)";
}

function togglePostOpened(x)
{
	closeable = x.parentNode.parentNode.querySelector('.closeable');
	if (closeable.classList.contains('closed')) {
		x.style.transform = 'rotate(-45deg)';
		closeable.classList.remove('closed');
	}
	else {
		x.style.transform = "rotate(0deg)";
		closeable.classList.add('closed'); 
	}
}

