// ---------- ALGEMEEN ---------- \\
// Hamburgermenu
function myFunction() { 
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
	if (!e.target.matches("button")) {
		var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains("show")) {
			myDropdown.classList.remove("show");
		}
	}
};


// ---------- BLOGS.HTML ---------- \\
// Meer lezen button Microsoft
function blogsMeerLezen() {
	var puntjes = document.getElementById("puntjes");
	var meerTekst = document.getElementById("meer");
	var btnTekst = document.getElementById("blogsBtn");

	if (puntjes.style.display === "none") {
		puntjes.style.display = "inline";
		btnTekst.innerHTML = "Klik hier om meer te lezen";
		meerTekst.style.display = "none";
	} else {
		puntjes.style.display = "none";
		btnTekst.innerHTML = "Doe maar wat minder tekst";
		meerTekst.style.display = "inline";
	}
}

// Meer lezen button Pinterest
function blogsMeerLezenFoto() {
	var puntjesFoto = document.getElementById("puntjesFoto");
	var meerTekstFoto = document.getElementById("meerFoto");
	var btnTekstFoto = document.getElementById("blogsBtnFoto");

	if (puntjesFoto.style.display === "none") {
		puntjesFoto.style.display = "inline";
		btnTekstFoto.innerHTML = "Klik hier om meer te lezen";
		meerTekstFoto.style.display = "none";
	} else {
		puntjesFoto.style.display = "none";
		btnTekstFoto.innerHTML = "Doe maar wat minder tekst";
		meerTekstFoto.style.display = "inline";
	}
}

// Meer lezen button Formule 1
function blogsMeerLezenAnalyse() {
	var puntjesAnalyse = document.getElementById("puntjesAnalyse");
	var meerTekstAnalyse = document.getElementById("meerAnalyse");
	var btnTekstAnalyse = document.getElementById("blogsBtnAnalyse");

	if (puntjesAnalyse.style.display === "none") {
		puntjesAnalyse.style.display = "inline";
		btnTekstAnalyse.innerHTML = "Klik hier om meer te lezen";
		meerTekstAnalyse.style.display = "none";
	} else {
		puntjesAnalyse.style.display = "none";
		btnTekstAnalyse.innerHTML = "Doe maar wat minder tekst";
		meerTekstAnalyse.style.display = "inline";
	}
}

// Meer lezen button Front-end Shorts Semantisch
function blogsMeerLezenFeSema() {
	var puntjesFeSema = document.getElementById("puntjesFeSema");
	var meerTekstFeSema = document.getElementById("meerFeSema");
	var btnTekstFeSema = document.getElementById("blogsBtnFeSema");

	if (puntjesFeSema.style.display === "none") {
		puntjesFeSema.style.display = "inline";
		btnTekstFeSema.innerHTML = "Klik hier om meer te lezen";
		meerTekstFeSema.style.display = "none";
	} else {
		puntjesFeSema.style.display = "none";
		btnTekstFeSema.innerHTML = "Doe maar wat minder tekst";
		meerTekstFeSema.style.display = "inline";
	}
}
// Meer lezen button Front-end Shorts JavaScript
function blogsMeerLezenFeJS() {
	var puntjesFeJS = document.getElementById("puntjesFeJS");
	var meerTekstFeJS = document.getElementById("meerFeJS");
	var btnTekstFeJS = document.getElementById("blogsBtnFeJS");

	if (puntjesFeJS.style.display === "none") {
		puntjesFeJS.style.display = "inline";
		btnTekstFeJS.innerHTML = "Klik hier om meer te lezen";
		meerTekstFeJS.style.display = "none";
	} else {
		puntjesFeJS.style.display = "none";
		btnTekstFeJS.innerHTML = "Doe maar wat minder tekst";
		meerTekstFeJS.style.display = "inline";
	}
}

// Meer lezen button Property Position
function blogsMeerLezenFePoPo() {
	var puntjesFePoPo = document.getElementById("puntjesFePoPo");
	var meerTekstFePoPo = document.getElementById("meerFePoPo");
	var btnTekstFePoPo = document.getElementById("blogsBtnFePoPo");

	if (puntjesFePoPo.style.display === "none") {
		puntjesFePoPo.style.display = "inline";
		btnTekstFePoPo.innerHTML = "Klik hier om meer te lezen";
		meerTekstFePoPo.style.display = "none";
	} else {
		puntjesFePoPo.style.display = "none";
		btnTekstFePoPo.innerHTML = "Doe maar wat minder tekst";
		meerTekstFePoPo.style.display = "inline";
	}
}


// Slideshow fotogallerij Rotterdam
var slideIndex = 1;
showDivs(slideIndex);

function plusFig(n) {
	showDivs((slideIndex += n));
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slideShow");
	if (n > x.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
}

// Slideshow fotogallerij Veluwe
var slideIndexVeluwe = 1;
showDivsVeluwe(slideIndexVeluwe);

function plusFigVeluwe(n) {
	showDivsVeluwe((slideIndexVeluwe += n));
}

function showDivsVeluwe(n) {
	var i;
	var x = document.getElementsByClassName("slideShowVeluwe");
	if (n > x.length) {
		slideIndexVeluwe = 1;
	}
	if (n < 1) {
		slideIndexVeluwe = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndexVeluwe - 1].style.display = "block";
}

// Slideshow fotogallerij Veluwe
var slideIndexSchev = 1;
showDivsSchev(slideIndexSchev);

function plusFigSchev(n) {
	showDivsSchev((slideIndexSchev += n));
}

function showDivsSchev(n) {
	var i;
	var x = document.getElementsByClassName("slideShowSchev");
	if (n > x.length) {
		slideIndexSchev = 1;
	}
	if (n < 1) {
		slideIndexSchev = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndexSchev - 1].style.display = "block";
}