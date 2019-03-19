//---------------------------ЗАДАЧА 1---------------------------------------
// Создать функцию, которая принимает массив, а возвращает новый массив с 
// дублированными жлементами входного массива
function doubleArray(arr) {
    let a = arr.length;

    for (let i = 0; i < a; i++) {
        arr.push(arr[i]);
    }

    return arr;
}
//console.log(doubleArray([1, 2, 3]));

//---------------------------ЗАДАЧА 2-----------------------------------------
// Получить последний элемент массива. Использовать функцию
function lastElemArr(arr) {

    return arr[arr.length-1];
}

//console.log(lastElemArr([1, 2, 3, 'sdfdf']))

//---------------------------ЗАДАЧА 3-----------------------------------------
// Создавать фкнцию, которая принимает число N и возвращает массив, заполненный
// числа от 1 до N
function getArray(arr) {
    let arrRes = [];

    for (let i = 1; i <= arr; i++) {
        arrRes.push(i);
    }

    return arrRes;
}

//console.log(getArray(10));

//---------------------------ЗАДАЧА 4-----------------------------------------
// Создавать функцию, которая принимает произвольное число массивов и удаляет
// из каждого массива первый элемент, а возвращает массив из оставшихся значений
function changeCollection(...arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].shift();
    }

    return arr;
}

//console.log(changeCollection([1, 2, 3], ['one', 'two', 'three']));

//---------------------------ЗАДАЧА 5-----------------------------------------
// Дана произвольная строка "bcdaeflmjgkhi" - упорядочить буквы по алфавиту и
// и вернуть строку с буквами в обратном порядке

function strSortReverse (str) {
    return str.split('').sort().reverse().join('');   
}

//console.log(strSortReverse('bcdaeflmjgkhi'));

//---------------------------ЗАДАЧА 6-----------------------------------------
// Отсортировать массив [2, 4, 7, 1, -2, 10, -9] в обратном порядке
function numbersSortReverse (arr) {
    return arr.sort((next, prev) => next - prev).reverse();
}
//console.log(numbersSortReverse([2, 4, 7, 1, -2, 10, -9]));

//---------------------------ЗАДАЧА 7-----------------------------------------
// Написать функцию, которая принимает три аргумента: произвольный массив и
// два числа, первое из которых означает начальный номер элемента в массива,
// второе - конечный номер. Функция должна вернуть новый массив, состоящий из
// элементов первой коллекции соглано аргументам (с - по)
function getNewArray(arr, a, b) { 
    return arr.slice(a, b+1);    
}

//console.log(getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4));

//---------------------------ЗАДАЧА 8-----------------------------------------
// Удвоить все элементы массива, не используя циклы

function doubleArr(arr) {
    return arr.concat(arr);
}

//console.log(doubleArr(['one', 2, 'three', 4, 34, 'Nik']));

//---------------------------ЗАДАЧА 9-----------------------------------------
// Удалить определенные элементы в массиве
function delElemArr(arr, a, b) {
    arr.splice(a, b);

    return arr;
}
//console.log(delElemArr([1, 2, 3, 4, 5], 3, 4));

//---------------------------ЗАДАЧА 10-----------------------------------------
// Заменить в массиве элементы на что-то новое
// arr - массив
// a - стартовое значение в splice
// b - сколько элементов удалить
// elemArr - массив элементов, который добавляем
function replaceElemsArr(arr, a, b, ...elemArr) {
    let repl = '';
    for (let i = 0; i < elemArr.length; i++) { 
        if (i == elemArr.length - 1) {
            repl += elemArr[i];
        } else {
            repl += elemArr[i] + ',';
        }
    }
    let res = repl.split(',');

   
    for (let i = 0; i < res.length; i++) {
        if (i == 0){
            arr.splice(a++, b, res[i]);
        } else {
            arr.splice(a++, 0, res[i]);
        }
        
    }
    
    return arr;
}

//console.log(replaceElemsArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3, 6, 'four', 'five', 'six', 'seven', 'eight'));


//---------------------------ЗАДАЧА 11-----------------------------------------
// Вставить в произвольный массив после определенного элемента любое значение
// arr - массив
// a - стартовое значение в splice
// elemArr - массив элементов, который добавляем
function insertElemsArr (arr, a, ...elemArr) {
    let repl = '';
    for (let i = 0; i < elemArr.length; i++) { 
        if (i == elemArr.length - 1) {
            repl += elemArr[i];
        } else {
            repl += elemArr[i] + ',';
        }
    }

    let res = repl.split(','); 

    for (let i = 0; i < res.length; i++) {
        arr.splice(a++, 0, res[i]);
    }

    return arr;
}

//console.log(insertElemsArr(['i', 'am', 'an', 'array'], 3, 'awesome', 'pampam'));

//---------------------------ЗАДАЧА 12-----------------------------------------
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
// (размер массива определяется его длиной):
/* let sortArr = [[14, 15], [1], ['a', 'c', 'd']].sort();

console.log(sortArr); */
//every([arr[i]], el => typeof el !== 'number')

function sortArr (arr) {
    
    /* function every(arr, handler) {
        for (let i = 0; i < arr.length; i++){
            if (handler(arr[i])) return false;
        }
        
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (every(arr[i], el => typeof el !== 'number')){
            arr[i].sort((prev, next) => prev - next);
        } else {
            arr[i].sort();
        }  
    } */

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].every(el => typeof el === 'number')){
            arr[i].sort((prev, next) => prev - next);
        } else {
            arr[i].sort();
        }  
    }

    arr.sort((prev, next) => prev.length - next.length);

    return arr;
}

//console.log(sortArr([[14, 15, 3, 3], [2, 1], ['a', 'e', 'd', 'b', 'c'], [2], ['g', 'd', 'f']]))

//---------------------------ЗАДАЧА 13-----------------------------------------
// создать копию произвольного массива (slice, concat)
function concatArr (arr, a, b) {
    let partArr = arr.slice(a, b);
    return [].concat(partArr, partArr);
}

//console.log(concatArr([1, 2, 3, 4, 5], 1, 3));

//---------------------------ЗАДАЧА 14-----------------------------------------
// Есть массив объектов. Отсортировать их по возрастающему количеству ядер
let comp = [
    {
        cpu: 'intel',
        info: {
            cores: 2,
            cache: 3
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            cache: 4
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 1,
            cache: 1
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 3,
            cache: 2
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 4,
            cache: 2
        }
    }
] 

/* comp.sort((prev, next) => {
    if (prev.info.cores < next.info.cores) return - 1;
    if (prev.info.cores > next.info.cores) return 1;
}); */
comp.sort((prev, next) => prev.info.cores - next.info.cores);

//console.log(comp);

//---------------------------ЗАДАЧА 15-----------------------------------------

const products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
]

function filterCollection (prod, a, b) {
    prod.sort((prev, next) => prev.price - next.price);
    let prodNew = [];
    for (let i = 0; i < prod.length; i++) {
        if (prod[i].price >= a && prod[i].price <= b){
            prodNew.push(prod[i]);
        }
        
    }
    return prodNew;
}

//console.log(filterCollection(products, 15, 30));

//----------------------------DOM---------------------------------------------
//---------------------------ЗАДАЧА 1-----------------------------------------
/* // Зная структура html, с помощью изученных методов получить(в консоль):
// head
let hd = document.head;
// body
let bd = document.body;
// все дочерние элементы body и вывести их в консоль
let childBody = document.body.children;
// первый div и все его дочерние узлы 
// а) вывести все дочерние узлы в консоль
//let firstDiv = document.querySelector('div').children;
let firstDiv = document.body.firstElementChild.children;
// б) вывести в консоль все дочерние узлы, кроме первого и последнего
let withoutFirstLast = document.body.children;

for (let i = 0; i < withoutFirstLast.length; i++) {
    if (i !== 0 && i !== withoutFirstLast.length - 1 ) {
        console.log(withoutFirstLast[i]);
    } 
} */


//---------------------------ЗАДАЧА 2-----------------------------------------
// Создать функцию, которая принимает два элемента. Функция проверяет, является ли
// первый элемент родителем второго

function isParent (parent, child) {
    let a = parent.tagName;
    if (child.closest(a) == null) {
        return false;
    } else {
        return true
    }
    
}

//console.log(isParent(document.body.children[0], document.querySelector('mark')));
//console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

//---------------------------ЗАДАЧА 3-----------------------------------------
// Получить список всех ссылок, который не находятся внутри списка ul
let link =  document.querySelectorAll('a');
for (let i = 0; i < link.length; i++) {
    if (!(link[i].parentNode.parentNode.tagName == 'UL')) {
        console.log(link[i])
    }
} 

//---------------------------ЗАДАЧА 4-----------------------------------------
// Найти элемент, который находится перед и после списка ul
let prevUl = document.querySelector('ul').previousElementSibling;
let nextUl = document.querySelector('ul').nextElementSibling;

//console.log(prevUl, nextUl);

//---------------------------ЗАДАЧА 5-----------------------------------------
// Посчитать количество элемент li в списке

let li = document.querySelectorAll('ul li');
//console.log(li.length);









