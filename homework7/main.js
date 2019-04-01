//---------------------------ЗАДАЧА 1-------------------------------
// Создать объект, который описывает ширину и высоту прямоугольника, а
// также может посчитать площать фигуры

const rectangle = {
    wight: 4,
    height: 3,
    getSquare: function() {
        return this.wight * this.height;
    }
}

//---------------------------ЗАДАЧА 2-------------------------------
// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
        return this.price;
    },
    getPriceWithDiscount: function() {
        return this.price - (this.price / 100 * parseInt(this.discount));
    }
}

