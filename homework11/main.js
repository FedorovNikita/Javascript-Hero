// ------------------ Массивы. Задачи ------------------ 
// 1. Решить задание с 11й задачи лекции "Массивы" с использованием filter() вместо цикла
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

    return products.filter((element) => {
      if (element.price >= startPrice && element.price <= finishPrice) {
        return element;
      }
    });
}

console.log(filterCollection(products, 25, 100)); */

// 2.  На основе массива [1, 2, 3, 5, 8, 9, 10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности

/* let newArr = [1, 2, 3, 5, 8, 9, 10].map((element) => {
  return {
    digit: element,
    odd: (element % 2 !== 0 ? true : false)
  }
});

console.log(newArr); */

// 3. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false

/* let result = [12, 4, 50, 1, 0, 18, 40].some((element) => {
  if (element === 0) {
    return false;
  }
});

console.log(result) */

/* let result = [12, 4, 50, 1, 0, 18, 40].every((element) => element > 0 );

console.log(result) */

// 4. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

/* let result = ['yes', 'hello', 'no', 'easycode', 'what'].some((element) => element.length > 3 );

console.log(result); */

// 5. Дан массив объектов, где каждый объект содержит информацию о букве и месте её расположения в строке {буква: "a", позиция_в_предложении: 1}. Напишите функцию, которая из элементов массива соберет и вернет строку, основываясь на index каждой буквы.

/* let listLetters = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];

function lettersTransformToString(listLetters) {
  listLetters.sort((prev, next) => prev.index - next.index)

  return listLetters.reduce((str, letters) => str += letters.char, '')
}

console.log(lettersTransformToString(listLetters)); */

// Promise: tasks
// 1. Создать функцию, которая возвращает промис. Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен

/* function promiseCreator(tm, answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(answer);
    }, tm);
  })
}

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log) */

// 2. Используя fetch метод, создать get запрос к адресу https://jsonplaceholder.typicode.com/posts
// Отобразить в списке ul полученные поля из response. Показывать только id и title поля

/* let postsList = document.querySelector('.posts__list');

let promise = function() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    })
      .then((res) => resolve(res.json()))
      .catch(err => reject(err))
  })
};

promise()
  .then(data => {
    data.forEach(element => {
      let li = document.createElement('li');
      let i = document.createElement('i');
      let span = document.createElement('span');
      i.textContent = element.id + ' ';
      span.textContent = element.title;
      li.appendChild(i);
      li.appendChild(span);
      postsList.appendChild(li)
    });
  }) */
  

// 3. Выполнить два запроса: - https://jsonplaceholder.typicode.com/posts  - https://jsonplaceholder.typicode.com/users. Вывести в консоль информацию о количестве постов и юзеров. Запросы должны выполняться одновременно, информацию выводить только после того, как будут обработаны оба запроса. 

let getPosts = function() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    })
      .then((res) => resolve(res.json()))
      .catch(err => reject(err))
  })
};

let getUsers = function() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
      .then((res) => resolve(res.json()))
      .catch(err => reject(err))
  })
};

// getPosts().then(data => console.log(data));

Promise.all([
  getPosts()
    .then(data => data)
    .then(data => {
      let countPosts = 'Количество постов = ' + data.length;
      return countPosts;
    }),
  getUsers()
    .then(data => data)
    .then(data => {
      let countUsers = 'Количество пользователей = ' + data.length;
      return countUsers;
    })
])
  .then(data => console.log(data));


