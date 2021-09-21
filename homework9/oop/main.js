// ============= Задача 1 ================== 
// Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function() {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет принимать кроме name название спутника (satelliteName). Переопределите метод getName для PlanetWithSatellite так, чтобы он возвращал туже самую строку + дополнительный текст 'The satellite is ' + satelliteName.
// Например:
// let earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon'

// function Planet(name) {
//     this.name = name;
//     this.getName = function() {
//         return 'Planet name is ' + this.name;
//     }
// }

// function PlanetWithSatellite(nameEarth, nameSatellite) {
//     Planet.call(this, nameEarth);
//     this.nameSatellite = nameSatellite
//     const origin = this.getName;
//     this.getName = function() {
//         return origin.call(this) + '. The satellite is ' + this.nameSatellite;
//     }
// }

// let earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth.getName());

// function Planet(name) {
//     this.name = name;
// }

// Planet.prototype.getName = function() {
//     return 'Planet name is ' + this.name;
// }

// function PlanetWithSatellite(nameEarth, nameSatellite) {
//     Planet.call(this, nameEarth);
//     this.nameSatellite = nameSatellite;
// }

// PlanetWithSatellite.prototype = Object.create(Planet.prototype);
// PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

// PlanetWithSatellite.prototype.getName = function() {
//     const originMethod = Planet.prototype.getName.call(this);
//     return `${originMethod}. The satellite is ${this.nameSatellite}`;
// }

// let earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth);
// console.log(earth.getName());

// ================== Задача 2 ================== 
// Создайте класс "Здание" (пусть у него будет имя, количество этажей, метод "получить количество этажей" и метод "установить количество этажей"). Создайте наследников класса:
// классы "Жилой дом" и "Торговый дом". Используйте функциональное наследование
// У жилого дома появится свойство "количество квартир на этаже", а метод "получить количество этажей" должен вернуть обхект вида {этажы: 5, всегоКвартир: 5 * количество квартир}
// У торогового центра появится свойство "количество магазинов на этаже", а метод "получить количество этажей" должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экзепляр (дом, торговый центр)

// function Building(name, floors) {
//     this.name = name;
//     this.floors = floors;

//     this.getCountFloors = function() {
//         return this.floors;
//     }

//     this.setCountFloors = function(count) {
//         this.floors = count;
//     }
// }

// function BlockOfFlats(name, floors, countFlatsInFloor) {
//     Building.call(this, name, floors);
//     this.countFlatsInFloor = countFlatsInFloor;
//     const origin = this.getCountFloors;
//     this.getCountFloors = function() {
//         return {
//             floors: origin.call(this),
//             allFlats: origin.call(this) * this.countFlatsInFloor,
//         }
//     }
// }

// function Shops(name, floors, countShopsFloor) {
//     Building.call(this, name, floors);
//     this.countShopsFloor = countShopsFloor;
//     const origin = this.getCountFloors;
//     this.getCountFloors = function() {
//         return {
//             floors: origin.call(this),
//             allShops: origin.call(this) * this.countShopsFloor,
//         }
//     }
// }

// let newBuild = new Building('Trump', 100);
// let newFlats = new BlockOfFlats('My sweet Home', 5, 6);
// let newShops = new Shops('New Mall', 3, 100);

// =============== Задача 3 ===============
// Создать класс "Мебель" с базовыми свойствами "имя", "цена" и методом "получить информацию" (метод должен вывести имя и цену в объекте). Метод должен быть объявлен с помощью прототипа (Func.prototype...).
// Создать два экземпляра класса "Мебель": экземпляр "ОфиснаяМебель" и "МебельДляДома". Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьтерного стола или шредера). Метод "получить информацию" должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса

// function Furniture(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Furniture.prototype.getInfo = function() {
//     return {
//         name: this.name,
//         price: this.price,
//     }
// }

// function OfficeFurniture(name, price, chair) {
//     Furniture.call(this, name, price);
//     this.chair = chair;
// }

// OfficeFurniture.prototype = Object.create(Furniture.prototype);
// OfficeFurniture.prototype.conctructor = OfficeFurniture;

// OfficeFurniture.prototype.getInfo = function() {
//     const originMethod = Furniture.prototype.getInfo.call(this)
//     originMethod['is_chair'] = this.chair;

//     return originMethod;
// }

// function HomeFurniture(name, price, wardrobe) {
//     Furniture.call(this, name, price);
//     this.wardrobe = wardrobe;
// }

// HomeFurniture.prototype = Object.create(Furniture.prototype);
// HomeFurniture.prototype.conctructor = HomeFurniture;

// HomeFurniture.prototype.getInfo = function() {
//     const originMethod = Furniture.prototype.getInfo.call(this)
//     originMethod['is_wardrobe'] = this.wardrobe;

//     return originMethod;
// }


// let sofa = new Furniture('sofa', 120000);
// let newOfficeFurniture = new OfficeFurniture('Office furniture', 1200000, true);
// let newHomeFurniture = new HomeFurniture('Home furniture', 1200000, true);

// console.log(sofa);
// console.log(newOfficeFurniture);
// console.log(newHomeFurniture);

// ================ Задачание 4 ==============
// Создать класс "Пользователь" с базовыми свойствами "имя", "дата регистрации" и методом "получить информацию" (метод должен вывести имя и дату регистрации в виде объекта). Метод должен быть объявлен с помощью прототипов (Func.prototype)
// Создать два наследника класса "Пользователь": класс "Админ" и класс "Гость".
// У класса "Админ" должно быть дополнительное свойство "суперАдмин" (может быть true/false, должно быть скрытм). Свойства определяются в момент вызова конструктора
// У класса "Гость" должно быть свойство "срокДействия" (validDate, например - поле также должно бытьс скрым), содержащее дату (например, одну неделю от момента регистрации)
// У классов-наследников метод "получить информацию" должен также информацию о дополинтельый свойствах ("суперАдмин" и "срокДействия")

function User(userName, dateRegistration) {
    this.userName = userName;
    this.dateRegistration = dateRegistration;
}

User.prototype.getInfo = function() {
    return {
        userName: this.userName,
        dateRegistration: this.dateRegistration,
    }
}

function Admin(userName, dateRegistration, isSuperAdmin) {
    User.call(this, userName, dateRegistration);
    this._superAdmin = isSuperAdmin;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getInfo = function() {
    const originMethod = User.prototype.getInfo.call(this);
    originMethod['isSuperAdmin'] = this._superAdmin;
    return originMethod;
}

function Guest(userName, dateRegistration) {
    User.call(this, userName, dateRegistration);
    this._validDate = new Date(+(new Date(this.dateRegistration)) + 604800000).toLocaleDateString();
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.getInfo = function() {
    const originMethod = User.prototype.getInfo.call(this);
    originMethod['validDate'] = this._validDate;
    return originMethod;
}

let newUser = new User('Nik', '06.06.21');
let newAdmin = new Admin('Nik2', '07.07.21', true);
let newGuest = new Guest('Nik3', '08.08.21');

