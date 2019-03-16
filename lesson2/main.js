// тернарный оператор
let userName = 'Nik';
userName = undefined;
/* userName ? console.log(`hello ${userName}`) : console.log('hello user'); */

let a = 6;

/* if (a >= 1 && a <=9) {
    console.log('a >= 1');
} else if (a > 10){
    console.log('a > 10');
} else { 
    console.log('a < 1');
} */
// можно это и тернарным оператором
/* a >= 1 && a <=9 ? console.log('a >= 1') : 
    a > 10 ? console.log('a > 10') : onsole.log('a < 1');
 */

// switch
/* let value = 1;
switch(value){
    case 1: console.log(1); break;
    case 10: console.log(10); break;
    case 3: console.log(3); break;
    default: console.log('default');
} */

// приведение к строке
let c = 20,
    b = 18;

let string = '' + c + b;
// все арифметические операции со строкой и числом, кроме сложения, будут NaN
// если не получается преобразовать строку в число
string = '2' - 1;// 1
string = '2sdf' - 1;// NaN
string = '12' > 2;// true - строка преобразовалась в число, а затем сравнилась
string = '12' > '2';// false
string = true + 1;// 2
string = false + 1// 1
string = undefined + 1;// NaN
string = null + 1;// 1, так как null - это у нас просто 0

// console.log(string);

// Циклы 
// while, do while, for, for in, for of
// итератор i
// условия i < 10
// i++

//while
let i = 0;
// while (i < 10){
//     console.log(i); // от 0 до 9
//     i++;
// }
/* while (i++ < 10){
    console.log(i); // от 1 до 10
} */
/* while (++i < 10){
    console.log(i); // от 1 до 9
} */
/* i = 10;
while (i--){
    console.log(i); // от 1 до 10
} */
/* let str = 'Hello';
i = str.length;
while (i--){
    console.log(str[i], i); // от 1 до 10
} */
/* let isFinish;
i = 10;
while (!isFinish){
    console.log(i);// от 10 до 0
    isFinish = !i--;
} */


//do while
/* let index;

do{
    console.log(index);
} while(index) */

//for (init; condition; i++){}
//break, cintinue

/* for (let i = 0; i < 10; i++){
    console.log(i);// 0-9
} */

let colors = ['black', 'white', 'yellow'];
/* for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
} */

/* for (let i = 0; i < colors.length; i++){
    if( colors[i] === 'white'){
        //continue;
        break;
    }
    console.log(colors[i]);
} */

// for in - нужен для объектов
let obj = {
    name: 'Nik',
    age: 22
}

/* for (let key in obj){
    console.log(key + ' = ' + obj[key]);
} */

// for of - для массива
colors = ['red', 'green', 'yellow'];
for (let value of colors){
    console.log(value);
}



















