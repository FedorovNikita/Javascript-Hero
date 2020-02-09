// =============== some ===================

// let someAr = [1, 2, 3, 4, 'sd', 'sdf'];

// some возвращает true если хотя бы один элемент true
// let methodRes = someAr.some(function(value) {
//     return typeof value === 'number';
// })

// console.log(methodRes)

// function someArr( ar, handler ) {
//     for (let i = 0; i < ar.length; i++) {
//         if (handler(ar[i])) return true;
//     }
//     return false;
// }

// let ts = someArr(someAr, function(value) {
//     return typeof value === 'number';
// })

// console.log(ts);

// =============== every ===================
// вернет true, если каждый элемент равен true, в противном случае false
// let methodRes = someAr.every(function(value) {
//     return typeof value === 'number';
// })

// console.log(methodRes)


// function everyArr( ar, handler ) {
//     for (let i = 0; i < ar.length; i++) {
//         if (!handler(ar[i])) return false;
//     }
//     return true;
// }

// let ts = everyArr([1, 2, 3, 'zdf'], function(value) {
//     return typeof value === 'string';
// })

// console.log(ts);

// =================== Функция. Задачи ====================
// 1. Создать функцию multiply, которая будет принимать любое количество числе и возвращать их произведение. Если нет ни одного аргумента, вернуть ноль: multiply
/* function multiply () {
	let sum = 1;
	if (!arguments.length) return 0;
	for (let i = 0; i < arguments.length; i++){
		sum *= arguments[i];
	}
	return sum;
}
console.log(multiply(1, 2, 3)); */

/* function multiply(...numb) {
    let result = 1;
    if (!numb.length) return 0
    for (let i = 0; i < numb.length; i++) {
        result *= numb[i];
    }
    return result;
}

let res = multiply(1,2,3);
console.log(res); */

// 2. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью рекурсии вычислить факториал числа 10: factorial(10) = 3628800
/* function factorial(numb) {
    let result = numb;
    for (let i = numb - 1; i > 0; i--) {
        result *= i;
    }
    return result;
}

let res = factorial(10);
console.log(res); */

// =========== Факториал числа рекурсией ================
/*  function fuct(value) {
    let res = 1;

    if (value > 0) {
        res = value * fuct(value - 1);
    } 

    return res;
}
let res = fuct(10);
console.log(res); */

// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString('test') = 'tset'

/* function reverseString(str) {
    let res = ' ';
    // let i = str.length;
    // while(i){
    //     res += str[i - 1];
    //     i--;
	// }
	

    // let i = str.length;
    // while(i--){
    //     res += str[i];
	// }
	

	for (let i = str.length-1; i >= 0; i--) {
		res += str[i];
	}

    return res;
}

let res = reverseString('test');
console.log(res); */

// 4. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
/* function getCodeStringFromText(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res += str[i].charCodeAt() + ' ';
    }

    return res;
}
let res = getCodeStringFromText('hello');
console.log(res); */

/*-------------------------ЗАДАЧА №5  ---------------------------*/



// 6. Создать две функции и дать им осмысленные названия:
//    - первая функция принимает массив и колбэк
//    - вторая функция (колбэк) обрабатывает каждый элемент массива
// Первая функция возвращает строку "New value": и обработанный массив:

function first(arr, cal) {
    let res = 'New value: ';
    for (let i = 0; i < arr.length; i++) {
        res += cal(arr[i]);
    }

    return res;
}


/* let res = first(['my', 'name', 'is', 'Nikita'], function second(value) {
    return value[0].toUpperCase() + value.slice(1);
}); */

/* let res = first([10, 20, 30], function second(value) {
    return value * 10 + " ";
}); */

/* let res = first([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], function second(value) {
    return value.name + ' is ' + value.age + ", ";
}); */

let res = first(['abc', '123'], function second(value) {
    let str = '';
    for (let i = value.length - 1; i >= 0; i--) {
        str += value[i];
    }
    return str + ', ';
});

console.log(res);