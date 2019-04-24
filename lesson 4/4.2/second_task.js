var interval = setInterval(function() {
	var label1 = window.scrollY;
	window.scrollBy(0, 5);
	var label2 = window.scrollY;
	if (label1 >= label2)
		clearInterval(interval);
}, 25)