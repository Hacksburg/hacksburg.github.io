window.addEventListener('DOMContentLoaded', (event) => {
	// if js is enabled, show xBoxes
	Array.from(document.getElementsByClassName("x-box")).forEach(x => x.style.display = "flex");
	
	// dim/undim current page in nav-links while hovering over other nav elements
	currentPage = document.getElementById('current-page');
	navLinkContainer = document.getElementById('nav-links')
	navLinks = navLinkContainer.children;
	navLinkContainer.onmouseleave = undimCurrentPage;
	for (var i = 0; i < navLinks.length; i++) {
		if (navLinks[i].id != "nav-break" && navLinks[i].id != "current-page") {
			navLinks[i].onmouseover = dimCurrentPage;
		}
	}
	
	// Set initial theme color
	updateThemeColor();
	
	// Listen for theme changes
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeColor);
});

function dimCurrentPage() {
	currentPage.style.cssText = "color: var(--black)";
}

function undimCurrentPage() {
	currentPage.style.cssText = "color: var(--darker-green)";
}

function updateThemeColor() {
	const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const backgroundColor = isDark ? '#151920' : '#ffffff';
	document.getElementById('pwaThemeColor').setAttribute('content', backgroundColor);
}

function togglePostOpened(xBox)
{
	closeable = xBox.parentNode.parentNode.querySelector('.closeable');
	if (closeable.classList.contains('closed')) {
		x = xBox.querySelector('.x');
		x.style.transform = 'rotate(-45deg)';
		closeable.classList.remove('closed');
	}
	else {
		x = xBox.querySelector('.x');
		x.style.transform = "rotate(0deg)";
		closeable.classList.add('closed'); 
	}
}

