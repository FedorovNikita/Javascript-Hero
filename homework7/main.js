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
    // getPriceWithDiscount: function() {
    //     return this.price - (this.price / 100 * parseInt(this.discount));
    // }
    getPriceWithDiscount: function() {
        return this.price * (100 - parseInt(this.discount)) / this.price;
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
// "Одалживание" метода
user.getName = otherUser.getName;

user.getName(); // 'Abraham'
otherUser.getName(); // 'John'

//---------------------------ЗАДАЧА 7-------------------------------
// Что выведет код, почему?
function getList() {
    return this.list;
}
let users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
}

getList(); // undefined, т.к. this будет указывать на window
// присваем users.getList функцию
users.getList = getList; 
// теперь this будет ссылаться на users 
users.getList(); // вернет массив
// с помощью call получили зрачение this в котексте users
getList.call(users); // вернет массив

//---------------------------ЗАДАЧА 8-------------------------------
// Создать объект с розничной ценой и количеством продуктов. Этот объект
// должен содержать метод для получения общей стоимости всех товаров
let product = {
    price: 100,
    totalNumber: 50,
    totalCost: function() {
        return this.price * this.totalNumber;
    }
}

//---------------------------ЗАДАЧА 9-------------------------------
// Создать объект, который описывает количество деталей и цену за одну деталь.
// Для второго объекта нужно узнать общую стомость всех деталей, но нельзя
// создавать новые функции и методы. Для этого "позаимствуйте" метод из предыдущего объекта
let details = {
    price: 250,
    totalNumber: 10
}
details.totalCost = product.totalCost;

//---------------------------ЗАДАЧА 10-------------------------------
// Даны объект и функция
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
let sizes = {
    wight: 5,
    height: 10
};
let getSquare = function() {
    return this.wight * this.height;
};

getSquare.call(sizes);

//---------------------------ЗАДАЧА 11-------------------------------
// Дан массив. Используя ссылку на массив numbers и Math.min, найти минимальный элемент массива
let numbers = [4, 12, 0, 10, -2, 4];

Math.min.apply(null, numbers); // -2

//---------------------------ЗАДАЧА 12-------------------------------
// Исправить метод getFullHeight таким образом, чтобы можно было вычислить сумму трех
// слагаемых (высота + отступы)
// Для другого объекта вычислить полную высоту, используя для этого объект element.
// В объект ничего не дописывать
/* const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function() {
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
    }
}

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
}

element.getFullHeight.call(block); */

//---------------------------ЗАДАЧА 13-------------------------------
// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight и получить 25
let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
}

/* let getElementHeight = element.getHeight(element);
getElementHeight; */
let getElementHeight = element.getHeight.bind(element); 
getElementHeight();
//---------------------------ЗАДАЧА 14-------------------------------
// Создать фкнкцию которая бы умела делать
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // 6
// minus()(); // 0

function minus(num1 = 0) {
    return function(num2 = 0) {
        if (num1 == 0) {
            return num2;
        } 
        return num1 - num2;
    }
}

let getNumber = minus;

//---------------------------ЗАДАЧА 15-------------------------------
// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат
// между вызовами
// multiply(2); // 4
// multiply(1); // 4
// multiply(3); // 12
// multiply(10); // 120

function multiplyMaker(num1) {
    let number1 = num1;
    return function(num2) {
        return number1 *= num2;
    }
}

const multiply = multiplyMaker(2);

/* console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10)); */

//---------------------------ЗАДАЧА 16-------------------------------
// Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку:
//      - если передано пустое значение, то установить пустую строку
//      - если передано число, число привести к строке
// b. получить строку 
// c. получить длину строки
// d. получить строку-перевертыш
const str = (function() {
    function setString(value) {
        if (!value) {
            return value = '';
        } else if (typeof(value) == 'number') {
            return value + '';
        } else {
            return value;
        }
    };
    function getString(value) {
        return value;
    };
    function lengthStr(value) {
        return value.length;
    };
    function reverseStr(value) {
        return value.split('').reverse().join('');
    };
    return {
        setString,
        getString,
        lengthStr,
        reverseStr
    }
})();

//---------------------------ЗАДАЧА 17-------------------------------
// Создайте модуль "калькулятор", который умеет складывать, умножать, вычитать, делить
// и возводить в степень. Конечно значение округлить до двух знаков после точки 
// (значение должно хранится в обычной переменной, не в this)
const calculator = (function() {
    let value;
    function setValue(number) {
        return value = number;
    };
    function add(number) {
        return value += number;
    };
    function subtract(number) {
        return value -= number;
    };
    function multiply(number) {
        return value *= number;
    };
    function divide(number) {
        return value /= number;
    };
    function power(number) {
        return value = Math.pow(value, number);
    };
    function getValue() {
        return +value.toFixed(2);
    };
    return {
        setValue,
        add,
        subtract,
        multiply,
        divide,
        power,
        getValue
    }
})();

// НЕ ЗНАЮ КАК СДЕЛАТЬ ЦЕПОЧКУ ВЫЗОВА С МОДУЛЕМ
/* setValue(10).power(2).getValue(); */
//setValue(10).add(5).multiply(2).



