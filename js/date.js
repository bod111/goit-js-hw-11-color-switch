// По нажатию на кнопку .js-time показывать, сколько секунд прошло после открытия странички (`You opened this page ${sec} seconds ago`);

// const btnRef = document.querySelector('.js-time');

// const start = new Date();

// btnRef.addEventListener('click', () => {
//   const now = new Date();
//   const sec = Math.round((now - start) / 1000);

//   alert(`You opened this page ${sec} seconds ago`);
// });

// console.log(past);

////////////////////////////////////////////

// Задача. Выведите в консоль текущие день, месяц и год в формате 'год-месяц-день'.

// const now = new Date();
// const unix = now.getTime();
// now.setDate(5);
// console.log(now);

// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const day = now.getDate();
// const weekDay = now.getDay();

// const unix = Date.now();
// console.log(unix);

// const date = new Date(unix);
// console.log(date);

////////////////////////////////////////////////////////////////////

// Есть инпут, в который пользователь вводит дату своего рождения в формате '1995-12-31' (с конкретным годом).
// По нажатию кнопки выведите под инпутом сколько дней осталось до его дня рождения.
// * Проверять формат - если неверный, то выводить сообщение 'Wrong format'.

// const refs = {
//   input: document.querySelector('.date'),
//   button: document.querySelector('[data-action="count-days"]'),
//   result: document.querySelector('.days-left'),
// };
