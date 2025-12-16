/* в этот файл добавляет скрипты*/
const container = document.querySelector('.compare-slider');
document.querySelector('.compare-slider__range-handle').addEventListener('input', (e) => {
  container.style.setProperty('--js-position', `${e.target.value}%`);
});
