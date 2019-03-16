// 1. Получить (в консоль head)
/* let head = document.head;
let head = document.querySelector('head'); */

// 2 body
/* let body = document.querySelector('body'); */
/* let body = document.body;  */

// 3 все дочерние элементы body
/* let parentBody =  body.children; */

// 4 первый div и все его дочерние узлы
// a) все дочерние узлы в консоль
/* let firstDiv = document.querySelector('div');
let childDiv = firstDiv.children; */

// б) в констоль все дочерние узлы, кроме первого и последнего
/* let res = Array.prototype.slice.call( childDiv, 1, -1); */

// задание 5 (1)
/*function isParent(parent, child) {
	//if (parent.contains(child)) {
	//	return true
	//}
	//return false;
	if (parent.querySelector('mark') == child) {
		return true;
	}
	return false;
}

let res = isParent(document.body.children[0], document.querySelector('mark'));
let res2 = isParent(document.querySelector('ul'), document.querySelector('mark'));
console.log(res);
console.log(res2);*/
// задание 6 (2)
/*let res = document.querySelector('ul').previousElementSibling.querySelector('a');
console.log(res);*/
// задание 7 (3)
/*let res = document.querySelector('ul').nextElementSibling,
	res2 = document.querySelector('ul').previousElementSibling;
console.log(res2);*/
// задание 8 (4)
// по всему документу
let res = document.querySelectorAll('li'); 
console.log(res.length);

// количество li только в ul
let res2 = document.querySelector('ul').querySelectorAll('li');
console.log(res2.length);