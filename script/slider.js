const modal = document.getElementById('slideModal');
const swiperWrapper = document.querySelector('.swiper-wrapper');

const images = {
  elite: [
    'images/elite-gallery/1.jpg',
    'images/elite-gallery/2.jpg',
    'images/elite-gallery/3.jpg',
    'images/elite-gallery/4.jpg',
    'images/elite-gallery/5.jpg',
    'images/elite-gallery/6.jpg',
    'images/elite-gallery/7.jpg'
  ],
  vip: [
    'images/vip-gallery/1.jpg',
    'images/vip-gallery/2.jpg',
    'images/vip-gallery/3.jpg',
    'images/vip-gallery/4.jpg',
    'images/vip-gallery/5.jpg',
    'images/vip-gallery/6.jpg',
    'images/vip-gallery/7.jpg',
    'images/vip-gallery/8.jpg',
    'images/vip-gallery/9.jpg',
    'images/vip-gallery/10.jpg',
    'images/vip-gallery/11.jpg',
    'images/vip-gallery/12.jpg',
    'images/vip-gallery/13.jpg'
  ],
  extra: [
    'images/extra-gallery/1.jpg',
    'images/extra-gallery/2.jpg',
    'images/extra-gallery/3.jpg',
    'images/extra-gallery/4.jpg',
    'images/extra-gallery/5.jpg',
    'images/extra-gallery/6.jpg',
    'images/extra-gallery/7.jpg',
    'images/extra-gallery/8.jpg',
    'images/extra-gallery/9.jpg',
    'images/extra-gallery/10.jpg',
    'images/extra-gallery/11.jpg'
  ]
};

let swiper; // Объявляем переменную swiper вне функции

// Функция для открытия модального окна
function openModal(slideType) {
  // Очищаем предыдущие слайды
  swiperWrapper.innerHTML = '';

  // Добавляем новые слайды
  images[slideType].forEach((image) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="${image}" alt="Slide Image" style="width: 100%; object-fit: cover;">`;
    swiperWrapper.appendChild(slide);
  });

  // Инициализируем Swiper после добавления слайдов
  if (swiper) {
    swiper.destroy(); // Уничтожаем предыдущий экземпляр, если он существует
  }

  swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  modal.showModal(); // Показываем модальное окно
}

// Закрытие модального окна
document.querySelector('.mobile-overlay__close-button').addEventListener('click', () => {
  modal.close(); // Закрываем модальное окно
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.close();
  }
});
