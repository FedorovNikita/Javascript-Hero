// ========================== this. Задачи ===========================
// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    wight: 4,
    height: 3,
    getSquare: function() {
        return this.wight * this.height;
    }
}

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
/* const price = {
    price: 10,
    discount: '15%',
    ...};
price.getPrice(); // 10
price.getPriceWidthDiscount(); // 8.5 */

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
        return this.price;
    },
    // getPriceWithDiscount: function() {
    //     return this.price - (this.price / 100 * parseInt(this.discount));
    // }
    // getPriceWidthDiscount() {
    //     return this.price * ((100 - parseFloat(this.discount)) / 100);
    // }
    getPriceWithDiscount: function() {
        return this.price * (100 - parseInt(this.discount)) / this.price;
    }
}

// 3. Дан объект и функция: const user = {name: 'Abraham'}, getUserName = function() {...}; Внесите в этот код такие изменения, чтобы можно было вызвать user.getName() и получить 'Nikita'

/* const user = {name: 'Nikita'},
    getUserName = function() {
        return this.name;
};

user.getName = getUserName;
console.log(user.getName()); */

// 4. Создать объект, у которого будет поле высота и метод "увеличить высоту на один". Метод должен возвращать новую высоту: object.height = 10; object.inc(); // придумать свое название для метода object.height; //11

/* const module = {
    height: 10,
    plusCounter() {
        return ++this.height;
    }
} */

// 5. Создать объект "вычислитель", у которого есть числовое свойство "значение" и методы "удвоить", "прибавить один", "отнять один". Методы можно вызывать через точку, образуя цепочку методов:
/* const numerator = {
    value: 1,
    double: function() {...},
    plusOne: function() {...},
    minusOne: function() {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value; // 3 */

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

// 6. Разобрать и объяснить, что тут происходит
/* const user = {name: 'Abraham'},
    otherUser = {
        name: 'John',
        getName: function() {return this.name;}
    };
user.getName; // undefined
// "Одалживание" метода
user.getName = otherUser.getName;

user.getName(); // 'Abraham'
otherUser.getName(); // 'John' */

// 7. Что выведет код, почему?
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

// 8. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
let product = {
    price: 100,
    totalNumber: 50,
    getCost: function() {
        return this.price * this.totalNumber;
    }
}

// 9. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого "позаимствуйте" метод из предыдущего объекта

let details = {
    price: 250,
    totalNumber: 10
}
details.getCost = product.getCost;
product.getCost.call(details);
product.getCost.apply(details);

// 10. Даны объект и функция:
/* let size = {
    width: 5,
    height: 10
}
let getSquare = function() {
    return this.width * this.height;
}
Не изменяя функцию или объект, получить результат функции getSquare для объект sizes */

/* let size = {
    width: 5,
    height: 10
}
let getSquare = function() {
    return this.width * this.height;
}
console.log(getSquare.call(size));
console.log(getSquare.apply(size)); */

// 11. Дан массив let numbers = [4,12,0,10,-2,4]. Используя ссылку на массив numbers и Math.min, найти минимальный элемент массива
/* let numbers = [4, 12, 0, 10, -2, 4];

console.log(Math.min.apply(null, numbers)); */

// 12. Исправить метод getFullHeigth таким образом, чтобы можно было вычислить сумму трех слагаемых (высота плюс отступы).
/* const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeigth: function() {
        return this.height + this.marginTop + this.marginBottom;
    }
};
Для другого объекта block {height: '5px', marginTop: '3px', marginBottom: '3px'} вычислить полную высоту getFullHeight, используя для этого объект element. В объект ничего не допусывать*/


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

console.log(element.getFullHeigth.call(block));
console.log(element.getFullHeigth.apply(block)); */

// 13. 
/* let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined 

Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25 */

/* let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
}

// let getElementHeight = element.getHeight.bind(element); 
// console.log(getElementHeight());

let getElementHeight = element.getHeight;
console.log(getElementHeight.call(element));
console.log(getElementHeight.apply(element)); */

// ============ Замыкание.Задачи ==========
// 1. Создайте функцию, которая бы умела делать:
/* minus(10)(6); //4
minus(5)(6); //-1
minus(10)(); //10
minus()(6); //-6
minus()(); //0 */

/* function culc(num1 = 0) {
    return function(num2 = 0) {
        return num1 - num2;
    }
}

let minus = culc;
console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()()); */

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

/* function multiplyMaker(num1) {
    let number = num1;
    return function(num2) {
        return number *= num2;
    }
}

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10)); */

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// а. установить строку:
//      i. если передано пустое значение, то установить пустую строку
//      ii. если передано число, чисто привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш

let modules = (function(){
    let str = '';

    function setStr(string = 0) {
        if (typeof(string) == 'number') {
            string += '';
        }
        str += string;
        return this;
    }

    function getStr() {
        return str;
    }

    function getLenght() {
        return str.length;
    }

    function getReverseStr() {
        return str.split('').reverse().join('');
    }

    return {
        setStr,
        getStr,
        getLenght,
        getReverseStr
    }

})();

// 4. Создайте модуль "калькулятор", который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this)

let culc = (function(){
    let number = 0;

    function setValue(value) {
        number += value;
        return this;
    }

    function plusValue(value) {
        number += value
        return this;
    }

    function multValue(value) {
        number *= value;
        return this;
    }

    function getValue() {
        return number
    }

    function expValue(value) {
        // let num = number;
        // for (let i = 0; i < value - 1; i++) {
        //     num *= number;
        // }
        // number = num;
        number **= value;
        return this;
    }

    return {
        setValue,
        plusValue,
        multValue,
        getValue,
        expValue
    }
})();

console.log(culc);



