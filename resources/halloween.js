function initHalloween() {
	// Check if current month is October (month is 0-based, so October is 9)
	const currentMonth = new Date().getMonth();
	if (currentMonth !== 9) {
		return; // Exit if not October
	}

	// Create and inject the CSS
	const styleSheet = document.createElement('style');
	styleSheet.textContent = `
		/* Halloween Theme CSS */
		:root {
			--halloween-offwhite: #ebe8e2;
			--halloween-orange: #ff5705;
			--halloween-darker-orange: #ff4c05;
			--halloween-grey: #151515;
			--darker-green: var(--halloween-orange);
			--lighter-green: var(--halloween-orange);
		}

		#halloween-spiderweb {
			position: fixed;
			top: 0;
			right: 0;
			width: 200px;
			height: 200px;
			background-image: url('/resources/images/spiderweb.png');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: top right;
			z-index: 9999;
			pointer-events: none;
		}

		.halloween-ghost {
			position: fixed;
			background-image: url('/resources/images/ghost.gif');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			z-index: 1;
			pointer-events: auto;
			opacity: 0;
			transition: opacity 2s ease-in-out;
			cursor: pointer;
		}

		.post {
			position: relative;
			z-index: 2;
		}

		#nav-links {
			position: relative;
			z-index: 2;
		}

		.button {
			--darker-green: var(--halloween-darker-orange);
			--lighter-green: var(--halloween-orange);
		}

		.button.unsubscribe {
			--tomato: #6b2a8f;
			--tomato-soup: #8b3ab8;
		}

		/* Force dark mode styling for Halloween */
		:root {
			--darker-green: var(--halloween-orange);
			--offblack: var(--halloween-grey);
		}

		#hacksignia-light {
			display: none !important;
		}

		#hacksignia-dark {
			display: inline-block !important;
			content: url('/resources/hacksignia_dark_halloween.svg');
		}

		body {
			background-color: #0c0c0c !important;
		}

		#header-text {
			color: var(--offwhite) !important;
		}

		#header-text h1, #header-text h3 {
			text-shadow: 0 0 2px var(--black), 0 0 6px var(--black), 0 0 12px rgba(21, 21, 21, 0.8);
		}

		#nav-links > a {
			color: var(--offwhite) !important;
			text-shadow: 0 0 2px var(--black), 0 0 6px rgba(21, 21, 21, 0.9), 0 0 12px rgba(21, 21, 21, 0.7);
		}

		#nav-links > a:hover {
			color: var(--halloween-orange) !important;
		}

		.hacksignia {
			filter: drop-shadow(0 0 3px var(--black)) drop-shadow(0 0 8px rgba(21, 21, 21, 0.7));
		}

		.rule {
			background-color: var(--offwhite) !important;
			filter: drop-shadow(0 0 2px var(--black)) drop-shadow(0 0 5px rgba(21, 21, 21, 0.6));
		}

		.post-text-rule {
			background-color: var(--offwhite) !important;
		}

		.title-and-subtitle {
			color: var(--offwhite) !important;
		}

		.x {
			background: var(--offwhite) !important;
		}

		.x:after {
			background: var(--offwhite) !important;
		}

		.pushpin {
			color: var(--offwhite) !important;
		}

		.post-text {
			background-color: var(--offblack) !important;
			color: var(--offwhite) !important;
		}

		.button.disabled {
			background-color: var(--offblack) !important;
		}

		.post {
			box-shadow: 0px 7px 12px rgba(0, 0, 0, 0.47) !important;
		}

		.post-map {
			filter: invert(92%) hue-rotate(180deg) brightness(85%) contrast(110%) saturate(110%) !important;
		}

		#current-page {
			--black: var(--offwhite);
			text-shadow: 0 0 1px black, 0 0 4px rgba(21, 21, 21, 0.6) !important;
		}

		#pushpin-light {
			display: none !important;
		}

		#pushpin-dark {
			display: inline-block !important;
		}

		.calendar-link {
			background-color: var(--offblack) !important;
		}

		.month-and-time {
			color: var(--offwhite) !important;
		}

		.circled-date {
			background-color: var(--offwhite) !important;
			color: var(--black) !important;
		}

		.post-text-rule-mini {
			background-color: var(--offwhite) !important;
		}

		.past-text {
			color: var(--offwhite) !important;
			text-shadow: 0 0 2px var(--black), 0 0 6px rgba(21, 21, 21, 0.6);
		}

		.past-line {
			background-color: var(--offwhite) !important;
			filter: drop-shadow(0 0 2px var(--black)) drop-shadow(0 0 5px rgba(21, 21, 21, 0.6));
		}

		.post-image {
			filter: brightness(95%) !important;
		}

		#donation-jar {
			filter: brightness(75%) !important;
		}

		@media(any-hover: hover) and (any-pointer: fine) {
			.x-box:hover .x {
				background: var(--halloween-orange) !important;
			}
			.x-box:hover .x:after {
				background: var(--halloween-orange) !important;
			}
		}
	`;
	document.head.appendChild(styleSheet);

	// Add spiderweb element
	const spiderweb = document.createElement('div');
	spiderweb.id = 'halloween-spiderweb';
	document.body.appendChild(spiderweb);

	// Update carousel images to Halloween theme
	const carouselSubstitute = document.getElementById('carousel-substitute');
	const carouselContainer = document.getElementById('carousel-container');
	const carouselFirstImage = document.querySelector('#carousel-container .post-image.first');

	if (carouselSubstitute && carouselContainer && carouselFirstImage) {
		const halloweenImages = [
			'/resources/images/pumpkin_carving.jpg',
			'/resources/images/pumpkin_carving2.jpg',
			'/resources/images/pumpkin_chunkin.jpg'
		];

		carouselSubstitute.src = halloweenImages[0];
		carouselContainer.setAttribute('data-images', JSON.stringify(halloweenImages));
		carouselFirstImage.src = halloweenImages[0];
	}

	// Create Audio Context for effects
	const audioContext = new (window.AudioContext || window.webkitAudioContext)();

	// Create a convolver node for reverb effect
	const convolver = audioContext.createConvolver();

	// Generate impulse response for reverb
	function createReverbImpulse(duration, decay) {
		const sampleRate = audioContext.sampleRate;
		const length = sampleRate * duration;
		const impulse = audioContext.createBuffer(2, length, sampleRate);
		const impulseL = impulse.getChannelData(0);
		const impulseR = impulse.getChannelData(1);

		for (let i = 0; i < length; i++) {
			impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
			impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
		}
		return impulse;
	}

	convolver.buffer = createReverbImpulse(2.5, 3);

	// Preload ghost sound effects
	const ghostSounds = [
		new Audio('/resources/sounds/ghost1.mp3'),
		new Audio('/resources/sounds/ghost2.mp3'),
		new Audio('/resources/sounds/ghost3.mp3')
	];

	// Preload all sounds
	ghostSounds.forEach(sound => {
		sound.preload = 'auto';
		sound.load();
	});

	let lastPlayedSoundIndex = -1;

	// Halloween Ghost Animation System
	let ghostCount = 0;
	const MAX_GHOSTS = 2;
	const MIN_SCALE = 0.8;
	const MAX_SCALE = 1.2;
	const MIN_FADE_DURATION = 3000;
	const MAX_FADE_DURATION = 8000;
	const MIN_SPAWN_INTERVAL = 8000;
	const MAX_SPAWN_INTERVAL = 20000;

	function getRandomPosition() {
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const ghostSize = 200; // approximate ghost size

		return {
			x: Math.random() * (viewportWidth - ghostSize),
			y: Math.random() * (viewportHeight - ghostSize)
		};
	}

	function getRandomScale() {
		return MIN_SCALE + Math.random() * (MAX_SCALE - MIN_SCALE);
	}

	function getRandomDuration() {
		return MIN_FADE_DURATION + Math.random() * (MAX_FADE_DURATION - MIN_FADE_DURATION);
	}

	function playRandomGhostSound(onEnd) {
		// Select a random sound that's different from the last one played
		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * ghostSounds.length);
		} while (randomIndex === lastPlayedSoundIndex && ghostSounds.length > 1);

		lastPlayedSoundIndex = randomIndex;

		const sound = ghostSounds[randomIndex].cloneNode();

		// Create audio nodes for effect processing
		const source = audioContext.createMediaElementSource(sound);
		const gainNode = audioContext.createGain();
		const dryGain = audioContext.createGain();
		const wetGain = audioContext.createGain();

		// Set volume levels
		gainNode.gain.value = 0.2;
		dryGain.gain.value = 0.4; // Dry signal (original)
		wetGain.gain.value = 0.6; // Wet signal (reverb)

		// Route audio: source -> split into dry and wet paths -> merge -> destination
		source.connect(dryGain);
		source.connect(convolver);
		convolver.connect(wetGain);
		dryGain.connect(gainNode);
		wetGain.connect(gainNode);
		gainNode.connect(audioContext.destination);

		if (onEnd) {
			sound.addEventListener('loadedmetadata', () => {
				const duration = sound.duration;
				const triggerTime = duration * 0.60;
				setTimeout(onEnd, triggerTime * 1000);
			});
		}

		sound.play().catch(err => {
			// Silently catch if autoplay is blocked
			console.log('Audio play prevented:', err);
			// Call onEnd immediately if play fails
			if (onEnd) onEnd();
		});
	}

	function createGhost() {
		if (ghostCount >= MAX_GHOSTS || isResizing) return;

		const ghost = document.createElement('div');
		ghost.className = 'halloween-ghost';

		const position = getRandomPosition();
		const scale = getRandomScale();
		const size = 180; // Fixed base size

		ghost.style.left = position.x + 'px';
		ghost.style.top = position.y + 'px';
		ghost.style.width = size + 'px';
		ghost.style.height = size + 'px';
		ghost.style.transform = `scale(${scale})`;

		let clicked = false;
		let fadeTimeout;

		// Add click event listener
		ghost.addEventListener('click', () => {
			if (clicked) return; // Prevent multiple clicks
			clicked = true;

			// Clear the scheduled fade out
			if (fadeTimeout) {
				clearTimeout(fadeTimeout);
			}

			playRandomGhostSound(() => {
				// After sound ends, start fade out
				ghost.style.opacity = '0';
				setTimeout(() => {
					if (ghost.parentNode) {
						ghost.parentNode.removeChild(ghost);
						ghostCount--;
					}
				}, 2000); // Wait for fade transition
			});
		});

		document.body.appendChild(ghost);
		ghostCount++;

		// Fade in
		setTimeout(() => {
			ghost.style.opacity = '0.7';
		}, 100);

		// Fade out and remove
		const duration = getRandomDuration();
		fadeTimeout = setTimeout(() => {
			if (!clicked) { // Only fade out naturally if not clicked
				ghost.style.opacity = '0';
				setTimeout(() => {
					if (ghost.parentNode) {
						ghost.parentNode.removeChild(ghost);
						ghostCount--;
					}
				}, 2000); // Wait for fade transition
			}
		}, duration);
	}

	function scheduleNextGhost() {
		const interval = MIN_SPAWN_INTERVAL + Math.random() * (MAX_SPAWN_INTERVAL - MIN_SPAWN_INTERVAL);
		setTimeout(() => {
			createGhost();
			scheduleNextGhost();
		}, interval);
	}

	// Handle window resize
	let resizeTimeout;
	let isResizing = false;

	function handleResize() {
		// Immediately despawn all ghosts without fadeout
		const existingGhosts = document.querySelectorAll('.halloween-ghost');
		existingGhosts.forEach(ghost => {
			if (ghost.parentNode) {
				ghost.parentNode.removeChild(ghost);
				ghostCount--;
			}
		});

		// Set resizing flag
		isResizing = true;

		// Clear existing timeout
		clearTimeout(resizeTimeout);

		// Resume spawning after resize ends (300ms of no resize events)
		resizeTimeout = setTimeout(() => {
			isResizing = false;
		}, 300);
	}

	// Start the ghost system
	function initGhosts() {
		// Create initial ghost
		setTimeout(createGhost, 1000);

		// Schedule future ghosts
		scheduleNextGhost();

		// Handle window resize
		window.addEventListener('resize', handleResize);
	}

	// Handle visibility change
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			// Could pause ghost spawning if desired
		} else {
			// Resume ghost spawning if desired
		}
	});

	// Start initial ghost system after delay
	setTimeout(() => {
		if (!document.hidden) {
			initGhosts();
		}
	}, 2000);
}

// Initialize immediately on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initHalloween);
