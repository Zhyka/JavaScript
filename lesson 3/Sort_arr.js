var s = Number(prompt('enter first number'));
var p = Number(prompt('enter the second number'));
var n = 1000;
var max = s + (s * p / 100);
var min = s - (s * p / 100);

var arr = new Array(n);
arr.fill(0);

for(var i in arr){
	arr[i] = Math.floor(min + (max - min) * Math.random());
}

arr.sort(function(a,b){
			
			return b % 10 - a % 10;
})
console.log(arr);


