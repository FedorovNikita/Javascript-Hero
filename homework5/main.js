// ============ nodes: задачи ==============
// 1. Найти параграф и получить его текстовое сожержимое (только текст)

/* let paragraph = document.querySelector('p');
let textParagraph = paragraph.textContent;

console.log(textParagraph); */

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)

/* function getElement(elem) {
    obj = {
        typeElem: '',
        nameElem: elem.nodeName,
        childCount: elem.children.length
    }
    if (elem.nodeType == 1) {
        obj.typeElem = 'element node';
    } else if (elem.nodeType == 3) {
        obj.typeElem = 'text node';
    } else if (elem.nodeType == 8) {
        obj.typeElem = 'comment node';
    }

    return obj;
}

console.log(getElement(document.querySelector('ul'))); */

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) => ["link1", "link2", "link3"]

/* let getUl = document.querySelector('ul');
function getTextFromUl() {
    let getArr = [];
    let a = getUl.children;
    for (let i = 0; i < a.length; i++) {
        if(a[i].firstElementChild.tagName.toLowerCase() == "a") {
            getArr.push(a[i].firstElementChild.textContent);
        }
    }

    return getArr;
}
console.log(getTextFromUl(getUl)); */

/* let ul = document.querySelector('ul');
function getTextFromUl(ul) {
    str = [];
    for (let i = 0; i < ul.children.length; i++) {
        str.push(ul.children[i].textContent);
    }
    return str;
}

console.log(getTextFromUl(ul)); */

// 4. В параграфе заменить все дочерние текстовые узлы на "-text-" (вложенные теги должны остаться). Конечный результат: -text<a href="#">reprehendunt</a>-text<mark>nemore</mark>-text

/* let paragraph = document.querySelector('p');

for (let i = 0; i < paragraph.childNodes.length; i++) {
    if (paragraph.childNodes[i].nodeType == 3) {
        paragraph.childNodes[i].data = '-text';
    }
}

console.log(paragraph.innerHTML); */

// 5. Найти в коде список ul и добавить класс "list"
let listUl = document.querySelector('ul');
listUl.classList.add('list');

// 6. Найти в коде ссылку, находящуюся после списка ul, и добавить id="link"
//listUl.nextElementSibling.nextElementSibling.id = 'link';

let lastLink = document.getElementsByTagName('a');
// lastLink[lastLink.length - 1].id = 'link';
lastLink[lastLink.length - 1].setAttribute('id', 'link');

// 7. На li через один (начинай с самого первого) установить класс "item"
let allLi = document.getElementsByTagName('li');

for (let i = 0; i < allLi.length; i++) {
    if (i % 2 == 0) {
        allLi[i].classList.add('item');
    }
}

// 8. На все ссылки в примере установить класс "custom-link"

let allA = document.getElementsByTagName('a');

for (let i = 0; i < allA.length; i++) {
    allA[i].classList.add('custom-link');
}

// 9. Не используя innerHTML, добавить в список несколько li с классом 'new-item' и текстов 'item' + номер li:

/* let ul = document.querySelector('ul');
for (let i = 0; i < 5; i++) {
    let li = document.createElement('li');
    li.innerHTML = 'item ' + (ul.children.length + 1);
    li.classList.add('new-item');
    ul.insertAdjacentElement('beforeend', li)
} */

// 10. Создать три элемента strong и добавить их в конец ссылок, которые находятся внутри списка ul (в каждую ссылку один strong)

let links = document.querySelectorAll('li a');

for (let i = 0; i < links.length; i++) {
    let strong = document.createElement('strong');
    // strong.innerHTML = links[i].innerText;
    // links[i].innerHTML = '';
    links[i].insertAdjacentElement('beforeend', strong);
}

// 11. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке
let img = document.createElement('img');
img.setAttribute('src', 'https://wallpapers-fenix.eu/lar/141215/155618955.jpg');
img.setAttribute('alt', 'city')
document.body.insertAdjacentElement('afterbegin', img)

// 12. Найти на странице элемент mark, добавить в конец содержимого текст "green" и на элемент установить класс green

let mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', ' green');
mark.classList.add('green');

//13. Отсортировать li внутри списка в обратном порядке
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



