var text= prompt('enter expression');
var res=(check(text));


function check(brackets){ 
var b = 0;   
    for (var i = 0; i <=brackets.length; i++) {

        switch (brackets[i]){
            case '(':
                b++;
                break;
            case ')':
                b--;
                break;    
        }

        if (b < 0){
            b=undefined;
        }
    }       
    return b;
}


if (res===0){
    alert('True');
}
else{
    alert('False');
}
