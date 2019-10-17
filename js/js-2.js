// dinh nghia ham trong js
// cu phap : function + nameFunction(param...)

function sumNumber(a, b = 5) {
	// tham so truyen vao ham ko can tu khoa khai bao bien dung dang truoc
	return a+b;
	// tu khoa return tra ve ket qua ve cho ham va se thoat khoi ham - cac cau lenh ben duoi se khong duoc thuc thi
}

// goi ham ra su dung
let total = sumNumber(4);
console.log(total);
// viet ham cho biet tu 1 - 100 co bao nhieu so la so nguyen to
// chung ta nen co 2 ham de giai quyet cong viec
// ham thu nhat : kiem tra co phai so nguyen to ko
// ham thu hai : dem co bao nhieu so nguyen to
function kiemTraSoNguyenTo(a){
	if(a <= 1){
		return false;
	}
	if(a == 2){
		return true;
	}

	let flagCheck = true;
	for(let i = 2; i <= Math.sqrt(a); i++){
		if(a % i == 0){
			flagCheck = false;
			break;
		}
	}
	return flagCheck;
}

function demSoNguyenTo(i,j)
{
	let count = 0;
	let number = '';
	for(let k = i; k <= j; k++){
		if(kiemTraSoNguyenTo(k)){
			count++;
			number += (number == '') ? k : ',' + k;
		}
	}
	return number;
}

let snt = demSoNguyenTo(1,100);
console.log(snt);

/////////////////////////////////////////////////////
let kiemTraChanLe = function(number){
	if(number % 2 == 0){
		return true;
	} 
	return false;
}
// ten bien chinh la ten ham
let chk = kiemTraChanLe(10);
if(chk){
	console.log('so chan');
} else {
	console.log('so le')
}
console.log(typeof kiemTraChanLe);

// dinh nghia theo ham vo danh - giai ptbh
let giaiPTBH = function(a,b,c) {
	let delta = b*b - 4*a*c;
}

///////////////////////////////////////////
function tinhDienTichHinhThang(a,b,h) {
	// viet ham tinh tong 2 day
	function sum(){
		return a+b;
	}

	function phepNhan(){
		return sum()*h;
	}

	function phepChia()
	{
		return phepNhan()/2;
	}

	return phepChia();
}

let kq = tinhDienTichHinhThang(4,5,6);
console.log(kq);

///////////////////////////////////////////
// arrow function
let tinhDienTichHinhVuong = (a) => {
	return a*a;
}
let result = tinhDienTichHinhVuong(10);
console.log(result);
// viet ham arrow function tim BSCLN cua 2,3 tu 1-200;
timBoiSCLN = (a,b, i,j) => {
	let max = 0;
	for(let k = i; k <= j; k++){
		if(k % b == 0 && k % a == 0){
			max = k;
		}
	}
	return max;
}

let bsc = timBoiSCLN(20,30, 1,200);
console.log(timBoiSCLN(20,30, 1,200));


////////////////// Doi tuong number ///////////////////////////
/*
let myNumber = '100.2323';
let n = Number.parseInt(myNumber);
console.log(n, typeof(n));

let n1 = prompt('moi nhap so a');
//n1 = Number.parseInt(n1);

let n2 = prompt('mo nhap so b');
//n2 = Number.parseInt(n2);

let n3 = n1 + n2;
//alert(n3);
if(Number.isInteger(n3)){
	console.log('Y');
} else {
	console.log('N');
}

let test = 3/0;
console.log(typeof test);
*/



