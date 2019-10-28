// 1 - dom element
// tim phan tu html thong qua id cua no
let title = document.getElementById('title');
console.log(title);
// tim theo class

let title2 = document.getElementsByClassName('title');
console.log(title2[1]);

// tim theo ten the
let title3 = document.getElementsByTagName('h1');
console.log(title3[0]);

// tim theo selector css
let title4 = document.querySelectorAll('.title');
console.log(title4[1] );

// 2 dom Event

// truy cap vao the button
//let myBtn = document.getElementById('clickMe');
// let myBtn = document.getElementsByClassName('btn');
let myBtn = document.getElementsByTagName('button');
// bat su kien cho no
/*
myBtn.onclick = function(){
	alert('Hello you');
}*/

// gan cho no 1 su kien
myBtn[0].addEventListener('click', function(){
	//alert('Hello you');
	let text = document.getElementById('title').innerHTML = 'Learning Java';
	//alert(text);
	let input = document.getElementsByTagName('input');
	//input[0].type = 'button';
	input[0].setAttribute('type','button');

	let box = document.getElementsByClassName('box');
	box[0].style.width = '100px';
	box[0].style.height = '100px';
	box[0].style.border = '3px solid blue';
	box[0].style.backgroundColor = 'pink';
});



let myImg = document.getElementsByTagName('img');
myImg[0].addEventListener('mouseover', function(){
	console.log(this);
	this.width = 500;
	this.height = 500;
});

let btnBom = document.getElementById('bom');
btnBom.addEventListener('click', function(){
	// lay ra kich thuoc khung trinh duyet dang lam viec
	let wBrowser = window.innerWidth;
	let hBrowser = window.innerHeight;

	console.log(wBrowser, hBrowser);

	// mo ra 1 tab moi
	// window.open('https://vnexpress.net', 'VNExpress','width=100px,height=100px');
	
	// reload page
	// window.location.reload(true);
	// tham so true: load lai web tu server (tranh tinh trang load lai web tu cache cua browser)
	
	// dieu huong di sang 1 link web khac
	// window.location.href= "https://vnexpress.net";
	
	// lay ra kich thuoc cua man hinh may tinh nguoi dung dang truy cap vao web
	let wScreen = screen.width;
	let hScreen = screen.height;

	console.log(wScreen, hScreen);
	window.location.href = 'js-event-1.html';
});



















