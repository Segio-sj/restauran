// Динамический таймер (опционально)
document.addEventListener('DOMContentLoaded', () => {
    const timerBoxes = document.querySelectorAll('.timer-box span');
    const endDate = new Date('2025-07-01T23:59:59').getTime();

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
document.addEventListener('DOMContentLoaded', () => {
    const openBtns = document.querySelectorAll('.book-btn');
    const modal    = document.getElementById('modal');
    const closeBtn = document.querySelector('.modal-close');
    const content  = document.querySelector('.modal-content');
  
    // Вешаем на каждую кнопку
    openBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.add('show');
      });
    });
  
    // Закрытие по кресту
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  
    // Закрытие кликом по фону
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  
    // Останавливаем всплытие внутри модалки
    content.addEventListener('click', e => e.stopPropagation());
  
    // Отправка формы
    document.getElementById('booking-form').addEventListener('submit', e => {
      e.preventDefault();
      alert('Спасибо! Ваша заявка отправлена.');
      modal.classList.remove('show');
      e.target.reset();
    });
  });
  