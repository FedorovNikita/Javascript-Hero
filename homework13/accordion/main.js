const productsItem = document.querySelectorAll('.products__item');

productsItem.forEach(product => {
    product.addEventListener('click', onClick)
})

function onClick(e) {
    const link = e.target;
    const text = link.nextElementSibling;
    text.classList.toggle('products__text--active');
}