const leftButton = document.getElementById('leftDev');
const rightButton = document.getElementById('rightDev');
const developedList = document.querySelector('.developedList');

// Изначальное смещение в процентах
let currentOffsetPercent = 0;

// Ограничения по смещению
const minOffset = -50; // минимально возможное смещение (например, -200%)
const maxOffset = 0;      // максимально возможное смещение (0%)

// Обработчик для кнопки "налево" (уменьшаем значение)
leftButton.addEventListener('click', () => {
const newOffset = currentOffsetPercent + 50;
if (newOffset <= maxOffset) {
    currentOffsetPercent = newOffset;
    developedList.style.left = currentOffsetPercent + '%';
}
});

// Обработчик для кнопки "направо" (увеличиваем значение)
rightButton.addEventListener('click', () => {
const newOffset = currentOffsetPercent - 50;
if (newOffset >= minOffset) {
    currentOffsetPercent = newOffset;
    developedList.style.left = currentOffsetPercent + '%';
}
});

// 



const leftBtnScheme = document.getElementById('leftScheme');
const rightBtnScheme = document.getElementById('rightScheme');
const schemeList = document.querySelector('.schemeList');

// Изначальное смещение в процентах
let currentSchemeOffset = 0;

// Ограничения (например, с -66% по 0%)
const minSchemeOffset = -66; // максимально смещение влево
const maxSchemeOffset = 0;   // максимально смещение вправо (исходное)

// Функция для обновления видимости кнопок
function updateButtons() {
    if (currentSchemeOffset <= minSchemeOffset) {
        leftBtnScheme.style.display = 'none';
    } else {
        leftBtnScheme.style.display = '';
    }

    if (currentSchemeOffset >= maxSchemeOffset) {
        rightBtnScheme.style.display = 'none';
    } else {
        rightBtnScheme.style.display = '';
    }
}

// Изначально вызываем чтобы установить правильное состояние кнопок
updateButtons();

leftBtnScheme.addEventListener('click', () => {
    const newOffset = currentSchemeOffset - 33;
    if (newOffset >= minSchemeOffset) {
        currentSchemeOffset = newOffset;
        schemeList.style.left = currentSchemeOffset + '%';
        updateButtons();
    }
});

rightBtnScheme.addEventListener('click', () => {
    const newOffset = currentSchemeOffset + 33;
    if (newOffset <= maxSchemeOffset) {
        currentSchemeOffset = newOffset;
        schemeList.style.left = currentSchemeOffset + '%';
        updateButtons();
    }
});

// 



const reviewItems = document.querySelectorAll('.reviewItem');
const leftBtn = document.getElementById('leftRev');
const rightBtn = document.getElementById('rightRev');

let startIndex = 0;
let showCount = window.innerWidth >= 800 ? 3 : 2; // начальное значение
const totalItems = reviewItems.length;

// Функция для обновления showCount при изменении окна
function updateShowCount() {
  showCount = window.innerWidth >= 801 ? 3 : 2;
  // Можно сбросить startIndex, чтобы не было пустых слайдов
  if (startIndex + showCount > totalItems) {
    startIndex = Math.max(totalItems - showCount, 0);
  }
  showReviews();
}

// Отслеживаем изменение размера окна
window.addEventListener('resize', updateShowCount);

// Функция для отображения отзывов
function showReviews() {
  reviewItems.forEach((item, index) => {
    if (index >= startIndex && index < startIndex + showCount) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}

// Изначально показываем
showReviews();

// Обработчик для кнопки "влево"
leftBtn.addEventListener('click', () => {
  if (startIndex - showCount >= 0) {
    startIndex -= showCount;
  } else {
    startIndex = 0; // не уходим за границы
  }
  showReviews();
});

// Обработчик для кнопки "вправо"
rightBtn.addEventListener('click', () => {
  if (startIndex + showCount < totalItems) {
    startIndex += showCount;
  }
  showReviews();
});
