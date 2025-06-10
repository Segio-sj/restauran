// Динамический таймер (опционально)
document.addEventListener('DOMContentLoaded', () => {
    const timerBoxes = document.querySelectorAll('.timer-box span');
    const endDate = new Date('2025-06-01T23:59:59').getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        if (timeLeft <= 0) {
            timerBoxes.forEach(box => box.textContent = '00');
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerBoxes[0].textContent = String(days).padStart(2, '0');
        timerBoxes[1].textContent = String(hours).padStart(2, '0');
        timerBoxes[2].textContent = String(minutes).padStart(2, '0');
        timerBoxes[3].textContent = String(seconds).padStart(2, '0');
    };

    setInterval(updateTimer, 1000);
    updateTimer();
});