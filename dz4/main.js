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
/*function changeCollection(...arr){
	let array = [];

	for (let i = 0; i < arr.length; i++) {
		array.push(arr[i].shift());
	}
	return arr;
}
let res = changeCollection([1, 2, 3], ['a', 'b', 'c']);

console.log(res);
*/
/*  ------------------ЗАДАЧА №5------------------ */
/*function sortString(str) {
	return str.split('').sort().reverse().join('');
}
let res = sortString('bcdaeflmjgkhi');

console.log(res);*/
/*  ------------------ЗАДАЧА №6------------------ */
/*function sortArr(arr) {
	return arr.sort((prev, next) => next - prev);
}
let res = sortArr([2, 4, 7, 1, -2, 10, -9]);

console.log(res);*/

/*function sortArr(arr) {
	return arr.sort((prev, next) => prev - next).reverse();
}
let res = sortArr([2, 4, 7, 1, -2, 10, -9]);

console.log(res);*/
/*  ------------------ЗАДАЧА №7------------------ */
/*function getNewArray(arr, a, b) {
	return arr.splice(a, b);
}
let res = getNewArray(['a', 'b', 'c', 'd', 'e'], 2, 4);

console.log(res);*/
/*  ------------------ЗАДАЧА №8------------------ */
/*function getTwoArray(arr) {
	let copied = [].concat(arr);

	return copied.concat(arr);
}
let res = getTwoArray(['one', 2, 'three', 4]);

console.log(res);*/
/*  ------------------ЗАДАЧА №9------------------ */
/*let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);
console.log(arr);
*/
/*  ------------------ЗАДАЧА №10------------------ */
/*let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'three', 'four');
console.log(arr);*/
/*  ------------------ЗАДАЧА №11------------------ */
/*let arr = ['I', 'am', 'an', 'array'];
arr.splice(3, 0, 'awesome');
console.log(arr);*/
/*  ------------------ЗАДАЧА №12------------------ */
/*let arr = [[14, 15], [1], ['a', 'b', 'c']].sort();
console.log(arr);*/
/*  ------------------ЗАДАЧА №13------------------ */
/*let arr = [1, 2, 3];
let arrCopy = [].concat(arr);
console.log(arrCopy);*/
/*  ------------------ЗАДАЧА №14------------------ */
/*let arr = [
	{
		cpu: 'intel',
		info: {
			cores: 2,
			cache: 3
		}
	},
	{
		cpu: 'intel',
		info: {
			cores: 4,
			cache: 4
		}
	},
	{
		cpu: 'intel',
		info: {
			cores: 1,
			cache: 1
		}
	},
	{
		cpu: 'intel',
		info: {
			cores: 3,
			cache: 2
		}
	},
	{
		cpu: 'intel',
		info: {
			cores: 4,
			cache: 2
		}
	},
];
arr.sort((prev, next) => {
	if (prev.info.cores < next.info.cores) return -1;
	if (prev.info.cores > next.info.cores) return 1;
});
console.log(arr);*/
/*  ------------------ЗАДАЧА №15------------------ */
const products = [
	{title: 'prod1', price: 5.2},
	{title: 'prod2', price: 0.18},
	{title: 'prod3', price: 15},
	{title: 'prod4', price: 25},
	{title: 'prod5', price: 18.9},
	{title: 'prod6', price: 8},
	{title: 'prod7', price: 19},
	{title: 'prod8', price: 63}
];

function filterCollection(prod, a, b) {

	prod.sort((prev, next) => {
		if (prev.price < next.price) return -1;
		if (prev.price > next.price) return 1;
		
	});
	/*let array = [];
	for (let i = 0; i <= prod.length; i++) {
		if (prod[i].price > a && prod[i].price < b) {
			array.push(array[i]);
		}
	}
	return array;*/
	return prod;
	
}


let res = filterCollection(products, 15, 30);

console.log(res);