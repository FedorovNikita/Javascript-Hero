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

//---------------------------ЗАДАЧА 3-------------------------------
// Дан объект и функция.
// Внесите в этот код такие изменения, чтобы можно было 
// вызвать user.getName и получить 'Nikita'
/* const user = {name: 'Nikita'},
    getUserName = function() {
        return this.name;
};

user.getName = getUserName; */

//---------------------------ЗАДАЧА 4-------------------------------
// Создать объект, у которого будет поле высота и метод "увеличить высоту
// на один". Метод должен возвращать новую высоту
let objHeight = {
    height: 10,
    getHeight: function() {
        return this.height;
    },
    increaseHeight: function () {
        this.height++;
    }
}

//---------------------------ЗАДАЧА 5-------------------------------
// Создать объект "вычислитель", у которого есть числовое свойство "значение"
// и методы "удвоить", "прибавить один", "отнять один".
// Методы можно вызывать через точку, образуя цепочку методов
let numerator = {
    value: 1,
    double: function() {
        this.value += this.value;
        return this;
    },
    plusOne: function() {
        this.value++;
        return this;
    },
    minusOne: function() {
        this.value--;
        return this;
    }
}

//---------------------------ЗАДАЧА 6-------------------------------
// Разобрать и объяснить, что тут происходит
const user = {name: 'Abraham'},
    otherUser = {
        name: 'John',
        getName: function() {
            return this.name;
        }
    }

user.getName; // undefined
user.getName = otherUser.getName;

user.getName(); // 'Abraham'
otherUser.getName(); // 'John'










