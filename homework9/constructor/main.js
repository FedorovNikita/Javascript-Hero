// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)

// let lexus = new Car('lexus', 2);
// lexus.получитМарку(); // 'Lexus'
// lexus.получитьГодВыпуска(); // 2019 (2021 - 2);

//  Марка машины всегда должна возвращаться с большой буквы!

// function Car(mark, year) {
//     this.mark = mark;
//     this.year = year;
//     this.getMark = function() {
//         return this.mark[0].toUpperCase() + this.mark.slice(1);
//     }
//     this.getYear = function() {
//         return new Date().getFullYear() - this.year;
//     }
// }

// let lexus = new Car('lexus', 2);
// console.log(lexus.getMark());
// console.log(lexus.getYear());

// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получается строку и меет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// c. стереть все данные - метод должен удалить все строки
// Строки не должны быть доступны через this, только с помощью методов.

// function EncryptString(str) {
//     let text = str;
//     this.getString = function() {
//         return text;
//     }
//     this.getEncryptString = function() {
//         return text.split('').reverse().join('');
//     }
//     this.cleanText = function() {
//         text = '';
//     }
// }

// let encryptName = new EncryptString('Nikita');
// console.log(encryptName.getString());
// console.log(encryptName.getEncryptString());
// console.log(encryptName.cleanText());
// console.log(encryptName.getString());
// console.log(encryptName.getEncryptString());

// 3. Создать класс, который создает экземпляры, работающие со строкой и имеет следущие свойства и методы:
// a. свойство "строка" будет содержать строку
// b. методы для получаения и установки строки
// c. метод для получения длины строки
// d. при вызове toString() вернуть строку
// e. при приведении объекта к числу вернуть длину строки ?????
// var str = new КлассСтрока('test');
// str.получить(); // 'test'
// +str; // 4 ????? "мега очевидная" https://learn.javascript.ru/object-conversion#chislennoe-preobrazovanie
// str.toString(); // 'test'


class Str {
    constructor(str) {
        this.str = str || '';
    }

    valueOf() {
        return this.str.length;
    }

    getString() {
        return this.str;
    }

    setString(newStr) {
        this.str = newStr;
        return this;
    }

    toString() {
        return this.str;
    }
}

let newStr = new Str('Nik');
console.log(newStr.getString());
console.log(+newStr);
console.log(newStr.toString());
alert(newStr)