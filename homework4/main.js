// ====================== Массивы. Задачи на методы ========================
// 1. Создать функцию, которая принимает массив, а возвращает новый массив с 
// дублированными элементами входного массива : doubleArray([1,2,3]) = [1,2,3,1,2,3]
// function doubleArray(arr) {
//     let a = arr.length;

//     for (let i = 0; i < a; i++) {
//         arr.push(arr[i]);
//     }

//     return arr;
// }

// function doubleArray(arr) {
//     return arr.concat(arr);
// }

// console.log(doubleArray([1, 2, 3]));

// 2. Получить последний элемент массива (массив не менять). Использовать функцию.
/* function lastElemArr(arr) {

    return arr[arr.length-1];
}

console.log(lastElemArr([1,2,3,4,5])); */

// 3. Создать функцию, которая принимает число N и возвращает массив заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

/* function getArray(arr) {
    let arrRes = [];

    for (let i = 1; i <= arr; i++) {
        arrRes.push(i);
    }

    return arrRes;
}

console.log(getArray(10)); */

// 4. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: changeCollection([1,2,3], ['a', 'b', 'c']) => [2,3], [b,c]

// function changeCollection(...arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].shift();
//     }

//     return arr;
// }

/* function changeCollection(...arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].splice(0,1);
    }
    return arr;
}


console.log(changeCollection([1, 2, 3], ['one', 'two', 'three'])); */

/* function changeCollection(...arr) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].slice(1));
    }
    
    return newArr;
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c'])); */

// ================ Массивы. Задачи ================
// 1. Дана произвольная строка "bcdaeflmjgkhi" - упорядочить буквы по алфавиту и вернуть строку с буквами в обратном порядке ("mlkjihgfedcba"). Оформить в виду функции

/* function strSortReverse (str) {
    return str.split('').sort().reverse().join('');   
}

console.log(strSortReverse('bcdaeflmjgkhi')); */

// 2. Отсортировать массив [2,4,7,1,-2,10,-9] в обратном порядке: [10,7,4,2,1,-2,-9]. Используйте функцию

/* function numbersSortReverse (arr) {
    return arr.sort((prev, next) => prev - next).reverse();
} */

/* function numbersSortReverse (arr) {
    return arr.sort((prev, next) => next - prev);
} */

/* function numbersSortReverse(arr) {
    arr.sort(function(prev, next) {
        return prev - next;
    }) 
    return arr.reverse();
} */

// function numbersSortReverse(arr) {
//     arr.sort(function(prev, next) {
//         return next - prev;
//     }) 
//     return arr;
// }

// console.log(numbersSortReverse([2, 4, 7, 1, -2, 10, -9]));

// 3. Написать функцию, которая принимает три аргумента: произвольный массив и два числа, первое из которых означает начальный номер элемента в массиве, второе - конечный номер. Функция должна вернуть новый массив, состоящий из элементов первой коллекции согласно аргументам (с - по): getNewArray(['a','b','c','d','e'], 2, 4) => ['c','d','e']

/* function getNewArray(arr, a, b) {
    return arr.slice(a, b + 1);
}

console.log(getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4)); */

// 4. Удвоить все элементы массива, не используя циклы ['one', 2, 'three', 4] => ['one', 2, 'three', 4, 'one', 2, 'three', 4]

/* function doubleArr(arr) {
    return arr.concat(arr);
}

console.log(doubleArr(['one', 2, 'three', 4, 34, 'Nik'])); */

// 5. Удалить из [1,2,3,4,5], второй и третий элементы (3,4)

/* function removeElemArr(arr, from, to) {
    arr.splice(from, to);
    return arr;
}

console.log(removeElemArr([1, 2, 3, 4, 5], 2, 2)); */

// 6. Удалить из [1,2,3,4,5], второй и третий элементы (3,4) и на их место вставить 'three', 'four'
/* function changeArr(arr, a, b, ...str) {
    arr.splice(a, b);
    for (let i = 0; i < str.length; i++) {
        arr.splice(a++, 0, str[i])
    }

    return arr;
}

let result = changeArr([1,2,3,4,5], 2,1, 'three', 'four', 'three', 'four',);
console.log(result); */



// 7. Вставить в произвольный массив после третьего элемента любое значение, например: ['i','am','an','array'] => ['i','am','an', 'awesome', 'array']
// arr - массив
// a - стартовое значение в splice
// elemArr - массив элементов, который добавляем
/* function insertElemsArr (arr, a, ...elemArr) {

    for (let i = 0; i < elemArr.length; i++) {
        arr.splice(a++, 0, elemArr[i]);
    }

    return arr;
}

console.log(insertElemsArr(['i', 'am', 'an', 'array'], 3, 'awesome', 'pampam')); */

// 8. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [[14, 15], [1], ['a','b','c']] => [[1], [14, 15], ['a','b','c']]

/* function sortArr (arr) {
    return arr.sort((prev, next) => prev.length - next.length);
}

console.log(sortArr([[14, 15, 3, 3], [2, 1], ['a', 'e', 'd', 'b', 'c'], [2], ['g', 'd', 'f']])) */

// function sortLengthArr(...arr) {
//     return arr.sort((prev, next) => prev.length - next.length);
// }

// console.log(sortLengthArr([14, 45], [1], ['a', 'c', 'd']))

// 9. Создать копию произвольного массива
/* function copyArr(arr, a, b) {
    let partArr = arr.slice(a, b);

    return [].concat(partArr, partArr);
} */

/* function copyArr(arr, a, b) {
    let res = arr.slice(a, b + 1);
    
    return [].concat(res);
}

console.log(copyArr([1, 2, 3, 4, 5], 1, 3)); */

// 10. Есть массив объектов
// Отспортировать их по возрастающему количеству ядер
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
// comp.sort((prev, next) => prev.info.cores - next.info.cores);

// console.log(comp);

function sortArr(obj) {
    // obj.sort(function(prev, next) {
    //     return prev.info.cores - next.info.cores;
    // })
    // return obj;
    return obj.sort((prev, next) => prev.info.cores - next.info.cores);
}

// let result = sortArr(comp);
// console.log(result);

//11. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и отсортировать от дешевых к дорогим

/* const products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];

function filterCollection(products, startPrice, finishPrice) {
    products.sort((prev, next) => prev.price - next.price);

    let newProducts = [];
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > startPrice && products[i].price < finishPrice) {
        newProducts.push(products[i]);
        }
    }
    
    return newProducts;
}

console.log(filterCollection(products, 15, 30)) */

// ================= Доступ к DOM. Задачи =================
// Зная структура html, с помощью изученных методов получить(в консоль):
// head
/* let result = document.head;

console.log(result) */
// body
/* let result = document.body;

console.log(result) */
// все дочерние элементы body и вывести их в консоль
/* let result = document.body.children;

console.log(result) */
// первый div и все его дочерние узлы 
// а) вывести все дочерние узлы в консоль
//let result = document.querySelector('div').children;
/* let result = document.body.firstElementChild.children;

console.log(result) */
// б) вывести в консоль все дочерние узлы, кроме первого и последнего
/* let withoutFirstLast = document.body.children;

// for (let i = 0; i < withoutFirstLast.length; i++) {
//     if (i !== 0 && i !== withoutFirstLast.length - 1 ) {
//         console.log(withoutFirstLast[i]);
//     } 
// }

for (let i = 1; i < withoutFirstLast.length - 1; i++) {
    console.log(withoutFirstLast[i]);
}; */

// =================== DOM. задачи ======================
// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

/* function isParent (parent, child) {
    let a = parent.tagName;
    if (child.closest(a) == null) {
        return false;
    }

    return true
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark'))); */

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
/* let link =  document.querySelectorAll('a');
for (let i = 0; i < link.length; i++) {
    if (!(link[i].parentNode.parentNode.tagName == 'UL')) {
        console.log(link[i])
    }
} */

/* let result = document.querySelectorAll('a');

for (let i = 0; i < result.length; i++) {
    if (result[i].closest('ul') == null) {
        console.log(result[i]);
    }
} */

// 3. Получить элемент, который находится перед и после списка ul
let prevUl = document.querySelector('ul').previousElementSibling;
let nextUl = document.querySelector('ul').nextElementSibling;

//console.log(prevUl, nextUl);

// 4. Посчитать количество элементов li в списке
let li = document.querySelectorAll('ul li');
//console.log(li.length);


//---------------------------ЗАДАЧА СО *-----------------------------------------
let message = document.getElementById('alert');

function textMessage(text) {
    setTimeout(function () {
        message.textContent = text;
        message.classList.remove('hidden');
        message.classList.add('show');
    }, 1000)
    setTimeout(function() {
        message.classList.remove('show');
        message.classList.add('hidden');
    }, 5000);

}
textMessage('Hello');











