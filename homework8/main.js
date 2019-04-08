//---------------------------ЗАДАЧА 1-------------------------------
// Написать функцию, которая принимает год, а возращает день 1го января этого года
function theFirstNumberYear(year) {
    let day = new Date(year, 0);
    let number = day.getDay();

    switch(number) {
        case 0: number = 'вск'; break;
        case 1: number = 'пн'; break;
        case 2: number = 'вт'; break;
        case 3: number = 'ср'; break;
        case 4: number = 'чт'; break;
        case 5: number = 'пт'; break;
        case 6: number = 'сб'; break;
    }

    return number;
}

//console.log(theFirstNumberYear(2019));

//---------------------------ЗАДАЧА 2-------------------------------
// Написать функцию, которая принимает дату в виде строки "29.03.1985", 
// а возвращает день в русском формате.
function dayFromDate(dat) {
    /* let datArr = dat.split('.');
    let newYear = new Date(datArr[2], datArr[1] - 1, datArr[0]); */

    let newYear = new Date(dat.split('.').reverse().join('.'));
    let number = newYear.getDay();

    switch(number) {
        case 0: number = 'вск'; break;
        case 1: number = 'пн'; break;
        case 2: number = 'вт'; break;
        case 3: number = 'ср'; break;
        case 4: number = 'чт'; break;
        case 5: number = 'пт'; break;
        case 6: number = 'сб'; break;
    }

    return number;
}

//console.log(dayFromDate('08.04.2019'));

//---------------------------ЗАДАЧА 3-------------------------------
// Узнать, сколько прошло полных недель с начала года до сегодняшней даты
let lastDate = Date.now() -  new Date('2019.01.01');
let weeks = parseInt(lastDate / 1000 / 60 / 60 / 24 / 7); 

//console.log(`С начала года прошло ${weeks} нед.`);

//---------------------------ЗАДАЧА 4-------------------------------
// Напишите код, который будет выводить в консоль строку, начиная с
// одной буквы и добавлять по одному символу каждые 200 мc
/* let text = 'Nikita';
let lengthText = text.length;
let count = 0;
let newText = '';

setTimeout(function tex() {
    if(lengthText--) {
        newText += text[count++];
        console.log(newText);
        setTimeout(tex, 200);
    } 
}, 100) */

//---------------------------ЗАДАЧА 5-------------------------------
// Создайте функцию, которая принимает строку и время в секундах.
// При вызове функции она должна показать переданный текст через заданное
// количество секунд
function getTextInTime(text, timer) {
    setTimeout(() => console.log(text), timer);
}

getTextInTime('test', 1000);








