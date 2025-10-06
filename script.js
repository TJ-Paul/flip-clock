function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM/PM period
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Calculate individual digits
    const h1 = Math.floor(hours / 10);
    const h2 = hours % 10;
    const m1 = Math.floor(minutes / 10);
    const m2 = minutes % 10;
    const s1 = Math.floor(seconds / 10);
    const s2 = seconds % 10;

    // Call the flip function for each digit if it has changed
    flip(document.getElementById('hour1'), h1);
    flip(document.getElementById('hour2'), h2);
    flip(document.getElementById('min1'), m1);
    flip(document.getElementById('min2'), m2);
    flip(document.getElementById('sec1'), s1);
    flip(document.getElementById('sec2'), s2);

    document.getElementById('period').textContent = period;
}

// Flip function to animate the cards
function flip(card, newNumber) {
    const front = card.querySelector('.flip-card-front');
    const back = card.querySelector('.flip-card-back');
    const currentNumber = parseInt(front.textContent);

    if (currentNumber === newNumber) {
        return;
    }

    back.textContent = newNumber;
    card.classList.add('flipped');

    // Wait for the animation to complete before changing the front face
    setTimeout(() => {
        front.textContent = newNumber;
        card.classList.remove('flipped');
    }, 600); // This duration should match the transition speed in CSS
}


// Initial call to display the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// Fullscreen functionality
const fullscreenBtn = document.getElementById('fullscreen-btn');
const fullscreenIcon = document.querySelector('#fullscreen-btn i');
const docElem = document.documentElement;

fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        if (docElem.requestFullscreen) {
            docElem.requestFullscreen();
        } else if (docElem.mozRequestFullScreen) {
            docElem.mozRequestFullScreen();
        } else if (docElem.webkitRequestFullscreen) {
            docElem.webkitRequestFullscreen();
        } else if (docElem.msRequestFullscreen) {
            docElem.msRequestFullscreen();
        }
    }
});

// Event listener to change the icon when the fullscreen state changes
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        fullscreenIcon.classList.remove('fa-expand');
        fullscreenIcon.classList.add('fa-compress');
    } else {
        fullscreenIcon.classList.remove('fa-compress');
        fullscreenIcon.classList.add('fa-expand');
    }
});

// Zoom functionality with separate buttons and limits
const zoomInBtn = document.getElementById('zoom-in-btn');
const zoomOutBtn = document.getElementById('zoom-out-btn');
const clockContainer = document.querySelector('.clock-container');

let currentZoomLevel = 1.0;
const zoomStep = 0.1;

zoomInBtn.addEventListener('click', () => {
    currentZoomLevel += zoomStep;
    clockContainer.style.transform = `scale(${currentZoomLevel})`;
});

zoomOutBtn.addEventListener('click', () => {
    if (currentZoomLevel > 1.0) {
        currentZoomLevel -= zoomStep;
        clockContainer.style.transform = `scale(${currentZoomLevel})`;
    } else {
        // Add shake animation if zoom-out limit is reached
        clockContainer.classList.add('shake');
        // Remove the shake class after the animation finishes
        setTimeout(() => {
            clockContainer.classList.remove('shake');
        }, 300);
    }
});