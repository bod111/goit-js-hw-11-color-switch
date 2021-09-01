// 1) стандартный код
// 2) с алертом в коде
// 3) с нулевой задержкой

// выполнится первым
// const start = Date.now();
// console.log('First');

// const logLater = () => {
//   // выполнится третьим, спустя 2 секунды
//   console.log('Second', Date.now() - start);
// };

// const logLater2 = () => {
//   // выполнится третьим, спустя 2 секунды
//   console.log('Second-2', Date.now() - start);
// };

// const timeoutId = setTimeout(logLater2, 5000);

// setTimeout(() => clearTimeout(timeoutId), 2000);

// // alert('Delay!');

// // выполнится вторым
// console.log('Third');

///////////////////////////////////////////////////////

// Есть бутсраповский тост.
// Нужно показать его (bsToast.show()) через 1 секунду после открытия странички и скрыть (bsToast.hide()) через 2 секунды после того, как он появился
// (привязка контекста при закрытии без анонимки)
// Это сообщение нужно показать юзеру только один раз.

// const toastRef = document.querySelector('.toast');
// const bsToast = new bootstrap.Toast(toastRef, { autohide: false });
// const MSG_KEY = 'wasMsgShown';

// const showMsg = () => {
//   setTimeout(() => {
//     bsToast.show();
//     sessionStorage.setItem(MSG_KEY, 'true');
//     setTimeout(bsToast.hide.bind(bsToast), 2000);
//   }, 1000);
// };

// const checkMsg = () => {
//   const wasMsgShown = sessionStorage.getItem(MSG_KEY);
//   if (!wasMsgShown) {
//     showMsg();
//   }
// };

// checkMsg();

///////////////////////////////////////////////////////////

// Сделать секундомер (stopwatch)
// По нажатию на кнопку "Start" запускать счетчик, который будет увеличиваться на 1 каждую секунду.
// Пока таймер запущен на кнопке должен быть текст "Pause", когда не запущен - "Start"
// По нажатию на кнопку "Pause" останавливать счетчик на текущем значении, по нажатию на кнопку "Start" запускать снова.

// const timerRef = document.querySelector('.timer');
// const btnRef = document.querySelector('[data-action="handle-timer"]');
// let count = 0;
// let intervalId = null;

// btnRef.addEventListener('click', e => {
//   e.target.textContent = intervalId ? 'Start' : 'Pause';

//   if (intervalId !== null) {
//     clearInterval(intervalId);
//     intervalId = null;
//     return;
//   }

//   intervalId = setInterval(() => {
//     count += 1;
//     timerRef.textContent = count;
//   }, 1000);
// });

// btnRef.onclick = e => {
//   e.target.textContent = 'Pause';
//   intervalId = setInterval(() => {
//     count += 1;
//     timerRef.textContent = count;
//   }, 1000);
// };
