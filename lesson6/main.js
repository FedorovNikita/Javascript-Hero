function getPrice(currency, price) {
    console.log(this);
    //return `Этот товар строит  + ${currency}${this.price}`;
    return `Этот товар ${price}  + ${currency}${this.price}`;
}
let intel = {
    name: 'Intel i7 3.5',
    price: 100,
    discount: 10,
    count: 50,
    getPrice: getPrice
};

let amd = {
    name: 'AMD a8 3.5',
    price: 75,
    discount: 10,
    count: 50,
    getPrice: getPrice,
    // calcTotalPrice: function() {
    //     this.totalPrice = this.count * this.price;
    //     return this;
    // },
    // getTotalPrice: function() {
    //     return this.totalPrice;
    // }
};
// если я хочу вызвать getPrice в amd, но не хочу записывать эту функцию
// в объект. НО я хочу чтобы функция getPrice была вызвана в контексте amd 
// метод call указывать контекст вызова для функции
// 1 параметр - контекст вызова
// 2 параметр - неограниченное количество аргументов
//getPrice.call(amd, "$", 'price');

// 1 аргумент контекст вызова
// 2 примит аргументы в виде массива
//getPrice.apply(amd, ['$', 'price']);

Math.max(2, 3, 4, 5); // 5
// но нельзя передать массив, а с apply можно
Math.max.apply(null, [2, 10, 34, 23, 66, 4]); // 66

/* amd.getPrice = getPrice;
// одалживание метода
amd.getPrice = intel.getPrice; */

//intel.getPrice();


/* // потеря контекста вызова
// можно привязать контекст вызова методом bind
intel.getPrice = getPrice.bind(intel);
// выше мы привязали в getPrice именно intel и теперь не получится 
// обратится к контексту вызова в amd, например
amd.getPrice = intel.getPrice;
// this указывается в контексте window, поэтому мы теряем доступ к нашим данным 
 setTimeout(intel.getPrice, 1000);

// еще один способ не потерять контекст вызова, без bind
setTimeout(() => {
    intel.getPrice();
}, 1000)
 */



 // ЗАМЫКАНИЕ
// Лексическое окружение 0 уровня
// {
//     name: 'Nik',
//     getName: getName,
//     scope: null
// }
let name = "Nik";
function getName(name) {
    // Лексическое окружение 1 уровня
    // {
    //     name: 'Nik',
    //     text: 'My name is ',
    //     args: arguments,
    //     getFullName: getFullName,
    //     scope: Лексическое окружение 0 уровня
    // }
    let text = 'My name is ';

    function getFullName(secondName) {
        // Лексическое окружение 2 уровня
        // {
        //     secondName: 'Fedorov',
        //     args: arguments,
        //     scope: Лексическое окружение 1 уровня
        // }
        return name + ' ' + secondName;
    }
    
    return text + getFullName('Fedorov');
}

getName(name);



// пример с счетчиками
function makeCounter() {
    let counter = 0;
        // Лексическое окружение 1 уровня
        // {
        //     counter: 0,
        //     args: arguments,
        //     scope: Лексическое окружение 0 уровня
        // }
    return function() {
        // Лексическое окружение 2 уровня
        // {
        //     args: arguments,
        //     scope: Лексическое окружение 1 уровня
        // }

        return ++counter;
    }
} 

let counterState = makeCounter();
//console.log(counterState());



let module = (function () {
    let counter = 0;

    function setCounter(value) {
        counter = value;
        // чтобы сделать цепочку вызовов
        return this;
    }

    function plusCounter() {
        counter++;
            // чтобы сделать цепочку вызовов
            return this;
    }

    function getCounter() {
        return counter;
    }

    function reset(value) {
        counter = 0;
    }

    /* return {
        setCounter: setCounter,
        getCounter: getCounter,
        plusCounter: plusCounter,
        reset: reset
    } */
    // можем сократить
    return {
        setCounter,
        getCounter,
        plusCounter,
        reset
    }
})();

// чтобы сделать цепочку вызовов
module.setCounter(5).plusCounter().getCounter(); // 6
console.log(module);