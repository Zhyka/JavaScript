var str = '+375 44 745 34 39    +375-44-745-34-39  +375(44)-745-34-39 +375(44)745-34-39 <body>   <p>    <header>  </p> <html> 5-10 Esenina street  1-2 50-30 Masherau avenue   1-17 Korzhenevskogo alley www.google.by  www.gsdfsdfs.by www.gsgsd-gsd.gsfds.by';


//var str=prompt('');

var phone = /\+375\s?\(?\-?[1-7]{2}\)?\s?\-?[1-9][0-9]{2}\-?\s?[0-9]{2}\-?\s?[0-9]{2}/g;
var res1 = str.match(phone);
console.log(res1);

var web = /(www\.[a-z][a-zA-Z0-9\-\.]+\.[a-z]{2,10})/g;
var res2 = str.match(web);
console.log(res2);

var address = /([1-9][0-9]{0,2}\-[1-9][0-9]{0,2}\s[A-Z0-0][a-z0-9]+)\ (street)?(alley)?(avenue)?/g;
var res3 = str.match(address);
console.log(res3);

var teg = /\<\/?[a-z]{1,15}\/?\>/g;
var res4 = str.match(teg);
console.log(res4);