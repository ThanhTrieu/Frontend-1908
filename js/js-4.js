// dinh nghia object trong js
let person = {
	name: 'Van Teo',
	age: 20,
	gender : 1,
	phone: '2232',
	goToSchool: function(){
		return 'AAASAS';
	},
	diTanGai: (name) => {
		return "love " + name;
	}
};
// truy cap vao thuoc tinh
let myName = person.name;
let myName2 = person['name'];
console.log(myName, myName2);

let girl = person.diTanGai('Thi No')
console.log(girl);

let students = [
	{
		id: 113,
		name: 'Van Teo',
		phone: '121212',
		money: 1213,
		add: 'Ha Noi'
	},
	{
		id: 114,
		name: 'Van Ty',
		phone: '121212',
		money: 1213,
		add: 'Ha Nam'
	},
	{
		id: 115,
		name: 'Thi B',
		phone: '121212',
		money: 1213,
		add: 'Thai Binh'
	}
];
console.log(students[2].name);
// duyet object
// for ... in
let myCar = {name: 'BMW', color: 'white', weight: 500};

for(let i in myCar){
	console.log(i, myCar[i]);
}
// duyet mang students
// for ...in || forEach
for ( let i in students) {
	console.log(students[i].name);
}
console.log(students.length);
//console.log(myCar.length);

let myString = '';
myString += '<table border="1" width="100% ">';
students.forEach( function(el, index) {
	myString += '<tr>';
	myString += '<td>'+ el.name +'</td>';
	myString += '<td>'+ el.phone +'</td>';
	myString += '<td>'+ el.money +'</td>';
	myString += '<td>'+ el.add +'</td>';
	myString += '</tr>';
});
myString += '</table>';
document.write(myString);




