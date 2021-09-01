// Реализовать таймер, сколько времени прошло с дня рождения юзера
// `${days} days / ${hours} hours / ${mins} minutes / ${secs} seconds`
// 10562 days / 05 hours / 30 minutes / 10 seconds
// Часы, минуты и секунды должны быть с нулями
// Разделить логику на вычесление разницы, на получение единиц времени и на рендеринг.

const timerRef = document.querySelector('.timer');

const selector = '#timer-2';
const userBirthDate = '1999-02-31';
const birthDate = new Date(userBirthDate).getTime();

const refs = getRefs(selector); // this.refs = this.getRefs()

function getRefs(selector) {
  const daysSpan = document.querySelector(`${selector} [data-days]`);
  const minsSpan = document.querySelector(`${selector} [data-minutes]`);
  return { daysSpan, minsSpan };
}

const padStrStart = num => String(num).padStart(2, 0);

const getUnits = ms => {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const renderTime = time => {
  let { days, hours, minutes, seconds } = time;

  hours = padStrStart(hours);
  minutes = padStrStart(minutes);
  seconds = padStrStart(seconds);

  timerRef.textContent = `${days} days / ${hours} hours / ${minutes} minutes / ${seconds} seconds`;
};

const getTime = () => {
  const now = Date.now();
  const diff = now - birthDate;
  const timeObj = getUnits(diff);
  renderTime(timeObj);
};

const startTimer = () => {
  getTime();
  setInterval(() => {
    getTime();
  }, 1000);
};

startTimer();

// const timer = new Timer({
//   selector: '#timer-1',
//   data: new Date(userBirthDate),
// });

// timer.startTimer();
