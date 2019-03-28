//---------------------------ЗАДАЧА 1-----------------------------------
// Найти параграф и получить его текстовое содержимое (только текст)
/* let p = document.querySelector('p');
console.log(p.textContent); */

//---------------------------ЗАДАЧА 2-----------------------------------
// Создать функцию,  которая принимает в качетсве аргумента узел DOM
// и возвращает информацию (в виде объекта) о типе узла, об имени узла
// и о количестве дочерних узлов (если детей нет - 0)
let ulList = document.querySelector('ul a');

function infoNode(nod) {
    let obj = {};
    if (nod.nodeType == 1) {
        obj.typeNode = 'element node';
    } else if (nod.nodeType == 3) {
        obj.typeNode = 'text node';
    } else if (nod.nodeType == 8) {
        obj.typeNode = 'comment node';
    }
    obj.nameNode = nod.tagName.toLowerCase();
    obj.childrenNode = nod.children.length;

    return obj;
}
//console.log(infoNode(ulList));
//---------------------------ЗАДАЧА 3-----------------------------------
// Получить массив, который состоит из текстового содержимого ссылок
// внутри списка: getTextFromUl(ul) --> ['link1', 'link2']
let getUl = document.querySelector('ul');
let getArr = [];
function getTextFromUl() {
    let a = getUl.children;
    for (let i = 0; i < a.length; i++) {
        if(a[i].firstElementChild.tagName.toLowerCase() == "a") {
            getArr.push(a[i].firstElementChild.textContent);
        }
    }

    return getArr;
}
//console.log(getTextFromUl(getUl));

//---------------------------ЗАДАЧА 4-----------------------------------
// В параграфе заменить все дочерние текстовые узлы на "-twxt-"
// (вложенные теги должны остаться).
// let p = document.querySelector('p');
// for (let i = 0; i < p.childNodes.length; i++) {
//     if (p.childNodes[i].nodeType == 3) {
//         p.childNodes[i].data = "-twxt-";
//     }
// }

//---------------------------ЗАДАЧА 5----------------------------------
// Найти в коде список ul и добавить класс "list"
let listUl = document.querySelector('ul');
listUl.classList.add('list');

//---------------------------ЗАДАЧА 6----------------------------------
// Найти в коде ссылку, находящуюся после списка ul, и добавить id='link'
//listUl.nextElementSibling.nextElementSibling.id = 'link';

let lastLink = document.getElementsByTagName('a');
lastLink[lastLink.length - 1].id = 'link';

//---------------------------ЗАДАЧА 7----------------------------------
// Найти li через один (начиная с самого первого) установить класс "item"

let allLi = document.getElementsByTagName('li');

for (let i = 0; i < allLi.length; i++) {
    if (i % 2 == 0) {
        allLi[i].classList.add('item');
    }
}

//---------------------------ЗАДАЧА 8----------------------------------
// на все ссылки в примере установить класс "custom-link"
let allA = document.getElementsByTagName('a');

for (let i = 0; i < allA.length; i++) {
    allA[i].classList.add('custom-link');
}

//---------------------------ЗАДАЧА 9----------------------------------
// Не используя innerHTML, добавить в список несколько li с классом
// "new-item" и текстом "item" + номер li

for (let i = 0; i < 2; i++) {
    let ul = document.getElementsByTagName('ul');
    let newLi = document.createElement('li');
    newLi.textContent = 'item' + (ul[0].children.length + 1); 
    newLi.className = 'new-item';

    ul[0].insertAdjacentElement('beforeend', newLi);
}

//---------------------------ЗАДАЧА 10----------------------------------
// Создать четыре элемента strong и добавить их в конец ссылок, которые
// находятся внутри списка ul (в каждую ссылку один - strong)

for (let i = 0; i < allLi.length; i++){
    let strong = document.createElement('strong');
    if (allLi[i].firstElementChild && allLi[i].firstElementChild.tagName.toLowerCase() == 'a') {
        allLi[i].firstElementChild.insertAdjacentElement('beforeend', strong);
    }
}
    
//---------------------------ЗАДАЧА 11----------------------------------
// В начало документа (в начало body) добавить img с атрибутами src 
// и alt(текст придмайте сами). В scr добавьте реальный url к картинке
let img = document.createElement('img');
img.setAttribute('src', 'https://wallpapers-fenix.eu/lar/141215/155618955.jpg');
img.setAttribute('alt', 'city')
document.body.insertAdjacentElement('afterbegin', img)

//---------------------------ЗАДАЧА 12---------------------------------
// Найти на странице элемент mark, добавить в конец содержимого текст
// "green" и на элемент установить класс green

let mark = document.querySelector('mark');
let tx = 'green';
mark.insertAdjacentHTML('beforeend', ' green');
mark.classList.add('green');

//---------------------------ЗАДАЧА 13---------------------------------
// Вывести li в обратном порядке
let arrLi = [];
let ul = document.getElementsByTagName('ul');
for (let i = 0; i < allLi.length; i++) {
    arrLi.push(allLi[i]);
}
document.querySelector('ul').innerText = '';

let i = arrLi.length;
while(i--){
    ul[0].insertAdjacentElement('beforeend', arrLi[i]);
}



