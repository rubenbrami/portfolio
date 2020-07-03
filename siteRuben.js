var bandedemo = document.getElementById('bandeDemo');
var pagePrincipale = document.getElementById("pagePrincipale");
var body = document.getElementsByTagName('BODY')[0];

window.onscroll = function() {myFunction()};
var header = document.getElementById("ligne-boutons");
var sticky = header.offsetTop;

function myFunction(){
	if(window.pageYOffset > sticky){
		header.classList.add("sticky");
	}
	else{
		header.classList.remove("sticky");
	}
}


var stopVideo = function ( element ) {
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) {
        video.pause();
    }
};

var titles = ["22h22", "LesGarsQuiCherchent", "Vermillon", "Happiness47", "Mindie", "MarionValentineTomWalker", "OpenSpace", "BlueInk", "LosingFaith", "LegoStarWars", "WallE", "Lego3D", "Charlotte"]; 

var open = function (title) {
	var fen = document.getElementById("fenetre".concat(title));
	
	fen.style.display= "block";

	// Les quatre prochaines lignes pour que le scroll se réinitialise à chaque ouverture de fenêtre.

	var zoneText = fen.childNodes[3].childNodes[1];
	var zoneASavoir = fen.childNodes[5].childNodes[5];
	zoneText.scrollTo(0,0);
	zoneASavoir.scrollTo(0,0);

	stopVideo(bandedemo);
	body.style.overflow = "hidden";
	console.log(body.style.overflow );
}

var exit = function (title) {
	var fen = document.getElementById("fenetre".concat(title));
	fen.style.display = "none";
	stopVideo(fen)
	body.style.overflow = "auto";
	console.log(body.style.overflow );
};

var useWindow = function (title) {
	var button = document.getElementById("miniature".concat(title));
	var croix = document.getElementById("croix".concat(title));
	
	button.onclick = function(){
		open(title);
	}

	croix.onclick = function(){
		exit(title);
	}
}


for (var i =0; i< titles.length ; i++ ){
	useWindow(titles[i]);
}
