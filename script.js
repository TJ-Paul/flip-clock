// Existing clock update logic...
function updateClock() {
    // ...
}

updateClock();
setInterval(updateClock, 1000);

// New JavaScript for fullscreen functionality
const fullscreenBtn = document.getElementById('fullscreen-btn');
const docElem = document.documentElement;

fullscreenBtn.addEventListener('click', () => {
    if (docElem.requestFullscreen) {
        docElem.requestFullscreen();
        fullscreenBtn.textContent = 'Exit Fullscreen';
    } else if (docElem.mozRequestFullScreen) { /* Firefox */
        docElem.mozRequestFullScreen();
        fullscreenBtn.textContent = 'Exit Fullscreen';
    } else if (docElem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docElem.webkitRequestFullscreen();
        fullscreenBtn.textContent = 'Exit Fullscreen';
    } else if (docElem.msRequestFullscreen) { /* IE/Edge */
        docElem.msRequestFullscreen();
        fullscreenBtn.textContent = 'Exit Fullscreen';
    }
});

// Event listener to change button text when exiting fullscreen
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.textContent = 'Fullscreen';
    }
});

document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
        fullscreenBtn.textContent = 'Fullscreen';
    }
});

document.addEventListener('mozfullscreenchange', () => {
    if (!document.mozFullScreenElement) {
        fullscreenBtn.textContent = 'Fullscreen';
    }
});

document.addEventListener('MSFullscreenChange', () => {
    if (!document.msFullscreenElement) {
        fullscreenBtn.textContent = 'Fullscreen';
    }
});