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

// function User(userName, dateRegistration) {
//     this.userName = userName;
//     this.dateRegistration = dateRegistration;
// }

// User.prototype.getInfo = function() {
//     return {
//         userName: this.userName,
//         dateRegistration: this.dateRegistration,
//     }
// }

// function Admin(userName, dateRegistration, isSuperAdmin) {
//     User.call(this, userName, dateRegistration);
//     this._superAdmin = isSuperAdmin;
// }

// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;

// Admin.prototype.getInfo = function() {
//     const originMethod = User.prototype.getInfo.call(this);
//     originMethod['isSuperAdmin'] = this._superAdmin;
//     return originMethod;
// }

// function Guest(userName, dateRegistration) {
//     User.call(this, userName, dateRegistration);
//     this._validDate = new Date(+(new Date(this.dateRegistration)) + 604800000).toLocaleDateString();
// }

// Guest.prototype = Object.create(User.prototype);
// Guest.prototype.constructor = Guest;

// Guest.prototype.getInfo = function() {
//     const originMethod = User.prototype.getInfo.call(this);
//     originMethod['validDate'] = this._validDate;
//     return originMethod;
// }

// let newUser = new User('Nik', '06.06.21');
// let newAdmin = new Admin('Nik2', '07.07.21', true);
// let newGuest = new Guest('Nik3', '08.08.21');


// ====== Задания на функциональное наследование =======
// =================== Задача 1 ===================

// function General() {
//     this.test = true;
//     this.parent = true;
//     this.getInfo = function () {
//         return {test: this.test, parent: this.parent};
//     }       
// } 

//   Создайте наследника от General, у которого будет parent = false и появится новоё свойство child = true. Метод getInfo должен вернуть объект как из оригинальной функции + поле child ({test: .., parent: …, child: ...})


// function General() {
//     this.test = true;
//     this.parent = true;
//     this.getInfo = function () {
//         return {test: this.test, parent: this.parent};
//     }       
// } 

// function ChildGeneral() {
//     General.call(this);
//     this.parent = false;
//     this.child = true;
//     let originalResult = this.getInfo();

//     this.getInfo = function() {
//         originalResult['child'] = this.child;
//         return originalResult;
//     }
// }

// let child = new ChildGeneral();

// ============== Задача 2 ==========
// Создайте класс Мальчик, который при инициализации принимает имя. 
// У этого класса есть свойство “хороший”=true.
// У класса так же есть метод “получить имя”, который должен вернуть строку вида:
// “Мальчика зовут ” + имя + “. Он ” + <свойство хороший> === true ? “хороший” : “плохой”.
// Далее создайте наследника от Мальчика - ПлохойМальчик. Установите свойство “хороший” равным false. Метод “получить имя” должен показывать алёрт со строкой из оригинального метода и добавочным текстом с новой строки “Не дружите с ним”.
// Подсказка: для перевода на новую строку используйте символ \n

// function Boy(name) {
//     this.nameBoy = name;
//     this.good = true;
//     this.getName = function() {
//         return `Мальчика зовут ${this.nameBoy}. Он ${this.good ? 'хороший' : 'плохой'}`;
//     }
// }

// function BadBoy(name) {
//     Boy.call(this, name);
//     this.good = false;
//     const originalResult = this.getName();

//     this.getName = function() {
//         return `${originalResult}. Не дружите с ним.`
//     }
// }

// const tom = new Boy('Tom');
// const mike = new BadBoy('Mike');
// console.log(tom);
// console.log(mike);

// ================ Задача 3 ============
// Создайте класс Fruit, который при инициализации принимает строковые аргументы “имя” и “цвет”. У класс есть один метод - “получить информацию”, который возвращает информацию о фрукте в виде строки “Фрукт” + имя + “цвет“ + цвет (“Фрукт - апельсин, цвет - оранжевый”).
// Создайте наследника от Fruit - SweetFruit. У него появится свойство sweetness=true.  Метод “получить информацию” должен вернуть строку “Фрукт - апельсин, цвет - оранжевый, сладость - true”. Также добавить метод “установить сладость”, который позволит установить sweetness в любое значение (например, sweetness = “сладкий”). Метод “получить информацию” должен показывать актуальное значение sweetness (“Фрукт - апельсин, цвет - оранжевый, сладость - сладкий”)

// function Fruit(name, color) {
//     this.friutName = name;
//     this.fruitColor = color;
//     this.getInfo = function() {
//         return `Фрукт - ${this.friutName}, цвет - ${this.fruitColor}`;
//     }
// }

// function SweetFruit(name, color) {
//     Fruit.call(this, name, color)
//     this.sweetness = true;
//     let originalResult = this.getInfo();

//     this.setSweetness = function(sweet) {
//         this.sweetness = sweet;
//         return this;
//     }

//     this.getInfo = function() {
//         return `${originalResult}, сладость - ${this.sweetness}`;
//     }
// }

// const apple = new Fruit('apple', 'green');
// const pineapple = new SweetFruit('pineapple', 'yellow'); 
// console.log(apple);
// console.log(pineapple);

// Задания на прототипное наследование
// ====================== Задача 1 ================

// // Дан класс User. Создать наследника NewUser, у которого метод setNewName будет ко всему создавать новое свойство this.changed = “The field ‘name’ was changed!”.
// function User(name, age) {
//   this.name = name || 'Unknown';
//   this.age = age || 0;
// }

// User.prototype.setNewName = function (name) {
//   this.name = name;
// };


// function User(name, age) {
//     this.name = name || 'Unknown';
//     this.age = age || 0;
// }

// User.prototype.setNewName = function(name) {
//     this.name = name;
// };

// function NewUser(name, age) {
//     User.call(this, name, age);
// }

// NewUser.prototype = Object.create(User.prototype);
// NewUser.prototype.constructor = NewUser;

// NewUser.prototype.setNewName = function(name) {
//     const oldName = this.name;
//     const originMethod = User.prototype.setNewName(name);
//     this.changed = `The field ${oldName} was changed on ${name}`;
// }

// const nik = new NewUser('Nik', 25);

// ==================== Задача 2 =================
// Дан абстрактный класс Module. 
// Разобраться, что он делает и как работает.
// // Создать наследника NewModule. Его setGlobalName должен делать всё то же самое, что и родительская функция, + устанавливать this.length = this.name.length.
// function Module(name) {
//   if (typeof name !== 'string') {
//     throw 'Enter a name!';
//   }
  
//   this.getName = function () {
//     return name;
//   };
// }

// Module.prototype.getPrettyName = function () {
//   let name = this.getName();  
//   name = name.replace(/\s+/, '_');  
//   return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
// };

// Module.prototype.setGlobalName = function (prefix) {
//   let name = this.getName();
//   this.name = prefix ? prefix + '_' + name : name; };



function Module(name) {
    if (typeof name !== 'string') {
        throw 'Enter a name!';
    }
    
    this.getName = function () {
        return name;
    };
}

Module.prototype.getPrettyName = function () {
    let name = this.getName();  
    name = name.replace(/\s+/, '_');  
    return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
};

Module.prototype.setGlobalName = function (prefix) {
    let name = this.getName();
    this.name = prefix ? prefix + '_' + name : name;
};

function NewModule(name) {
    Module.call(this, name);
}

NewModule.prototype = Object.create(Module.prototype);
NewModule.prototype.constructor = NewModule;

NewModule.prototype.setGlobalName = function(prefix) {
    Module.prototype.setGlobalName.call(this, prefix);
    this.length = this.name.length;
}

const mod = new NewModule('Nik');

