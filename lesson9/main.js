/* // 1. Создается пустой объект
// 2. Этот объект устанавливается в качестве this для этой функции
// 3. Функция запускается 
// 4. Функция возвразается this (даже есчли нет return)

function Persone(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Persone.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

Persone.prototype.greeting = function() {
    return `Hello there  ${this.firstName} ${this.lastName}`;
};

let nikita = new Persone('Nikita', 'Fedorov');

// унаследовать один класс от другого
function Customer(firstName, lastName, phone, membership) {
    // чтобы заного не определять firstName, lastName
    Persone.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// чтобы наследовать прототип родителя
Customer.prototype = Object.create(Persone.prototype);

Customer.prototype.constructor = Customer;

Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

Customer.prototype.getMembership = function() {
    return this.membership;
};

let customer1 = new Customer('Ivan', 'Ivanov', '8(800)-333-23-42', 'Standart');
//console.log(customer1);
 */

// classes ES6

class Persone {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // методы
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    // статический метод
    static sumNumbers(x, y) {
        return x + y;
    }
    

}

const nikita = new Persone('Nikita', 'Fedorov');
// чтобы вызвать статический метод
Persone.sumNumbers(1, 3);

// чтобы наследовать классы
class Customer extends Persone {
    constructor(firstName, lastName, phone, membership) {
        // наследуем у родителя с помощью super
        super(firstName, lastName);
        
        this.phone = phone;
        this.membership = membership;
    }

    getMembership() {
        return this.membership;
    }

    greeting() {
        // вызвать greeting родителя
        // console.log(super.greeting());      
        // return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;

        return `${super.greeting()} welcome to our company`;
    }
}

const customer1 = new Customer('Ivan', 'Ivanov', '8(800)-333-23-42', 'Standart');

console.log(nikita);
console.log(customer1);




























