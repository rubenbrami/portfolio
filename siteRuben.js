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

var buttonAddMovie = document.getElementById("buttonAddMovie");
buttonAddMovie.onclick = function(){
	var v = document.createElement("FIGURE");
	document.getElementById("CourtsMetrages").appendChild(v);
}

// 22 H 22
var buton22h22 = document.getElementById("miniature_22h22");
var fenetre22h22 = document.getElementById("fenetre22h22");
var croix22h22 = document.getElementById("croix22h22");

buton22h22.onclick = function(){
	fenetre22h22.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
	console.log(body.style.overflow );
}

croix22h22.onclick = function(){
	fenetre22h22.style.display = "none";
	stopVideo(fenetre22h22);
	body.style.overflow = "auto";
	console.log(body.style.overflow );

}


// LES GARS QUI CHERCHENT

var butonLesGarsQuiCherchent = document.getElementById("miniature_LesGarsQuiCherchent");
var fenetreLesGarsQuiCherchent = document.getElementById("fenetreLesGarsQuiCherchent");
var croixLesGarsQuiCherchent = document.getElementById("croixLesGarsQuiCherchent");

butonLesGarsQuiCherchent.onclick = function(){
	fenetreLesGarsQuiCherchent.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixLesGarsQuiCherchent.onclick = function(){
	fenetreLesGarsQuiCherchent.style.display = "none";
	stopVideo(fenetreLesGarsQuiCherchent);
	body.style.overflow = "auto";
}

// VERMILLON

var butonVermillon = document.getElementById("miniatureVermillon");
var fenetreVermillon = document.getElementById("fenetreVermillon");
var croixVermillon = document.getElementById("croixVermillon");

butonVermillon.onclick = function(){
	fenetreVermillon.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixVermillon.onclick = function(){
	fenetreVermillon.style.display = "none";
	stopVideo(fenetreVermillon);
	body.style.overflow = "auto";
}

// HAPPINESS 47

var butonHappiness47 = document.getElementById("miniatureHappiness47");
var fenetreHappiness47 = document.getElementById("fenetreHappiness47");
var croixHappiness47 = document.getElementById("croixHappiness47");

butonHappiness47.onclick = function(){
	fenetreHappiness47.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixHappiness47.onclick = function(){
	fenetreHappiness47.style.display = "none";
	stopVideo(fenetreHappiness47);
	body.style.overflow = "auto";
}


// MINDIE

var butonMindie = document.getElementById("miniatureMindie");
var fenetreMindie = document.getElementById("fenetreMindie");
var croixMindie = document.getElementById("croixMindie");

butonMindie.onclick = function(){
	fenetreMindie.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixMindie.onclick = function(){
	fenetreMindie.style.display = "none";
	stopVideo(fenetreMindie);
	body.style.overflow = "auto";
}


// LOSING FAITH

var butonLosingFaith = document.getElementById("miniatureLosingFaith");
var fenetreLosingFaith = document.getElementById("fenetreLosingFaith");
var croixLosingFaith = document.getElementById("croixLosingFaith");

butonLosingFaith.onclick = function(){
	fenetreLosingFaith.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixLosingFaith.onclick = function(){
	fenetreLosingFaith.style.display = "none";
	stopVideo(fenetreLosingFaith);
	body.style.overflow = "auto";
}


// OPEN SPACE

var butonOpenSpace = document.getElementById("miniatureOpenSpace");
var fenetreOpenSpace = document.getElementById("fenetreOpenSpace");
var croixOpenSpace = document.getElementById("croixOpenSpace");

butonOpenSpace.onclick = function(){
	fenetreOpenSpace.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixOpenSpace.onclick = function(){
	fenetreOpenSpace.style.display = "none";
	stopVideo(fenetreOpenSpace);
	body.style.overflow = "auto";
}




// BLUE INK

var butonBlueInk = document.getElementById("miniatureBlueInk");
var fenetreBlueInk = document.getElementById("fenetreBlueInk");
var croixBlueInk = document.getElementById("croixBlueInk");

butonBlueInk.onclick = function(){
	fenetreBlueInk.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixBlueInk.onclick = function(){
	fenetreBlueInk.style.display = "none";
	stopVideo(fenetreBlueInk);
	body.style.overflow = "auto";
}


// LEGO STAR WARS

var butonLegoStarWars = document.getElementById("miniatureLegoStarWars");
var fenetreLegoStarWars = document.getElementById("fenetreLegoStarWars");
var croixLegoStarWars = document.getElementById("croixLegoStarWars");

butonLegoStarWars.onclick = function(){
	fenetreLegoStarWars.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixLegoStarWars.onclick = function(){
	fenetreLegoStarWars.style.display = "none";
	stopVideo(fenetreLegoStarWars);
	body.style.overflow = "auto";
}


// WALL.E

var butonWallE = document.getElementById("miniatureWallE");
var fenetreWallE = document.getElementById("fenetreWallE");
var croixWallE = document.getElementById("croixWallE");

butonWallE.onclick = function(){
	fenetreWallE.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixWallE.onclick = function(){
	fenetreWallE.style.display = "none";
	stopVideo(fenetreWallE);
	body.style.overflow = "auto";
}


// LEGO RETOUR VERS LE FUTUR

var butonLego3D = document.getElementById("miniatureLego3D");
var fenetreLego3D = document.getElementById("fenetreLego3D");
var croixLego3D = document.getElementById("croixLego3D");

butonLego3D.onclick = function(){
	fenetreLego3D.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixLego3D.onclick = function(){
	fenetreLego3D.style.display = "none";
	stopVideo(fenetreLego3D);
	body.style.overflow = "auto";
}


// CHARLOTTE

var butonCharlotte = document.getElementById("miniatureCharlotte");
var fenetreCharlotte = document.getElementById("fenetreCharlotte");
var croixCharlotte = document.getElementById("croixCharlotte");

butonCharlotte.onclick = function(){
	fenetreCharlotte.style.display= "block";
	stopVideo(bandedemo);
	body.style.overflow = "hidden";
}

croixCharlotte.onclick = function(){
	fenetreCharlotte.style.display = "none";
	stopVideo(fenetreCharlotte);
	body.style.overflow = "auto";
}
