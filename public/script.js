function createCountdown() {
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDate = new Date(document.getElementById('eventDate').value).getTime();

    if (!eventTitle || isNaN(eventDate)) {
        alert('Please enter valid event details.');
        return;
    }

    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    if (timeRemaining < 0) {
        alert('Please select a future date for your event.');
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownDisplay = document.getElementById('countdownDisplay');
    countdownDisplay.innerHTML = `
        <h2>${eventTitle} Countdown</h2>
        <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>
    `;
}

function shareCountdown() {
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDate = new Date(document.getElementById('eventDate').value).getTime();
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    if (!eventTitle || isNaN(eventDate) || timeRemaining < 0) {
        alert('Please create a valid countdown before sharing.');
        return;
    }

    if (navigator.share) {
        navigator.share({
            title: `${eventTitle} Countdown`,
            text: `Countdown to ${eventTitle}: ${days}d ${hours}h ${minutes}m ${seconds}s`,
            url: window.location.href
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        alert('Web Share API not supported on this browser. Consider adding manual share buttons.');
    }
}
