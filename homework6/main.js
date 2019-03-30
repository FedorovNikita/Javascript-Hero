//---------------------------ЗАДАЧА 1-------------------------------
// По нажатию на конопку "btn-msg" должен появиться алерт с текстом кнопки
let btnMsg = document.querySelector('#btn-msg');

btnMsg.addEventListener('click', function(e) {
    alert(e.target.textContent);
})

//---------------------------ЗАДАЧА 2-------------------------------
// При наведении указателя мыши на "btn-msg", кнопка должна становить
// красной; когда указатель мыши покидает кнопку, она становится
// прежнего цвета
btnMsg.addEventListener('mouseover', function() {
    btnMsg.classList.add('btn-red');
})
btnMsg.addEventListener('mouseout', function() {
    btnMsg.classList.remove('btn-red');
})

//---------------------------ЗАДАЧА 3-------------------------------
// При нажатии на  любой узел доумента показать в элементе с id=tag
// имя тега нажатого элемента
let bd = document.body;
let tag = document.querySelector('#tag');
bd.addEventListener('click', function(e) {
    let teg = e.target.tagName;
    tag.textContent = teg;
})