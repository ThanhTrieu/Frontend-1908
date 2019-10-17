// khai bao mang trong js
// mang 1 chieu
let myArray = new Array('tao','cam','quyt','heo','bo',1,2,3,4);
let myArray2 = ['tao','cam','quyt','heo','bo',1,2,3,4];
console.log(myArray, myArray2);

// mang da chieu
let myArray3 = [
	1,
	2,
	3,
	['tao','oi'], 
	['nam', 'nu'], 
	true, 
	false
];
console.log(myArray3);

let myArray4 = new Array(1,2,3,Array('tao','oi'), Array('nam', 'nu'), true, false);
console.log(myArray4);

// kieu du lieu cua mang la object
// truy cap vao 1 phan tu nam trong mang
// cu phap : name_array[index];
console.log(myArray2[3]);   
console.log(myArray3[4][0]);
// kiem tra do dai cua mang
console.log(myArray.length);

