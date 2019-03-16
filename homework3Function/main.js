/*------------------ЗАДАЧА №1 со встроенной переменной-----------------*/
/* function multiply () {
	let sum = 1;
	if (!arguments.length) return 0;
	for (let i = 0; i < arguments.length; i++){
		sum *= arguments[i];
	}
	return sum;
}
console.log(multiply(1, 2, 3)); */


/*-------------------------ЗАДАЧА №1 с ... ---------------------------*/
/* function multiply(...numbers) {
    let sum = 1;

    if (!numbers.length) return 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum *= numbers[i];
    }
    
    return sum;
}

let res = multiply(1, 2, 3);
console.log(res);
 */

/*-------------------------ЗАДАЧА №2  ---------------------------*/
// Факториал числа рекурсией
/*  function fuct(value) {
    let res = 1;    
    
    if (value > 0) {
        res = value * fuct(value - 1);
	} 
	
    return res;
}
let res = fuct(10);
console.log(res); */ 

/*-------------------------ЗАДАЧА №3  ---------------------------*/
// function reverseString(str) {
//     let res = ' ';
//     /* let i = str.length;
//     while(i){
//         res += str[i - 1];
//         i--;
// 	} */
	

//     /* let i = str.length;
//     while(i--){
//         res += str[i];
// 	} */
	

// 	for (let i = str.length-1; i >= 0; i--) {
// 		res += str[i];
// 	}

//     return res;
// }

// let res = reverseString('test');
// console.log(res);
/*-------------------------ЗАДАЧА №4  ---------------------------*/
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



/*-------------------------ЗАДАЧА №6  ---------------------------*/
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
    let i = value.length,
        res = '';
    /* while(i--){
        res += value[i];
	}  */
	for ( let i = value.length - 1; i >= 0; i--){
		res += value[i];
	}
    return res + ' ';
});
/* let res = first([1, 2, 3], function second(value) {
    return value + 5 + ", ";
}); */
console.log(res);