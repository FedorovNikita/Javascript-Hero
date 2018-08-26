//---------------------------ЗАДАЧА 2 через FOR-----------------------------
let string = "tseb eht ma i";
let i = string.length;
let str = "";
for ( let i = string.length-1; i >= 0; i--) {
	str += string[i];
}
console.log(str);

//---------------------------ЗАДАЧА 2 через WHILE-----------------------------
/*let string = "tseb eht ma i";
let i = string.length;
let str = "";
while (i--){
	str += string[i];
}
console.log(str);*/
//---------------------------ЗАДАЧА 3 -----------------------------
/*let numb = 1;
for ( let i = 10; i > 0; i--) {
	numb *= i;
}
console.log(numb);*/



//---------------------------ЗАДАЧА 4 -----------------------------
/*let str = "Считаем до 10и: ";
for (let i = 1; i <= 10; i++) {
	str += i + ", ";
}
console.log(str);
*/

//---------------------------ЗАДАЧА 5 -----------------------------




//---------------------------ЗАДАЧА 6 -----------------------------
/*for (var i = 1; i <= 15; i++) {
	if(i % 2 == 0) {
		console.log(i);
	} 
}*/








// let str = "I am in the easycode";
// let st = "";
// for (var i = 0; i < str.length; i++) {
// 	for (var y = 1; y < str.length; y++) {
// 		if (str[i] == " ") {
// 			st = st + str[i];
// 			st = st + str[y].toUpperCase();

// 		}
// 		st = st + str[i];
// 		i++;
// 	}
// }
// console.log(st);



// let str = "I am in the easycode";
// let i = 0;
// let st = "";
// while (i < str.length) {
// 	if (str[i] == " ") {
// 		let b = i + 1;
// 		st = st + str[i];
// 		st = st + str[b].toUpperCase();
// 		i+=2;
// 	}
// 	st = st + str[i];
// 	i++;
// }
// console.log(st);


/*let str = "I am in the easycode";
let i = 0;
let st = "";
while (i < str.length) {
	st = st + str[i];
	i++;
}
console.log(st);*/


/*// Задача 1
let str = "I am in the easycode";

for (let i = 0; i < str.length; i++) {

	if (str[i] === " "){
		let b = i + 1;
		console.log(str[i])
		console.log(str[b].toUpperCase())
		i+=2;
	}

	console.log(str[i]);
}

*/
