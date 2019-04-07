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
/* function dayFromDate(dat) {
    let datArr = dat.split('.');
    let newYear = new Date(datArr[2], datArr[1], datArr[0]);
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

console.log(dayFromDate('08.04.2019'));
 */