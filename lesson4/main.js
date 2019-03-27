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
//console.log(users);

 

//---------------------------DOM-----------------------------------------
//живая коллекция HTMLCollection
let divs = document.getElementsByTagName('div');//HTMLCollection(3) [div, div.box, div#element, element: div#element]
let divsByClass = document.getElementsByClassName('box');// HTMLCollection [div.box]
let divById = document.getElementById('element');// <div id="element">div box</div>

// не живая коллекция NodeList
let divsQuery = document.querySelectorAll('body div');//NodeList(3) [div, div.box, div#element]
let divQuery = document.querySelector('div');// <div>Empty div</div> - первый попавшийся

//nextElementSibling и previousElementsSibling - это для элементов
//nextSibling и previousSibling - это для узлов

//все дочерние элементы, выдаст коллекцию 
console.log(divById.children);//HTMLCollection(2) [h1, ul]
//родительский элемент
console.log(divById.parentElement);//<body>...</body>
//последний элемент
console.log(divById.lastElementChild);// <ul>...</ul>
//первый элемент
console.log(divById.firstElementChild);//<h1>Hello</h1>
//ввыдаст все текстовое содержимое элемента 
console.log(divById.innerText);// Hello link link link
//все HTML содержимое элемента
console.log(divById.innerHTML);// <h1>Hello</h1>
                                // <ul>
                                //     <li><a href="#">link</a></li>
                                //     <li><a href="#">link</a></li>
                                //     <li><a href="#">link</a></li>
                                // </ul>
//перезависали все содержимое div, теперь там пусто
//console.log(divById.innerHTML = '');

// ближайший предок, который находится выше по уровню ВЛОЖЕННОСТИ - closest
let link = document.querySelector('ul a');
let parent = link.closest('li');
console.log(parent);// <li><a href="#">link</a></li>















