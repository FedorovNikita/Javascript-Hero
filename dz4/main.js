/*  ------------------ЗАДАЧА №1------------------ */
/*function doubleArray(arr){
	let copy = [].concat(arr);
	let concatArr = copy.concat(arr);

	return concatArr;
}
let res = doubleArray([1,2,3]);

console.log(res);*/
/*  ------------------ЗАДАЧА №2------------------ */
/*function getLastArr(arr){
	return arr[arr.length - 1];	
}
let res = getLastArr([1, 2, 3]);

console.log(res);*/
/*  ------------------ЗАДАЧА №3------------------ */
/*function getArray(arr){
	let array = [];
	for (let i = 1; i <= arr; i++) {
		array.push(i);
	}
	return array;
}
let res = getArray(100);

console.log(res);*/
/*  ------------------ЗАДАЧА №4------------------ */
function changeCollection(...arr){
	let array = [];

	for (let i = 0; i < arr.length; i++) {
		array.push(arr[i].shift());
	}
	return arr;
}
let res = changeCollection([1, 2, 3], ['a', 'b', 'c']);

console.log(res);

/*  ------------------ЗАДАЧА №5------------------ */
