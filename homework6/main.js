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
let span = document.createElement('span');
bd.addEventListener('click', function(e) { 
    if (!tag.children.length) {
        span.textContent = e.target.tagName;
        tag.appendChild(span);
    } else {
        /* let deleteSpan = document.querySelector('#tag span');
        deleteSpan.textContent = ""; */
        tag.children[0].innerText = '';
        span.textContent = e.target.tagName;
        tag.appendChild(span);        
    }

})