const stepsData = [
  {
    id: 0,
    title: 'LEAVE AN APPLICATION',
    text: 'LEAVE AN APPLICATION BY PHONE OR ON OUR WEBSITE',
    icon: 'step1'
  },
  {
    id: 1,
    title: 'CHECK OUT OF THE MEASURER',
    text: 'OUR SPECIALIST COMES TO YOU AT THE OBJECT FOR MEASURING AND PHOTO FIXING',
    icon: 'step2'
  },
  {
    id: 2,
    title: 'DRAFTING AN ESTIMATE',
    text: 'DEVELOPMENT OF TERMS OF REFERENCE, 3D VISUALIZATION AND CALCULATION OF THE ESTIMATE',
    icon: 'step3'
  },
  {
    id: 3,
    title: 'SIGNING THE CONTRACT',
    text: 'AGREEMENT OF THE COST AND DATE OF COMPLETION OF WORKS, SIGNING OF THE CONTRACT',
    icon: 'step4'
  },
  {
    id: 4,
    title: 'BEGINNING OF WORK',
    text: 'START OF REPAIR WORKS UNDER THE SUPERVISION OF A PERSONAL SUPERVISOR',
    icon: 'step5'
  },
  {
    id: 5,
    title: 'COMPLETION',
    text: 'COMPLETION OF REPAIRS, REMOVAL OF CONSTRUCTION RUBBISH',
    icon: 'step6'
  }
];

let activeCard = 0;

function updateCircleProgress() {
  const circleProgress = document.querySelector('.steps__progress');
  const currentStep = activeCard + 1; // Текущий шаг (от 1 до 6)

  // Обновляем значения
  circleProgress.setAttribute('value', currentStep);
  circleProgress.setAttribute('max', stepsData.length); // Общее количество шагов

  // Обновление текстового значения
  const textValue = circleProgress.querySelector('.text-value');
  if (textValue) {
    textValue.textContent = `${currentStep} / ${stepsData.length}`; // Обновляем текст
  }
}

function updateSteps() {
  const stepsContainer = document.getElementById('stepsContainer');
  stepsContainer.innerHTML = ''; // Очистка контейнера

  const item = stepsData[activeCard]; // Получаем текущий шаг
  const card = document.createElement('div');
  card.className = 'steps__card steps__card--active';
  card.innerHTML = `
      <svg width='120' height='105'>
          <use xlink:href='./images/sprite.svg#${item.icon}'></use>
      </svg>
      <p class='steps__name'>${item.title}</p>
      <p class='steps__text'>${item.text}</p>
  `;
  stepsContainer.appendChild(card);

  updateCircleProgress(); // Обновление прогресса
}

document.getElementById('nextButton').addEventListener('click', () => {
  if (activeCard < stepsData.length - 1) {
    activeCard++;
  } else {
    activeCard = 0; // Сброс к первому шагу
  }
  updateSteps();
});

// Инициализация
updateSteps();
