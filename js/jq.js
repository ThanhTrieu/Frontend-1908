$(document).ready(function() {
	// cho doi cac ma html/css duoc load xong day du roi moi thuc thi cac ma lenh JQ
	// vi JQ can phai co DOM HTML that de thao tac - nen can cho doi HTML va CSS thuc thi xong truoc
	// sau nay cac ma code viet theo JQ thi en viet o trong ham nay.
	// ham khoi tao cua JQ
	
	// $ = jQuery : keyword
	let btn = $('#btn');
	//console.log(btn);
	
	btn.click(function(){
		//alert('Hello');
		let id = $('h1').attr('id');
		let id2 = $('h1').prop('id');
		console.log(id, id2);

		$('button[name="btn-primary"]').prop('disabled', true);

		// xoa width va height cua image
		$('img').removeAttr('width');
		$('img').removeAttr('height');

		/*
		if($('#box').hasClass('box')){
			$('#box').removeClass('box');
		} else {
			$('#box').addClass('box');
		}
		*/
	  $('#box').toggleClass('box');
	}); 



	let myBtn = document.getElementsByTagName('button');
	myBtn[1].addEventListener('click', function(){
		alert('123');
	});
	// $('button[name="btn-primary"]').click(function(){
	// 	alert('Hello');
	// });
	

	$('input[name="user"]').keyup(function() {
		let data = $(this).val().trim();
		 // $(this) : chinh la the input dang thao tac
		 // .val() : lay ra du lieu trong o text
		 // .trim() : xoa khoang trang 2 dau
		 $('p.info').text(data);
		 // gan du lieu vao the p
		 
		 // to mau cho div.content
		 // css don - single css
		// $('div.content').css('background-color', 'yellow');
		// multi css
		$('div.content').css({
			backgroundColor: 'yellow',
			borderRadius: '20px'
		});

		let wContent = $('div.content').width();
		let hContent = $('div.content').height();
		console.log(wContent, hContent);
		$('img').width(600);
		$('img').height(600);

		let wInC =  $('div.content').innerWidth();
		let hInC = $('div.content').innerHeight();
		console.log(wInC, hInC);
	});

	// su kien click button 3
	$('#btn-3').click(function(){
		$('ul li').eq(0).css('color', 'blue');

		if($('input[name="agree"]').is(':checked')){
			console.log('ban da tich chon');
		} else {
			console.log('ban chua tich chon');
		}

		$('div.container').find('div.child-1 > div.child-2 h2').css('color', 'red');

		$('div.container').next().next().css({
			width: '200px',
			height: '200px',
			backgroundColor: 'blue'
		});

		$('div.container').prev().prev().css({
			width: '200px',
			height: '200px',
			backgroundColor: 'red'
		});

		let dt = $('h3').text();
		let dt2 = $('h3').html();
		console.log(dt, dt2);
		$('h3').html('Sap ket thuc roi');
		$('h3').empty();
		// empty : xoa noi dung trong the
		$('h3').remove();
		// remove: xoa ca the do


		//$('#my-box').fadeOut(5000);
		// $('#my-box').hide(5000);
		// $('#my-box').slideUp(5000);
		//$('#my-box').slideToggle(5000);
		$('#my-box').fadeToggle(5000);
	});

	$('#btn-4').click(function(){
		//$('#my-box').fadeIn(5000);
		//$('#my-box').show(5000);
		$('#my-box').slideDown(5000);
	});

	$('#keyboard').keyup(function(event) {
		//let key = event.which;
		//console.log(key);
		let self = $(this);
		let input = self.val().trim();
		if(!$.isNumeric(input)){
			alert('vui long nhap so');
			self.val('');
		}
	});
});










