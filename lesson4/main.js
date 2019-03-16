// Методы массивов
let colors = ['yellow', 'blue', 'white'];

// добавляет в конец массива
colors.push('red');
// удаляет элемент с конца массива
colors.pop();// возвразает то что удаляет

//добавляет в начало
colors.unshift('grey');
// удаляет элемнт с начала
colors.shift();// возвразает то что удаляет

// console.log(colors);

//из массива делает строку
let res = colors.join(); // "yellow,blue,white"
res = colors.join('-'); // "yellow-blue-white"
res = colors.join(''); // "yellowbluewhite"

// из строки делает массив
let str = 'Hello world';
res = str.split();//["Hello world"]
res = str.split(' ');// ["Hello", "world"]

// concat - склеиваем два массива
let numbers = [10, 4, 5];
res = numbers.concat(colors); // [10, 4, 5, "yellow", "blue", "white"]
res = numbers.concat(14, 34, 45); // [10, 4, 5, 14, 34, 45]

//console.log(res);

// копия массива
let copied = [].concat(colors);

//console.log(copied); // ["yellow", "blue", "white"]

// splice -  изменяет исходный массив и возвращает то, что он удалил
//colors.splice(1, 0, 11, 22, 33); // ["yellow", 1, 2, 3, "blue", "white"]
/* colors.splice(1, 1, 11, 22, 33); // ["yellow", 11, 22, 33, "white"]
console.log(colors); */

// reverse - переворачивает исходный массив
/* colors.reverse(); ["white", 33, 22, 11, "yellow"]
console.log(colors); */

//console.log(str.split('')); // ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"] 
//console.log(str.split('').reverse().join('')); // dlrow olleH


// sort - сортировка
/* console.log(['d', 'f', 'a', 'b'].sort());// ["a", "b", "d", "f"]
console.log([10, 34, 15, 2].sort()); // [10, 15, 2, 34] */


let num = [10, 2, 15, 7, 1, 3, 28];

/* num.sort(function (prev, next) {
    return prev - next;
}); */
num.sort((prev, next) => prev - next);
//console.log(num)

let users = [
    {
        id: 1,
        name: 'Nikita',
        age: 22
    },
    {
        id: 2,
        name: 'Olga',
        age: 25
    },
    {
        id: 3,
        name: 'Ivan',
        age: 30
    }
]
users.sort((prev, next) => prev.age - next.age);

users.sort((prev, next) => {
    if (prev.name < next.name) return - 1;
    if (prev.name > next.name) return 1;
});
console.log(users);
















