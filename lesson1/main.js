let str = 'Hello world';
let value;
let userName = 'nikita';

//string
value = str.length; // 11
value = str[1]; // e
value = str[str.length - 1]; //d
value = str.toUpperCase();// HELLO WORLD
value = str.indexOf('world');//6 - это индекс первого вхождения
value = str.indexOf('world', 4);// 6 - но ищет уже с 4 индекса
value = str.slice(1); //ello world 
value = str.slice(4, 7);// o w - 1 параметр с какого индекса, а 2 конечный индекс, не включая его
value = str.slice(-1); // d - последний элемент строки
value = str.slice(1, -2); // ello wor
value = str.substring(4, 7);// o w - тоже самое что и slice
value = str.substr(1, 2); // el - 1 параметр с какого индекса, а 2 сколько индексов
value = 'Hello ' + userName; 
//в ES6 появились шаблонные строки
value = `Hello, my name is ${userName}`;
value = userName[0].toUpperCase() + userName.slice(1); // сделали имя с большой буквы
// для превращения в строку чисел у нас есть
// String, toString, + ''

//console.log(value);

//Number
let number = 20;
let num;

num = 1 - 'sdf';// NaN
num = parseFloat('20px');// отбросятся строки и вернется 20
num = parseFloat('sdf20px');//NaN
num = Math.round(5.6);//6 
num = Math.ceil(Math.random() * 20); // рандомные числа до 20
// ceil будет ВСЕГДА округлять в большую сторону
// floor будет ВСЕГДА округлять в меньшую сторону
num = 12.34234.toFixed(2);// количество символов после запятой

//console.log(num);

//Boolean

let bool = true;
bool = !true; //false
bool = !'sdf'; //false
bool = Boolean(undefined); // false
bool = Boolean('fg');// true
bool = Boolean('');// false
bool = Boolean(' ');// true

//console.log(bool);

//Object
let user = {
    name: 'Nikita',
    age: '22',
    work: 'student',
    more: {
        value: 100,
        city: 'Moscow'
    }
};

let prop = 'work';
let odj;

obj = user.name;// Nikita
obj = user['age'];//22
obj = user[prop];// student - можно подставлять переменные

// переопределение данные в объекте
user.name = 'Nik';
user.info = 'developer'; // создали новое поле, если его нет
obj = user.more.value;// 100
obj = user['more']['value'];// 100
obj = user['more'].value;// 100

user.wallet = {};
user.wallet.balance = 20;// сразу не получится присвоисть, поэтому строка выше нужна

//console.log(obj);

//Array

let arr = [1, 2, 3];
let el;

el = arr[0];// 1
arr[1] = 'two';

console.log(el);