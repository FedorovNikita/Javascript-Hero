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
let p = document.querySelector('p');
//
for (let i = 0; i < p.childNodes.length; i++) {
    if (p.childNodes[i].nodeType == 3) {
        p.childNodes[i].data = "-twxt-";
    }
}


