window.addEventListener('DOMContentLoaded', (event) => {
	// if js is enabled, show x_boxes
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
});

function dim_current_page() {
	current_page.style.cssText = "color: var(--black)";
}

function undim_current_page() {
	current_page.style.cssText = "color: var(--darker_green)";
}

function togglePostOpened(x_box)
{
	// get closest parent's data-hash attribute
	// if it's not in localstorage, store a false and continue
	// if it is in localstorage, toggle it

	closeable = x_box.parentNode.parentNode.querySelector('.closeable');
	if (closeable.classList.contains('closed')) {
		x = x_box.querySelector('.x');
		x.style.transform = 'rotate(-45deg)';
		closeable.classList.remove('closed');
	}
	else {
		x = x_box.querySelector('.x');
		x.style.transform = "rotate(0deg)";
		closeable.classList.add('closed'); 
	}
}

