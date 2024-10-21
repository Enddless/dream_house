let currentPage = 1; // Начальная страница
const sections = document.querySelectorAll('.section'); // Получаем все секции
const dotsContainer = document.querySelector('.dots'); // Контейнер для точек

// Заполняем точки навигации
sections.forEach((section, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.dataset.page = index + 1; // Сохраняем номер страницы
  dot.addEventListener('click', () => {
    currentPage = index + 1;
    renderPage();
  });
  dotsContainer.appendChild(dot);
});

// Функция для обновления активной точки
function updateActiveDot() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[currentPage - 1].classList.add('active');
}

// Функция для отображения текущей страницы
function renderPage() {
  sections.forEach((section, index) => {
    section.style.display = index === currentPage - 1 ? 'block' : 'none';
  });
  updateActiveDot();

  // Обновление адреса в адресной строке
  const newUrl = currentPage === 1 ? '#about' : `#${sections[currentPage - 1].id}`;
  history.pushState({ page: currentPage }, '', newUrl);

  // Плавная прокрутка к текущей секции
  const targetSection = sections[currentPage - 1];
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Обработчик прокрутки
function handleScroll(event) {
  const delta = Math.sign(event.deltaY);
  if (delta > 0 && currentPage < sections.length) {
    currentPage++;
  } else if (delta < 0 && currentPage > 1) {
    currentPage--;
  }
  renderPage();
}

// Обработчик кликов по пунктам меню
document.querySelectorAll('.header__menu-link').forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    currentPage = index + 1; // Устанавливаем текущую страницу
    renderPage(); // Обновляем страницу
  });
});

// Обработчик кликов по пунктам меню dialog
document.querySelectorAll('.mobile-overlay__menu-link').forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    currentPage = index + 1; // Устанавливаем текущую страницу
    renderPage(); // Обновляем страницу

    // Закрываем диалоговое окно
    const mobileOverlay = document.getElementById('mobileOverlay');
    mobileOverlay.close(); // Закрываем диалог
  });
});

// Инициализация
document.addEventListener('wheel', handleScroll);
renderPage(); // Отображаем первую страницу при загрузке

// Обработка события при переходе по истории
window.addEventListener('popstate', (event) => {
  if (event.state) {
    currentPage = event.state.page;
    renderPage();
  }
});
