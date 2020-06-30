var bandedemo = document.getElementById('bandeDemo');
var pagePrincipale = document.getElementById("pagePrincipale");
var body = document.getElementsByTagName('BODY')[0];

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

var open = function (title) {
	var fen = document.getElementById("fenetre".concat(title));
	fen.style.display= "block";
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

// 22 H 22
var buton22h22 = document.getElementById("miniature_22h22");
var fenetre22h22 = document.getElementById("fenetre22h22");
var croix22h22 = document.getElementById("croix22h22");

buton22h22.onclick = function(){
	open("22h22");
}

croix22h22.onclick = function(){
	exit("22h22")
}


// LES GARS QUI CHERCHENT

var butonLesGarsQuiCherchent = document.getElementById("miniature_LesGarsQuiCherchent");
var fenetreLesGarsQuiCherchent = document.getElementById("fenetreLesGarsQuiCherchent");
var croixLesGarsQuiCherchent = document.getElementById("croixLesGarsQuiCherchent");

butonLesGarsQuiCherchent.onclick = function(){
	open("LesGarsQuiCherchent");
}

croixLesGarsQuiCherchent.onclick = function(){
	exit("LesGarsQuiCherchent");
}

// VERMILLON

var butonVermillon = document.getElementById("miniatureVermillon");
var fenetreVermillon = document.getElementById("fenetreVermillon");
var croixVermillon = document.getElementById("croixVermillon");

butonVermillon.onclick = function(){
	open("Vermillon");
}

croixVermillon.onclick = function(){
	exit("Vermillon");
}

// HAPPINESS 47

var butonHappiness47 = document.getElementById("miniatureHappiness47");
var fenetreHappiness47 = document.getElementById("fenetreHappiness47");
var croixHappiness47 = document.getElementById("croixHappiness47");

butonHappiness47.onclick = function(){
	open("Happiness47");
}

croixHappiness47.onclick = function(){
	exit("Happiness47");
}


// MINDIE

var butonMindie = document.getElementById("miniatureMindie");
var fenetreMindie = document.getElementById("fenetreMindie");
var croixMindie = document.getElementById("croixMindie");

butonMindie.onclick = function(){
	open("Mindie");
}

croixMindie.onclick = function(){
	exit("Mindie");
}


// OPEN SPACE

var butonOpenSpace = document.getElementById("miniatureOpenSpace");
var fenetreOpenSpace = document.getElementById("fenetreOpenSpace");
var croixOpenSpace = document.getElementById("croixOpenSpace");

butonOpenSpace.onclick = function(){
	open("OpenSpace");
}

croixOpenSpace.onclick = function(){
	exit("OpenSpace");
}

// LOSING FAITH

var butonLosingFaith = document.getElementById("miniatureLosingFaith");
var fenetreLosingFaith = document.getElementById("fenetreLosingFaith");
var croixLosingFaith = document.getElementById("croixLosingFaith");

butonLosingFaith.onclick = function(){
	open("LosingFaith");
}

croixLosingFaith.onclick = function(){
	exit("LosingFaith");
}


// BLUE INK

var butonBlueInk = document.getElementById("miniatureBlueInk");
var fenetreBlueInk = document.getElementById("fenetreBlueInk");
var croixBlueInk = document.getElementById("croixBlueInk");

butonBlueInk.onclick = function(){
	open("BlueInk");
}

croixBlueInk.onclick = function(){
	exit("BlueInk");
}


// LEGO STAR WARS

var butonLegoStarWars = document.getElementById("miniatureLegoStarWars");
var fenetreLegoStarWars = document.getElementById("fenetreLegoStarWars");
var croixLegoStarWars = document.getElementById("croixLegoStarWars");

butonLegoStarWars.onclick = function(){
	open("LegoStarWars");
}

croixLegoStarWars.onclick = function(){
	exit("LegoStarWars");
}


// WALL.E

var butonWallE = document.getElementById("miniatureWallE");
var fenetreWallE = document.getElementById("fenetreWallE");
var croixWallE = document.getElementById("croixWallE");

butonWallE.onclick = function(){
	open("WallE");
}

croixWallE.onclick = function(){
	exit("WallE");
}


// LEGO RETOUR VERS LE FUTUR

var butonLego3D = document.getElementById("miniatureLego3D");
var fenetreLego3D = document.getElementById("fenetreLego3D");
var croixLego3D = document.getElementById("croixLego3D");

butonLego3D.onclick = function(){
	open("Lego3D");
}

croixLego3D.onclick = function(){
	exit("Lego3D");
}


// CHARLOTTE

var butonCharlotte = document.getElementById("miniatureCharlotte");
var fenetreCharlotte = document.getElementById("fenetreCharlotte");
var croixCharlotte = document.getElementById("croixCharlotte");

butonCharlotte.onclick = function(){
	open("Charlotte");
}

croixCharlotte.onclick = function(){
	exit("Charlotte");
}
