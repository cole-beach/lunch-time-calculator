document.getElementById('lunch-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const duration = parseInt(document.getElementById('duration').value, 10);
    const returnTime = calculateReturnTime(duration);
    document.getElementById('result').textContent = `You need to be back by ${returnTime}.`;
});

function calculateReturnTime(minutes) {
    const currentTime = new Date();
    const returnTime = new Date(currentTime.getTime() + minutes * 60000);
    const hours = returnTime.getHours();
    const minutesFormatted = returnTime.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hoursFormatted = (hours % 12) || 12;
    return `${hoursFormatted}:${minutesFormatted} ${ampm}`;
}
