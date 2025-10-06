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
    
    // Update the DOM
    document.querySelector('#hour1 .flip-card-face').textContent = h1;
    document.querySelector('#hour2 .flip-card-face').textContent = h2;
    document.querySelector('#min1 .flip-card-face').textContent = m1;
    document.querySelector('#min2 .flip-card-face').textContent = m2;
    document.querySelector('#sec1 .flip-card-face').textContent = s1;
    document.querySelector('#sec2 .flip-card-face').textContent = s2;
    document.getElementById('period').textContent = period;
}

// Initial call to display the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);