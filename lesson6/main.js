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
    // getPrice: getPrice,
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
getPrice.call(amd, "$", 'price');

// 1 аргумент контекст вызова
// 2 примит аргументы в виде массива
getPrice.apply(amd, ['$', 'price']);

Math.max(2, 3, 4, 5); // 5
// но нельзя передать массив, а с apply можно
Math.max.apply(null, [2, 10, 34, 23, 66, 4]); // 66

/* amd.getPrice = getPrice;
// одалживание метода
amd.getPrice = intel.getPrice; */

//intel.getPrice();