//---------------------------ЗАДАЧА 1-----------------------------------------
/* let a = 'hidden';

if (a == 'hidden') {
    a = 'visible';
} else {
    a = 'hidden';
}

a == 'hidden' ? a = 'visible' : a = 'hidden';
console.log(a); */

//---------------------------ЗАДАЧА 2-----------------------------------------
/* let a = -2;

if (a == 0) {
    a = 1;
} else if (a < 0) {
    a = 'less then zero';
} else {
    a *= 10;
}

a == 0 ? a = 1 : a < 0 ? a = 'less then zero' : a *= 10;

console.log(a); */

//---------------------------ЗАДАЧА 3-----------------------------------------
/* let a = 'block';

switch(a){
    case 'block': console.log('block');
    break;
    case 'none': console.log('none');
    break;
    case 'inline': console.log('inline');
    break;
    default: console.log('other');
}
 */


//---------------------------ЗАДАЧА 4-----------------------------------------
// Дана строка "I am in the easycode". Сделать первые пуквы каждого слова в верхнем регистре. Использовать for или while
/*let str = "I am in the easycode",
	st = "",
	b;

for (var i = 0; i < str.length; i++) {
	if (str[i] == " ") {
		st += str[i];
		b = 0;
	} else if (b == 0) {
		st += str[i].toUpperCase();
		b = 1;
	} else {
		st += str[i];	
	}
}
console.log(st);*/
//---------------------------ЗАДАЧА 5 через FOR-----------------------------
// Дана строка "tseb eht ma i". Используя циклы, сделать строку-перевертыш
/* let string = "tseb eht ma i",
    i = string.length,
    str = "";
for (let i = string.length-1; i >= 0; i--) {
	str += string[i];
}
console.log(str); */

//---------------------------ЗАДАЧА 5 через WHILE-----------------------------
/* let string = "tseb eht ma i",
    i = string.length,
    str = "";
while (i--){
	str += string[i];
}
console.log(str); */
//---------------------------ЗАДАЧА 6 ---------------------------------------
// С помощью циклов вычислить факториал числа 10
/* let numb = 1;

for (let i = 10; i > 0; i--) {
	numb *= i;
}
console.log(numb); */


/* let x = 10;

for (let i = x - 1; i > 0; i--) {
    x *= i;  
}

console.log(x); */
//---------------------------ЗАДАЧА 6 через WHILE-----------------------------
/* let x = 10,
    fact = 1;
while(x) {
    fact *= x;
    x--;
}
console.log(fact); */

//---------------------------ЗАДАЧА 7 ---------------------------------------
// Используя циклы, создать строку "Считаем до 10и: 1,2,3,4,5,6,7,8,9,10"
/* let x = 10;
//let res = "Считаем до " + x + 'и' + ": ";
let res = `Считаем до ${x}и: `;

for (let i = 1; i <= x; i++) {
    if (i < x){
        res += i+', ';
    } else {
        res += i;
    }
}

console.log(res); */


//---------------------------ЗАДАЧА 8 ---------------------------------------
// На основе строки "JavaScript is a pretty good language" сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены
// let str = "JavaScript is a pretty good language",
// 	str2 = '',
// 	a = 0;
// /* for (let i = 0; i < str.length; i++) {
//     if (str[i] == ' '){
//         a = 0;
//     } else if(a == 0){
//         str2 += str[i].toUpperCase();
//         a = 1;
//     } else {
//         str2 += str[i];
//     } 
// }
// console.log(str2); */
// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == ' ') {
// 		str2 += str[++i].toUpperCase();
// 	} else {
// 		str2 += str[i];
// 	}
// }
// console.log(str2);


//---------------------------ЗАДАЧА 9 -----------------------------
// Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 1){
        console.log(i);
    }
}







