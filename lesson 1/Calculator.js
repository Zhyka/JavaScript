var a,b,c,res;
a = Number(prompt('enter the first number'));
b = prompt('enter + , -,* or /');
c = Number(prompt('enter the second number'));
switch (b){
	case '+':
		res=a+c;
		break;
	case '-':
		res=a-c;
		break;
	case '*':
		res=a*c;
		break;
	case '/':
		res=a/c;
		break;
	default:
		alert('error');
}
alert(res);

