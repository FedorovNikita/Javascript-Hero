// ========================= Присваивание. Задачи =========================
// 1. Записать в коротком виде:
//    - a = a + 10, b = b * 18, c = c - 10

// let a = 1;
// let b = 1;
// let c = 1;
// a += 10;
// b *= 18;
// c -= 10

// console.log(a, b, c)

//    - x = a + x, y = y * z, i = i * 5 * y

// let a = 3;
// let x = 3;
// let y = 3;
// let z = 3;
// let i = 3;
// x += a;
// y *= z;
// i *= y * 5

// console.log(x, y, i)

// 2. Как возвести переменную в квадрат? Использовать короткую запись
// let x = 12;
// x *= x;

// console.log(x);

//==================== Условные операторы. Задачи =========================
// Если переменная равна "hidden", присвоить ей значение "visible", иначе - "hidden".

/* let x = 'hidden';

if (x == 'hidden') {
    x = 'visible';
} else {
    x = 'hidden';
}

console.log(x); */

// Записать то же самое условие тернарным оператором
/* let x = 'hidden';
x = x == 'hidden' ? 'visible' : 'hidden';

console.log(x); */

// Используя if, записать условие
// 1. если переменная равна нулю, присвоить ей 1
// 2. если меньше нуля - строку "less then zero"
// 3. если больше нуля - используя оператор "присвоение", переменную умножить на 10 (использовать короткую запись)

/* let x = -1;

if (x == 0) {
    x = 1;
} else if (x < 0) {
    x = 'less then zero';
} else {
    x *= 10;
}
console.log(x); */

// Решить эту же задачу тернарным оператором
/* let x = 1;

x = x == 0 ? x = 1 : 
    x < 0 ? x = 'less then zero' : 
    x *= 10;

console.log(x); */

// ================== Конструкция switch... case. Задача ===================
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
// let a = 'inline';

// if (a == 'block') {
//     console.log('block');
// } else if (a == 'none') {
//     console.log('none');
// } else if (a == 'inline') {
//     console.log('inline');
// } else {
//     console.log('other');
// }

/* let a = 'inline';

switch(a){
    case 'block': console.log('block');
    break;
    case 'none': console.log('none');
    break;
    case 'inline': console.log('inline');
    break;
    default: console.log('other');
} */

// =================== Преобразование типов. Задачи ==================
// Чему равно а, почему?
// let a = 0 || 'string'; // string
// let a = 1 && 'string'; // string
// let a = null || 25; // 25
// let a = null && 25; // null
// let a = null || 0 || 25; // 25
// let a = null && 0 && 25; // null

// let a = 12 + 14 + '12'; // '2612'
// let a = 3 + 2 - '1'; // 4
// let a = '3' + 2 - 1; // 31
// let a = true + 2; // 3
// let a = +'10' + 1; // 11
// let a = undefined + 2; // NaN
// let a = null + 5; // 5
// let a = true + undefined; // NaN

// console.log(a);


// ============================= Задачи на циклы ==========================
// 1. Дана строка "I am in the easycode". Сделать первые пуквы каждого слова в верхнем регистре. Использовать for или while
/* let str = "I am in the easycode",
    newStr = "",
    b;

for (var i = 0; i < str.length; i++) {
	if (str[i] == " ") {
		newStr += str[i];
		b = 0;
	} else if (b == 0) {
		newStr += str[i].toUpperCase();
		b = 1;
	} else {
		newStr += str[i];	
	}
} */

/* let str = "I am in the easycode";
let newStr = '';

for (let i = 0; i < str.length; i++) {
    if (str[i - 1] == ' ') {
        newStr += str[i].toUpperCase();
    } else {
        newStr += str[i];
    }
} */

/* let str = "I am in the easycode";
let newStr = '';
let i = 0;
while (i < str.length) {
    if (str[i - 1] == ' ') {
        newStr += str[i].toUpperCase();
        
    } else {
        newStr += str[i];
    }
    i++;
} */

// console.log(newStr);


// 2. Дана строка "tseb eht ma i". Используя циклы,  сделать строку-перевершыш (то есть последняя буква становится первой, предпоследняя - второй и т.д.)
/* let str = "tseb eht ma i";
let strNew = '';

// for (let i = str.length - 1; i >= 0; i--) {
//     strNew += str[i];
// }

let i = str.length;
while (i--) {
    strNew += str[i];
}

console.log(strNew); */

// 3. Факториал числа - произведение всех натуральных числе от 1 до n включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. С помощью циплов вычислить факториал числа 10

/* let fc = 10;
let res = 1;

// for (let i = fc; i > 0; i--) {
//     res *= i;
// }

// for (; fc > 0; fc--) {
//     res *= fc;
// }

// let i = fc;
// while (i) {
//     res *= i;
//     i--;
// }

while (fc) {
    res *= fc;
    fc--;
}

console.log(res); */

// 4. Используя циклы, создать строку "Считаем до 10и: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
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

// 5. На основе строки "JavaScript is a pretty good language" сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены

/* let str = "JavaScript is a pretty good language";
let newStr = '';
let a = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == ' '){
        a = 0;
    } else if(a == 0){
        newStr += str[i].toUpperCase();
        a = 1;
    } else {
        newStr += str[i];
    } 
}
console.log(newStr); */

/* let str = "JavaScript is a pretty good language";
let newStr = '';
for (let i = 0; i < str.length; i++) {
	if (str[i] == ' ') {
        newStr += str[++i].toUpperCase(); 
	} else {
		newStr += str[i];
	}
}
console.log(newStr); */

/* let str = "JavaScript is a pretty good language";
let newStr = '';

for (let i = 0; i < str.length; i++) {
    if (!newStr) {
        newStr += str[i].toUpperCase();
    } else if (str[i - 1] === ' ') {
        newStr += str[i].toUpperCase();
    } else if (str[i] !== ' ') {
        newStr += str[i];
    }
}

console.log(newStr); */

/* let str = "JavaScript is a pretty good language";
let newStr = '';
let i = 0;
let lengthStr = str.length; 
while(i < lengthStr) {
    if (!newStr) {
        newStr += str[i].toUpperCase();
    } else if (str[i - 1] === ' ') {
        newStr += str[i].toUpperCase();
    } else if (str[i] !== ' ') {
        newStr += str[i];
    }
    i++;
}

console.log(newStr) */

// 6. Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 1){
//         console.log(i);
//     }
// }





