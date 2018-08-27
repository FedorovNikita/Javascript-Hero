/*------------------ЗАДАЧА №1 со встроенной переменной-----------------*/
/*function multiply () {
	let sum = 1;
	for ( let i = 0; i < arguments.length; i++){
		sum *= arguments[i];
	}
	return sum;
}
console.log(multiply(1,2,3));*/


/*-------------------------ЗАДАЧА №1 с ... ---------------------------*/
/*function multiply (...arg) {
	let sum = 1;
	for ( let i = 0; i < arg.length; i++){
		sum *= arg[i];
	}
	return sum;
}
console.log(multiply(1,2,3));*/


/*-------------------------ЗАДАЧА №2  ---------------------------*/



/*-------------------------ЗАДАЧА №3  ---------------------------*/
/*function reverseString (str) {
	let i = str.length;
	let st = "";
	while (i--){
		st += str[i];
	}
	return st;
}

console.log(reverseString('tset'));*/
/*-------------------------ЗАДАЧА №4  ---------------------------*/
/*function getCodeStringFromText (str) {
	let st = "";
	for ( let i = 0; i < str.length; i++){
		st += str[i].charCodeAt() + " ";
	}
	return st;
}
console.log(getCodeStringFromText('hello'));*/

/*-------------------------ЗАДАЧА №5  ---------------------------*/



/*-------------------------ЗАДАЧА №6  ---------------------------*/
/*function firstFunc(arr, secondFunc){
	let retFn = "";
	for (let i = 0; i < arr.length; i++) {
		retFn += secondFunc(arr[i])
	}
	let str = "New value: " + retFn;

	return str;
};

let fn = firstFunc(['my', 'name', 'is', 'Trinity'], function(el){
	let st = "";
	st += el[0].toUpperCase() + el.slice(1);

	return st;
});

console.log(fn);*/



/*function firstFunc(arr, secondFunc){
	let retFn = "";
	for (let i = 0; i < arr.length; i++) {
		retFn += secondFunc(arr[i])
	}
	let str = "New value: " + retFn;

	return str;
};

let fn = firstFunc([10, 20, 30], function(el){
	let st = "";
	st += el * 10 + ", ";

	return st;
});

console.log(fn);*/




/*function firstFunc(arr, secondFunc){
	let retFn = "";
	for (let i = 0; i < arr.length; i++) {
		retFn += secondFunc(arr[i])
	}
	let str = "New value: " + retFn;

	return str;
};

let fn = firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], function(el){
	let st = "";
	st += el.name + ' is ' + el.age + ', ';

	return st;
});

console.log(fn);*/



/*function firstFunc(arr, secondFunc) {
	let retFn = "";
	for (let i = 0; i < arr.length; i++) {
		retFn += secondFunc(arr[i])
	}
	let str = "New value: " + retFn;

	return str;
};

let fn = firstFunc(['abc', '123'], function(el){
	let st = "",
		a = el.length,
		str = "";
	for ( let b = el.length-1; b >= 0; b--) {
		str += el[b];
	}
	st += str + ', ';

	return st;
});

console.log(fn);*/



/*function firstFunc(arr, secondFunc) {
	let retFn = "";
	for (let i = 0; i < arr.length; i++) {
		retFn += secondFunc(arr[i])
	}
	let str = "New value: " + retFn;

	return str;
};

let fn = firstFunc([1, 2, 3], function(el) {
	let st = "";
	st += el + 5 + ', ';

	return st;
});

console.log(fn);*/