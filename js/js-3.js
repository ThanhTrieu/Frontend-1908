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

let emptyArr = [];
emptyArr['id'] = 1;
emptyArr['name'] = 'Nguyen Van A';
emptyArr['age'] = 20;
emptyArr['add'] = 'Ha Noi';
console.log(emptyArr.length);
//////////// Duyet mang //////////////////////
let arrNumber = [1,2,3,4,5,6,7,8,9];
// 1 - for
let countArr = arrNumber.length;
for (let i = 0; i < countArr; i++) {
	console.log('key : ' + i + ' - value :' + arrNumber[i]);
}

// 2 - forEach
arrNumber.forEach(function(el, key){
	console.log('key : ' + key + ' - value :' + el);
});

// 3 - for .. of
for ( let j of arrNumber) {
	console.log(j);

}

//Cac phuong thuc lam viec voi mang trong js ///////////
let arrNumber2 = [1,2,3,4,5,6,7,8,9];
// them so 100 vao cuoi mang
arrNumber2.push(100);
console.log(arrNumber2);

// xoa phan tu o cuoi mang
let lastElement = arrNumber2.pop();
console.log(lastElement, arrNumber2);

//them phan tu vao dau mang
arrNumber2.unshift(lastElement);
console.log(arrNumber2);

// xoa phan tu o dau mang
let firstElement = arrNumber2.shift();
console.log(firstElement,arrNumber2);

// tim kiem cac phan tu nam trong mang
let search = arrNumber2.indexOf(6,7);
console.log(search);

let arrNumber3 = [1,2,3,4,5,6,7,8,9];
// viet ham kiem tra xem so 5 co nam trong mang ko ? neu khong thi them no vao giua mang, neu co lay ra tat cac phan tu tu vi do cho den het mang.
let timKiemPhanTuNamTrongMang = (a, arr) => {
	// kiem tra xem a co nam trong mang arr ko?
	let postion = arr.indexOf(a);
	if(postion == -1){
		// ko tim thay
		// tim vi tri nam giua mang
		let middle = Math.ceil(arr.length/2);
		let newArr = [];
		for(let i = 0; i < middle; i++){
			newArr.push(arr[i]);
		}
		newArr.push(a);

		for(let j= middle; j < arr.length; j++){
			newArr.push(arr[j]);
		}

		return newArr;
	} else {
		// tim thay
		let newArr = [];
		for(let i = postion; i < arr.length; i++){
			newArr.push(arr[i]);
		}
		return newArr;
	}

}
let kq = timKiemPhanTuNamTrongMang(5, arrNumber3);
console.log(kq);

// kiem tra co phai mang ko?
if(Array.isArray(kq)){
	console.log('OK')
} else {
	console.log('ERR');
}
let randomNumber = [100,1,7,3,9,23,89,5,8];
// sap xep theo trat tu giam dan hoac tang dan
// randomNumber.sort(function(b, a){
// 	return b - a;
// });
// console.log(randomNumber);

function sapXepMang(arr){
	for(let i = 0; i < arr.length; i++) {
		for(let j = i; j < arr.length; j++){
			if(arr[i] < arr[j]){
				let tg = arr[i];
				arr[i] = arr[j];

				arr[j] = tg;
			}
		}
	}
	return arr;
}
console.log(sapXepMang(randomNumber));
// viet ham tinh trung cong cua so chinh phuong nam trong mang
function kiemTraSoChinhPhuong(number){
	let numberSqrt = Math.sqrt(number);
	if(numberSqrt % 1 == 0){
		return true;
	}
	return false;
}

function tinhTrungBinhCong(arr)
{
	let sum = 0;
	let count = 0;
	for(let i= 0; i < arr.length; i++){
		if(kiemTraSoChinhPhuong(arr[i])){
			sum += arr[i];
			count++;
		}
	}
	return (sum/count);
}

let result = tinhTrungBinhCong(randomNumber);
console.log(result);
// viet de quy tinh giai thua cua 10;
function tinhGiaiThua(n) {
	if(n == 0 || n == 1){
		return 1;
	}

	return tinhGiaiThua(n-1)*n;
	/*
	let gt = 1;
	for(let  i= 1; i <= n; i++){
		gt *= i;
	}
	return gt;
	*/

}
let gt = tinhGiaiThua(10);
console.log(gt);


