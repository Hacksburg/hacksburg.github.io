function initSnowflakes() {
	// Check if current month is December (month is 0-based, so December is 11)
	const currentMonth = new Date().getMonth();
	if (currentMonth !== 11) {
		return; // Exit if not December
	}

	// Create and inject the CSS
	const styleSheet = document.createElement('style');
	styleSheet.textContent = `
		.snowflake {
			position: fixed;
			top: -20px;
			pointer-events: none;
			user-select: none;
			cursor: default;
			z-index: -9999;
		}
	
		@keyframes fall {
			0% {
				transform: translateY(-10vh) rotate(0deg);
			}
			100% {
				transform: translateY(110vh) translateX(var(--drift)) rotate(var(--rotation));
			}
		}

		.snowflake.paused {
			animation-play-state: paused !important;
		}

		@media (prefers-color-scheme: dark) {
			#nav-links > a {
				text-shadow: 1px 1px 1px var(--offblack);
			}
			#header-text h1, h3 {
				text-shadow: 1px 1px 1px var(--offblack);
			}
			.hacksignia {
				filter: drop-shadow(1px 1px 1px var(--offblack));
			}
			.rule {
				filter: drop-shadow(1px 1px 1px var(--offblack));
			}
			.past-text {
				filter: drop-shadow(1px 1px 1px var(--offblack));
			}
			.past-line {
				filter: drop-shadow(1px 1px 1px var(--offblack));
			}
		}

		@media only screen and (max-width: 35rem) {
			.snowflake {
				visibility: hidden;
			}
		}
	`;
	document.head.appendChild(styleSheet);

	let snowflakeInterval = null;

	function createSnowflake() {
		const snowflake = document.createElement('div');
		snowflake.innerHTML = '❄️';
		snowflake.className = 'snowflake';
		
		// Random size between 15px and 27px
		const size = Math.random() * 12 + 15;
		snowflake.style.fontSize = `${size}px`;
		
		// Random horizontal position
		const startX = Math.random() * window.innerWidth;
		snowflake.style.left = startX + 'px';
		
		// Random drift between -100px and 100px
		const drift = (Math.random() - 0.5) * 200;
		snowflake.style.setProperty('--drift', `${drift}px`);
		
		// Random rotation between -180 and 180 degrees
		const rotation = (Math.random() - 0.5) * 360;
		snowflake.style.setProperty('--rotation', `${rotation}deg`);
		
		// Random duration between 40 and 70 seconds
		const duration = Math.random() * 30 + 40;
		
		// Apply the animation
		snowflake.style.animation = `fall ${duration}s linear`;
		
		// Remove snowflake after animation completes
		snowflake.addEventListener('animationend', () => {
			snowflake.remove();
		});
		
		document.body.appendChild(snowflake);
	}

	function startSnowfall() {
		if (!snowflakeInterval) {
			snowflakeInterval = setInterval(createSnowflake, 900);
		}
		// Resume any paused snowflakes
		const snowflakes = document.querySelectorAll('.snowflake');
		snowflakes.forEach(snowflake => snowflake.classList.remove('paused'));
	}

	function pauseSnowfall() {
		if (snowflakeInterval) {
			clearInterval(snowflakeInterval);
			snowflakeInterval = null;
		}
		// Pause all existing snowflakes
		const snowflakes = document.querySelectorAll('.snowflake');
		snowflakes.forEach(snowflake => snowflake.classList.add('paused'));
	}

	// Handle visibility change
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			pauseSnowfall();
		} else {
			startSnowfall();
		}
	});

	// Start initial snowfall
	startSnowfall();
}

// Wait for page load and then delay initialization by 2 seconds
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(initSnowflakes, 2000);
});