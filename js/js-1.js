// comment tren 1 dong cua js
/*
comment tren
nhieu dong
cua js
 */
// hen thi cac chuoi ra trinh duyet
document.write('<h2>Hello word</h2>');
// bat ra hop thoai thong bao
// alert('Hello you');
// hien thi hop thoai thong bao cho phep nguoi dung nhap du lieu
//var name = prompt('vui long nhap ho ten');
//hien thi thong tin o debug tool cua trinh duyet(luu y tab console)
//console.log(name);

/******************* kieu du lieu co ban trong js ************/
// 1- number
var number = 10;
console.log(typeof(number));
var number2 = 1323.2133;
console.log(typeof(number2));

// 2 string
var string = 'hello';
console.log(typeof string);
var number3 = '20'; // number string
console.log(typeof number3);

var sum = number+number3; // uu tien la phep toan noi chuoi
console.log(sum);
console.log(typeof sum);

// 3 - boolean
var check = false;
console.log(typeof check);
// false == '' == 0 ve mat gia tri
// true == 1 ve mat gia tri
if(check === 0){
	console.log('A');
} else {
	console.log('B');
}
var test;
console.log(typeof test);
var demo = null;
console.log(typeof demo);

/******************* Bien va khai bao bien ****************/
var myName = 'Hello';
// bien trong js ko bat dau bang so va ko dc phep trung voi cac tu khoa trong lap trinh
// var 1name = 'asdsa'; //sai
// var _12Name = 'sasas'; // hop le

var myClass = 'Java'; // js khuyen dung
// var MyClass = '.Net';
// var myClass = '.Net';
myClass = '.Net';
console.log(myClass);

let money = 100;
//let money = 330; // sai
money = 330;
console.log(money);

var x = 10;
if(true){
	var x = 20;
	console.log(x);
}
console.log(x);

let y = 10;
if(true){
	let y = 20;
	//let y = 30;
	if(true){
		let y = 30;
		console.log(y);
	}
	console.log(y);
}
console.log(y);

function checkMyNumber()
{
	let t = 10;
	if(true){
		let t = 20;
		console.log(t);
	}
	console.log(t);
}
//console.log(t);
checkMyNumber();

// tu khoa const
const PI = 3.14;
const MY_NAME = 'Adasdads';
// PI = 5.13; // sai
// const PI = 5.13; // sai
console.log(PI);

/////////////////////////////////////////
let u = 10;
if(u == 10){
	console.log('OK');
} else {
	console.log('ERR');
}

if(u > 100){
	// do something
} else if( u > 120){
	// do something
} else if(u > 8){
	// do something
} else if(u > 5){
	// do something
} else {
	// do something
}

console.log('aaaa');

switch (u) {
	case 100:
		///
		break;
	case 150:
		//
		break;
	default:
		// statements_def
		break;
}

for (let i = 1; i <= 100; i++) {
	console.log(i);
}
let k = 10;
while (k < 100) {
	// statement
	
	k++;

	//console.log(k);
}


let v = 10;
let z = 9;
let s = (v++) - (++z) + (--v) - (z--) + (++v) - (z++);
//        
console.log(s);
// 2
// 2
// 2










