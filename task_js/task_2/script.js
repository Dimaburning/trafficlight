const consoleLog=document.querySelector('#consoleLog');
consoleLog.addEventListener('click', (event) => {
    alert('Метод, предназначенный для печати в консоль браузера.');
    event.stopImmediatePropagation();
});


const Alert=document.querySelector('#alert');
Alert.addEventListener('click', (event) => {
    alert('Выводит в браузере небольшое окно с сообщением и кнопкой "ОК" и ждёт, когда пользователь нажмёт на кнопку.');
    event.stopImmediatePropagation();
});


const Prompt=document.querySelector('#prompt');
Prompt.addEventListener('click', (event) => {
    alert('предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена».');
    event.stopImmediatePropagation();
});




