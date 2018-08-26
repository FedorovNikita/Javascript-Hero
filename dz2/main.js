//---------------------------ЗАДАЧА 1-----------------------------------------
/*let str = "I am in the easycode",
	st = "",
	b;

for (var i = 0; i < str.length; i++) {
	if ( str[i] == " ") {
		st += str[i];
		b = 0;
	} else if ( b == 0) {
		st += str[i].toUpperCase();
		b = 1;
	} else {
		st += str[i];	
	}
	
}
console.log(st);*/
//---------------------------ЗАДАЧА 2 через FOR-----------------------------
/*let string = "tseb eht ma i";
let i = string.length;
let str = "";
for ( let i = string.length-1; i >= 0; i--) {
	str += string[i];
}
console.log(str);*/

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
let str = "JavaScript is a pretty good language",
	st = "",
	b;

for ( let i = 0; i < str.length; i++ ){
	if ( str[i] == " ") {
		b = 0;
	} else if ( b == 0 ) {
		st += str[i].toUpperCase();	
		b = 1;
	} else {
		st += str[i];
	}
}

console.log(st);



//---------------------------ЗАДАЧА 6 -----------------------------
/*for (var i = 1; i <= 15; i++) {
	if(i % 2 == 0) {
		console.log(i);
	} 
}*/







