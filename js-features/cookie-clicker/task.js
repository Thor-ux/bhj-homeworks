const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

// Variables
let clicks = 0;
let isCookieEnlarged = false;

// Click count and cookie size
function updateClickCount() {
    // Increment click count
    clicks++;
    clickerCounter.textContent = clicks;

    // Toggle cookie size
    if (isCookieEnlarged) {
        cookie.width = 200;
    } else {
        cookie.width = 220;
    }
    isCookieEnlarged = !isCookieEnlarged;
}

// Click event listener
cookie.addEventListener('click', updateClickCount);
