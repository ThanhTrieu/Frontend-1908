function helloword(name){
	alert('Hello you' + name);
}

function demo(){
	alert('hanh dong thu 2');
}

function myFocus(){
	console.log('su kien focus vua xay ra');
}

function myBlur(){
	console.log('su kien blur vua xay ra');
}

function selectGender(obj){
	//console.log(obj);
	let gender = obj.value;
	console.log(typeof gender);
	gender = Number.parseInt(gender);

	if(gender === 1){
		console.log('ban chon gioi tinh nam');
	} else if(gender === 0){
		console.log('ban chon gioi tinh nu');
	} else {
		console.log('ban chua chon gioi tinh');
	}
}

function getDataText(obj){
	let data = obj.value;
	console.log(data);
}

function myDbClick(){
	console.log('ban vua click 2 lan lien tiep vao con chuot');
}

function errorPage(){
	console.log('khong tai dc trang web');
}

function loadPage(){
	console.log('web dc tai hoan tat');
}

function myKeydown(){
	console.log('tay vua bam xuong ban phim');
}
function myKeypress(){
	console.log('tay dang giu ban phim');
}
function myKeyup(){
	console.log('tay buong khoi ban phim');
}
function myMouseDown(){
	console.log('ban vua bam vao con chuot');
}

function myMouseUp(){
	console.log('ban vua nha chuot ra');
}
function myMouseMove(){
	console.log('chuot vua dc di chuyen');
}
function myMouseOver(obj){
	obj.width= 500;
	obj.height = 500;
}

function myMouseOut(obj){
	obj.width= 50;
	obj.height = 50;
}

function myResetForm(){
	resetForm();
}

function resetForm(){
	console.log('form reset');
}

function myResize(){
	console.log('ban thay doi kich thuoc khung trinh duyet');
}

function mySelectText(){
	console.log('DSDSDSD')
}

window.onbeforeunload = function(){
	return 'exits';
}




















