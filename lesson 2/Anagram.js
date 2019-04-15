
var test1 = prompt('enter the first string');
var test2 = prompt('enter the second string');


function sort(x){
    var str = x.split('');
    str = str.sort();
    str = str.join('');
    return str;
}


var first = sort(test1);
var second = sort(test2);

if (first == second){
    alert('+');
}
    else {alert('-');
}