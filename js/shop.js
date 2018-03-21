var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');
var pic4 = document.getElementById('pic4');
var pic5 = document.getElementById('pic5');
var lb = document.getElementsByClassName('lunbo');
var qt = document.getElementsByClassName('qietu');
var n = 0;
lb[0].onclick = function() {
	pic1.style.display = 'inline-block';
	pic2.style.display = 'none';
	pic3.style.display = 'none';
	pic4.style.display = 'none';
	pic5.style.display = 'none';
	lb[0].style.opacity = '0.3';
	lb[1].style.opacity = '1';
	lb[2].style.opacity = '1';
	lb[3].style.opacity = '1';
	lb[4].style.opacity = '1';
};
lb[1].onclick = function() {
	pic2.style.display = 'inline-block';
	pic1.style.display = 'none';
	pic3.style.display = 'none';
	pic4.style.display = 'none';
	pic5.style.display = 'none';
	lb[1].style.opacity = '0.3';
	lb[0].style.opacity = '1';
	lb[2].style.opacity = '1';
	lb[3].style.opacity = '1';
	lb[4].style.opacity = '1';
};
lb[2].onclick = function() {
	pic3.style.display = 'inline-block';
	pic2.style.display = 'none';
	pic1.style.display = 'none';
	pic4.style.display = 'none';
	pic5.style.display = 'none';
	lb[2].style.opacity = '0.3';
	lb[1].style.opacity = '1';
	lb[0].style.opacity = '1';
	lb[3].style.opacity = '1';
	lb[4].style.opacity = '1';
};
lb[3].onclick = function() {
	pic4.style.display = 'inline-block';
	pic2.style.display = 'none';
	pic3.style.display = 'none';
	pic1.style.display = 'none';
	pic5.style.display = 'none';
	lb[3].style.opacity = '0.3';
	lb[1].style.opacity = '1';
	lb[2].style.opacity = '1';
	lb[0].style.opacity = '1';
	lb[4].style.opacity = '1';
};
lb[4].onclick = function() {
	pic5.style.display = 'inline-block';
	pic2.style.display = 'none';
	pic3.style.display = 'none';
	pic4.style.display = 'none';
	pic1.style.display = 'none';
	lb[4].style.opacity = '0.3';
	lb[1].style.opacity = '1';
	lb[2].style.opacity = '1';
	lb[3].style.opacity = '1';
	lb[0].style.opacity = '1';
};
qt[1].onclick = function() {
	n++;
	if(n % 5 === 4) {
		pic5.style.display = 'inline-block';
		pic2.style.display = 'none';
		pic3.style.display = 'none';
		pic4.style.display = 'none';
		pic1.style.display = 'none';
		lb[4].style.opacity = '0.3';
		lb[1].style.opacity = '1';
		lb[2].style.opacity = '1';
		lb[3].style.opacity = '1';
		lb[0].style.opacity = '1';
	} else if(n % 5 === 0) {
		pic1.style.display = 'inline-block';
		pic2.style.display = 'none';
		pic3.style.display = 'none';
		pic4.style.display = 'none';
		pic5.style.display = 'none';
		lb[0].style.opacity = '0.3';
		lb[1].style.opacity = '1';
		lb[2].style.opacity = '1';
		lb[3].style.opacity = '1';
		lb[4].style.opacity = '1';
	} else if(n % 5 === 1) {
		pic2.style.display = 'inline-block';
		pic1.style.display = 'none';
		pic3.style.display = 'none';
		pic4.style.display = 'none';
		pic5.style.display = 'none';
		lb[1].style.opacity = '0.3';
		lb[0].style.opacity = '1';
		lb[2].style.opacity = '1';
		lb[3].style.opacity = '1';
		lb[4].style.opacity = '1';
	} else if(n % 5 === 2) {
		pic3.style.display = 'inline-block';
		pic2.style.display = 'none';
		pic1.style.display = 'none';
		pic4.style.display = 'none';
		pic5.style.display = 'none';
		lb[2].style.opacity = '0.3';
		lb[1].style.opacity = '1';
		lb[0].style.opacity = '1';
		lb[3].style.opacity = '1';
		lb[4].style.opacity = '1';
	} else if(n % 5 === 3) {
		pic4.style.display = 'inline-block';
		pic2.style.display = 'none';
		pic3.style.display = 'none';
		pic1.style.display = 'none';
		pic5.style.display = 'none';
		lb[3].style.opacity = '0.3';
		lb[1].style.opacity = '1';
		lb[2].style.opacity = '1';
		lb[0].style.opacity = '1';
		lb[4].style.opacity = '1';
	}
}
qt[0].onclick = function() {
	n++;
	if(n % 5 === 1) {
		pic5.style.display = 'inline-block';
		pic2.style.display = 'none';
		pic3.style.display = 'none';
		pic4.style.display = 'none';
		pic1.style.display = 'none';
		lb[4].style.opacity = '0.3';
		lb[1].style.opacity = '1';
		lb[2].style.opacity = '1';
		lb[3].style.opacity = '1';
		lb[0].style.opacity = '1';
	} else if(n % 5 === 0) {
		pic1.style.display = 'inline-block';
		pic2.style.display = 'none';
		pic3.style.display = 'none';
		pic4.style.display = 'none';
		pic5.style.display = 'none';
		lb[0].style.opacity = '0.3';
		lb[1].style.opacity = '1';
		lb[2].style.opacity = '1';
		lb[3].style.opacity = '1';
		lb[4].style.opacity = '1';
	} else if(n % 5 === 4) {
		pic2.style.display = 'inline-block';
		pic1.style.display = 'none';
		pic3.style.display = 'none';
		pic4.style.display = 'none';
		pic5.style.display = 'none';
		lb[1].style.opacity = '0.3';
		lb[0].style.opacity = '1';
		lb[2].style.opacity = '1';
		lb[3].style.opacity = '1';
		lb[4].style.opacity = '1';
	} else if(n % 5 === 3) {
		pic3.style.display = 'inline-block';
		pic2.style.display = 'none';
		pic1.style.display = 'none';
		pic4.style.display = 'none';
		pic5.style.display = 'none';
		lb[2].style.opacity = '0.3';
		lb[1].style.opacity = '1';
		lb[0].style.opacity = '1';
		lb[3].style.opacity = '1';
		lb[4].style.opacity = '1';
	} else if(n % 5 === 2) {
		pic4.style.display = 'inline-block';
		pic2.style.display = 'none';
		pic3.style.display = 'none';
		pic1.style.display = 'none';
		pic5.style.display = 'none';
		lb[3].style.opacity = '0.3';
		lb[1].style.opacity = '1';
		lb[2].style.opacity = '1';
		lb[0].style.opacity = '1';
		lb[4].style.opacity = '1';
	}
}
var m = 1;
var timer = null;
var ban = document.getElementById('s-banner');
timer = setInterval(function() {
	m > 4 ? m = 0 : null;
	lb[m].click();
	++m;

}, 5000);
ban.onmouseout = function() {
	timer = setInterval(function() {
		m > 4 ? m = 0 : null;
		lb[m].click();
		++m;
	}, 5000);
}
ban.onmousemove = function() {
	clearInterval(timer);
}