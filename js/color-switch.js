const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
btnStart.addEventListener('click', startBtnClick);
btnStop.addEventListener('click', stopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomIntegerFromInterval);

let id;

function startBtnClick() {
  id = setInterval(() => {
    const random = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[random];
  }, 1000);
  btnStart.disabled = true;
}

function stopBtnClick() {
  btnStart.disabled = false;
  clearInterval(id);
}
