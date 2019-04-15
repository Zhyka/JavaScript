var arr = prompt('enter arr');
var str = arr.split(' ');
 
var col = 0;
var sum = 0;
	for (var i = 0;i<str.length;i++){
		var a = Number(str[i]);
		if (a % 3 == 0){
			col++;
			sum = sum + a; 
		}
	}
alert('sum'+' ' + sum);
alert('col'+ ' ' + col);