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



















