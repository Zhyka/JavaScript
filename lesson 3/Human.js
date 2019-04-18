var mass = ['Liam','William','Mason','James','Benjamin','Jacob','Michael','Ethan','Emma','Olivi','Ava','Sophia','Isabella','Charlotte'];

var arr = new Array(100);
arr.fill(0);
	
for (var i in arr) {
	 var human = new Object();
	 var name = Number(Math.floor((mass.length - 1) * Math.random())) 
	human.name = mass[name]  ;
	human.age = Math.floor(1 + (100 - 1) * Math.random()) ;
	human.method = function(){
		console.log('Hi, it is' +' ' + this.name + ' ' + this.age + 'yrs old!' )
	}
	 ;
	arr[i] = human;
}
console.log(arr);


arr.forEach(function(elem){
	elem.method();
})


