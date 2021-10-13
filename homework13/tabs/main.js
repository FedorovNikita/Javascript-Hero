const productsTitleLinks = document.querySelectorAll('.products-title__link');
const productsList = document.querySelectorAll('.products__item');

for (let i = 0; i < productsTitleLinks.length; i++) {
    productsTitleLinks[i].addEventListener('click', (e) => clickOnTabs(e, i));
}

function clickOnTabs(e, i) {
    deleteActiveClass();

    e.target.classList.add('products-title__link--active');
    productsList[i].classList.add('products__item--active');
}

function deleteActiveClass() {
    for (let i = 0; i < productsTitleLinks.length; i++) {
        productsTitleLinks[i].classList.remove('products-title__link--active');
        productsList[i].classList.remove('products__item--active');
    }
}

