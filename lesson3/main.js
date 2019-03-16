// function declaration
//sum();

function sum() {
    let a = 2;
    let b = 3;
    console.log(a + b);
} // при таком объевления функция всплывает вверх
// и мы можем ее вызвать до объявления

//sum();

// function expression
let num = function () {
    console.log('function expression');
}// функция не всплывает и мы не сможем ее вызвать до объявления

//num();

// Анонимная самовызывающаяся функция
/* (function () {
    console.log('Self invoked function');
})() */

// arrow function
let arrow = () => {
    console.log('Arrow function');
}

//arrow();

let sumArrow = (x, y) => x + y;
//console.log(sumArrow(1, 4));

let sumArrow2 = x => x + 2;
//console.log(sumArrow2(6));
/* function sum(x = 0, y = 0) {
    //if (x === undefined) return new Error('не передан параметр X');
    //if (y === undefined) return new Error('не передан параметр Y');

    let a = x;
    let b = y;
    return a + b;
}

let res = sum();

console.log(res); */

// arguments - до ES6 часто использовался
/* function sum(x = 0, y = 0) {
    console.log(arguments);
    return x + y;
}

let res = sum(2, 5, 6, 3);

console.log(res); */

// вместо arguments "..."
/* function sum(x = 0, y = 0, ...easyArgs) {
    console.log(easyArgs);
    return x + y;
}

let res = sum(2, 5, 6, 3);// первые два элемента присвоятся в x и y, а остальные в esyArgs в виде массива

console.log(res); */

// деструктурирующее присваивание
let arr = ['first', 'second', 3, 5, 6, 3];

// обычный метод
//let one = arr[0];
//let two = arr[1];

// дестр. присваивание
/* let = [one, two, ...last] = arr;
console.log(one, two, last); */

// пропустить элемент массива
let [ one, two, ,...last] = arr;
//console.log(one, two, last);

// дустр. присваивание в obj
/* let user = {
    name: 'Nik',
    age: 22
} */

/* let name = user.name;
let age = user.age; */

//let { name, age } = user; // в фигурных скобказ должны быть имена как ключи в объекте
//console.log(name, age);

// мы передаем функции масив и хотим чтобы массив разбился на аргументы
function sum(x, y) {
    //console.log(x, y);
    return x + y;
}

let res = sum(...[2, 4]);
//console.log(res);

// Users
let users = [
    {
        id: 1,
        name: 'Nik',
        age: 22
    },
    {
        id: 2,
        name: 'Olga',
        age: 23
    },
    {
        id: 3,
        name: 'Ivan',
        age: 30
    }
]

//add user
function addUser(name, age) {
    if (!name) {
        return new Error('Не передано поле name');
    }
    if (!age) {
        return new Error('Не передано поле age');
    }
    // push - добавим в конец массива
    //users.push({name: name, age: age});
    // если ключ значения в объекте схож с переменной, которую хотим присвоить
    users.push({name, age, id: Math.round(Math.random() * 10)});

    return users
}


// delete user
function deleteUser(id) {
    if ( !users.length ) {
        return console.info('Пользователей больше нет');
    }
    for ( let i = 0; i < users.length; i ++) {
        if ( users[i].id === id ) {
            //splice - 1 параметр - это индекс элемента в массиве
            // 2 параметр - количество удаляемых элементов из массива включительно с которого начинает
            users.splice(i, 1);
            break;
        }
    }

    return users;
}

// глобальная переменная
/* let x = 'Global var';

function env() {
    let x = 'local var';
    console.log(x);
}
env(); */

// функции высшего порядка - эта та функция которая принимает функцию в качестве аргумента или возвращает в returne
/* function highFunction( func ) {
    console.log(func)
    func();
}
highFunction ( function(){
    console.log('I am a handler! Hello');
})
 */

function anotherHighFunc() {
    return function() {
        return "i am a func";
    }
}
//anotherHighFunc()()// "i am a func"
let funcRes = anotherHighFunc();
//console.log(funcRes());




// сделаем добавление символом после каждого символа в строке
/* let str = 'Hello';
let newStr = '';

for (let i = 0; i < str.length; i++) {
    newStr += str[i] + '$';
}
console.log(newStr); */

/* function rewreiteString(string, handler) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        newString += handler(string[i]);// передаем в handler каждый элемент строки и записываем результат его рабы в newString

    }
    console.log(newString);
    return newString
}
rewreiteString('EasyCode', function (symbol){
    
    return symbol + '$';
}) */


// some every
// some вернет булевое true или false в зависимости от того есть ли в массиве число
// вернет true, если хотя бы один элемент является числом, иначе false
// every - если каждый из элементов соответсвует тому что мы хотим

let someArr = [1, 2, 'some string'];

let methodRes = someArr.some(function (value) {// value - это один элемент массива
    return typeof value === 'string';
})

let everyRes = someArr.every(function (value) {// value - это один элемент массива
    return typeof value === 'string';
})

//console.log(methodRes, everyRes);

// реализация some
function some(arr, handler) {
    for (let i = 0; i < arr.length; i++){
        if (handler(arr[i])) return true;
    }
    
    return false;
}
let customSome = some([1, 2, 'df'], function(el){
    return typeof el === 'number';
})
console.log(customSome);


// реализация every
function every(arr, handler) {
    for (let i = 0; i < arr.length; i++){
        if (handler(arr[i])) return false;
    }
    
    return true;
}
/* let customEvery = every([1, 2, 'df'], function(el){
    return typeof el !== 'number';
}) */
// arrow
let customEvery = every([1, 2, 'df'], el => typeof el !== 'number');

console.log(customEvery);


