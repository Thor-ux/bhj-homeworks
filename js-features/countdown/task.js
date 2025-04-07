// Timer element
const timerElement = document.getElementById('timer');

// Initial time (in seconds)
let timeRemaining = 60;

// Format as hh:mm:ss
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return [hours, minutes, remainingSeconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":");
}

// Update every second
const timerInterval = setInterval(() => {
    // Display in hh:mm:ss format
    timerElement.textContent = formatTime(timeRemaining);

    // Decrease by 1 second
    timeRemaining--;

    // Timer status
    if (timeRemaining < 0) {
        // Stop timer
        clearInterval(timerInterval);
        
        // Display message
        alert("Вы победили в конкурсе!");
    }
}, 1000);