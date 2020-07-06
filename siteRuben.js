var bandedemo = document.getElementById('bandeDemo');
var pagePrincipale = document.getElementById("pagePrincipale");
var body = document.getElementsByTagName('BODY')[0];

var typeVideo = [ "court-métrage",
			 	  "court-métrage",
			 	  "court-métrage",
			      "court-métrage",
			      "court-métrage",
			      "danse",
			      "clip",
			      "clip",
			      "clip",
			 	  "stop-motion",
			 	  "3d",
			 	  "3d",
			 	  "reportage"
				] 

var color = ["#a5cfc3", //22h22;
			 "#4084b8", //Les gars qui cherchent
			 "#ffbf00", //Vermillon
			 "#fce232", //Happiness 47
			 "#2bf1ff", //Mindie
			 "#b4d5fa", //Marion et Valentine - Tom Walker
			 "#cf0e0e", //Open Space
			 "#03336e", //BlueInk
			 "#e8d6b3", //Losing Faith
			 "#c42f02", //Lego Star Wars
			 "#C48C6C", //WallE
			 "#ff3838", //Lego Retour vers le futur
			]

var titles = [ "22h22",
			   "LesGarsQuiCherchent",
			   "Vermillon",
			   "Happiness47",
			   "Mindie",
			   "MarionValentineTomWalker",
			   "OpenSpace",
			   "BlueInk",
			   "LosingFaith",
			   "LegoStarWars",
			   "WallE",
			   "Lego3D",
			   "Charlotte"
			]; 


var titleTexts = [ "22:22",
					"LES GARS QUI CHERCHENT",
					"Vermillon",
					"HAPPINESS 47",
					"MINDIE",
					"Danse sur 'Leave a Light On'",
					"OPENSPACE",
					"Blue Ink",
					"Losing Faith",
					"Lego Star Wars",
					"Bande annonce WALL-E",
					"Lego Retour vers le futur",
					"Mise en valeur de la filière IMAC"
				];

var resumes = [ "C'est l'histoire de deux types sur un banc et...",
			   "Quatre amis enquêtent sur la disparition d'Alice.",
			   "Un peintre aux grandes ambitions entretient des relations particulières avec son entourage artistique.",
			   "Grâce au Happinnes 47, vivre devient un plaisir !",
			   "Que s'est-il passé? Où est Mindie..?",
			   "Vidéo de danse sur la musique de Tom Walker",
			   "Clip musical réalisé par Mobiusvisio et Fromage Fondu",
			   "Clip musical",
			   "Clip musical",
			   "Il y a bien longtemps dans une galaxie (en briques) très lointaine",
			   "Animation After Effects inspirée du film Disney Pixar.",
			   "Projet réalisé sur Blender inspirée de Robert Zemeckis.",
			   "Vidéos promotionnelles pour ma formation d'ingénieur."
			];

var tab_roles = [ ["Réalisateur", "Co-scénariste", "Storyboardeur", "Co-monteur"],
				  ["Co-réalisateur", "Co-scénariste", "Storyboardeur", "Monteur", "Étalonneur", "Effets visuels"],
				  ["Co-scénariste", "Assistant réalisatrice", "Mixage son"],
				  ["Co-scénariste", "Cadreur"],
				  ["Réalisateur", "Storyboardeur", "Cadreur", "Directeur Photo"],
				  ["Storyboardeur", "Réalisateur", "Monteur"],
				  ["Assistant plateau"],
				  ["Réalisateur", "Cadreur"],
				  ["Réalisateur", "Storyboardeur", "Cadreur", "Monteur"],
				  ["J'ai réalisé ce projet seul"],
				  ["J'ai réalisé ce projet seul"],
				  ["Un peu de tout"],
				  [" J'ai réalisé le montage de cette vidéos et d'une autre. Les autres ont été montées par mes camarades. Les tournage se faisaient tout le temps à quatre."] 
				]

var dates = [ "Fait entre octobre et décembre 2019 (pour la version originale).", // 22h22
			  "Fait entre 2018 et 2020.",										  // Les gars qui chechent
			  "Fait entre le 22 et le 24 novembre 2019.",						  // Vermillon
			  "Fait entre avril et mai 2019",									  // Happiness 47
			  "Fait en décembre 2018.",											  // Mindie
			  "Fait en juin 2020",												  // Marion et Valentine - Tom Walker
			  "Fait en février 2020.",											  // Open Space
			  "Fait entre 07h34 et 07h38 du février 2016.",						  // Blue Ink
			  "Fait en décembre 2015.",											  // Losing Faith
			  "Fait en aout 2018",												  // Lego Star Wars
			  "Fait avec amour en juin 2019.",									  // WallE
			  "Fait entre novembre 2019 et janvier 2020.",					      // Lego Retour vers le futur
			  "Fait en 2019/2020"												  // Charlotte
			]

var acteurs = [ ["Antonin Dobrowolska", "Lou Montagne", "Hugo Manchon"], 												// 22h22
				["Antonin Dobrowolska", "Johan Boyer", "Josselin Baillarguet", "Douglas Cleuvenot", "Marie Lazovic"],   // Les gars qui cherchent
				["Johan Boyer", "Roxane Vallée", "Thomas Geslin", "Valentine Bertoli"],									// Vermillon
				["Johan Boyer", "Mathilde Béguin", "Nicolas Huan"],														// Happiness 47
				["Cyril Lebrun", "Mandé Tiéoulé Sidibé", "Bruno Ribuot-Hirsch"],										// Mindie
				["Marion Caby", "Valentine Caby"],																		// Marion et Valentine - Tom Walker
				["Train Fantôme"],																						// Open space
				["Benjamin Aigle"],																						// Blue Ink
				["Benjamin Aigle"],																						// Losing Faith
				null,																									// Lego Star Wars
				null,																									// WallE
				["Pierre Labendzki"],																					// Lego Retour vers le futur
				["Cyrielle Lassarre", "Clélie Chassignet", "Sarah Veysset"]												// Charlotte
			  ]

var acteursClip = [ null, 								//22h22
					null, 								//Les gars qui cherchent
					null,								//Vermillon
					null,								//Happiness 47
					null,								//Mindie
					null,								//Marion et Valentine - Tom Walker
					null,								//Open Space
					null,								//Blue Ink
					["Benjamin Aigle", "Tara Melliti"], //Losing Faith
					null,								//Lego Star Wars
					null,								//WallE
					null,								//Lego Retour vers le futur
					null,								//Charlotte
				  ]

var equipe = [ ["Yoann Kœppel", "Barbara Guyonneau", "Pierre Labendzki", "Jules Fouchy"],
			   ["Clément Delaneau", "Benjamin Aigle"],
			   ["Océante Riosset", "Élisa Ciavaldini", "Victor Julien","Johan Boyer", "Thomas Geslin", "Cyrielle Lassarre", "Valentine Bertoli", "Roxane Vallée", "Sarah Veysset"],
			   ["Johan Boyer", "Élisa Ciavaldini", "Océane Riosset", "Roxane Vallée", "Line Rathonie", "Nina de Castro"],
			   ["Margaux Séguy", "Victorine Maurel", "Line Rathonie"],
			   ["Salomé Brami", "Marion Caby", "Valentine Caby"],
			   ["Victor Julien", "Elisa Ciavaldini", "Johan Boyer", "Thomas Geslin", "Roxane Vallée", "Sarah Veysset", "Océane Riosset"],
			   ["Clément Delaneau"],
			   ["Clément Delaneau", "Jean Morterol", "Le centre artistique de Croix de Chavaux"],
			   null,
			   null,
			   null,
			   null
			 ]

var roles_equipe = [ [["Directeur artistique", "Étalonnage"], ["Directrice de casting", "Son"], ["Co-scénariste", "Mixage son"], ["Cadreur", "Co-monteur"]],
				   	 [["Co-scénariste", "Co-réalisateur"], ["Compositeur"]],
				   	 [["Réalisatrice"], ["Directrice artistique", "Assistante réalisatrice", "Monteuse"], ["Co-scénariste", "Cadreur", "Étalonneur", "Monteur"], ["Co-scénariste"], ["Cadreur", "Monteur", "Décorateur"],["Cadreuse", "Monteuse"], ["Décoratrice", "Ingénieure du son"], ["Décoratrice", "Ingénieure du son"], ["Cadreuse"]],
				   	 [["Réalisateur", "Co-scénariste", "Accessoiriste", "Effets spéciaux"], ["Étalonneuse", "Co-monteuse"], ["Son", "Co-monteuse"], ["Son"], ["Scripte"], ["Compositrice"]],
				   	 [["Scénariste","Ingénieur son", "Animation"], ["Décors", "Accessoires", "Clapman","Derushage","Montage"],["Directrice de Casting", "Perchman", "Étalonnage"]],
				   	 [["Assistante plateau"], ["Chorégraphe"],["Chorégraphe"]],
				   	 [["Cadre", "Post-production"],["Directrice artistique"], ["Cadre"], ["Lumières", "Cadre", "Post-production"], ["Assistante plateau"], ["Assistante plateau"], ["Photographie plateau"]],
				   	 [["Aide technique"]],
				   	 [[""],[""],[""]],
				   	 null,
				   	 null,
				   	 null,
				   	 null
				   ]

var liens = ["A0-hgtOAREM", // 22h22
			 "Q-GASCxS1iM", // Les gars qui cherchent
			 "UXoapXolJbY", // Vermillon
			 "L9t02tSpiYQ", // Happiness 47
			 "9M_Pmma6YAU", // Mindie
			 "yDMjCwK2H-4", // Marion et Valentine - Tom Walker
			 "lwkfT4aIk0o", // Open Space
			 "Hak7oULPcF0", // Blue Ink
			 "p5zc_q30wT0", // Losing Faith
			 "ZNglNQyiHqw", // Lego Star Wars
			 "ym5MWsf1-S4", // WallE
			 "4lVeG4WtO9s", // Lego Retour vers le futur
			 "af8ygaNFM9I" // Charlotte
			];

var liensBouton = [ null, // 22h22
   					null, // Les gars qui cherchent
   					null, // Vermillon
   					null, // Happiness 47
   					null, // Mindie
   					null, // Marion et Valentine - Tom Walker
   					null, // Open Space
   					null, // Blue Ink
   					null, // Losing Fait
   					null, // Lego Star Wars
   					null, // WallE
   					null, // Lego Retour vers le futur
   					"https://www.ingenieur-imac.fr/realisations/mise-en-valeur-de-la-filiere-imac-au-travers-de-videos" // Charlotte
				  ]

var descriptifASavoirS = ["22h22 a gagné trois prix sur cinq lors de la cérémonie des films des IMACs (mon école d'ingénieur) : meilleur scénario, meilleure interprétation dans un premier rôle (pour Antonin Dobrowolska) et meilleur film.<br><br>Il en existe deux versions. La version originale présentée ici et une version redoublée. Bien que la version doublée soit supérieure techniquement je trouve qu'elle perd une partie de son dynamisme. Vous pouvez accéder à la version doublée dans la description de la vidéo sur YouTube.<br><br>Le film a été réalisé en deuxième année d'IMAC pour la matière Pratique vidéo. Il fallait réaliser un film de moins de dix minutes et on a obtenu la note de 17/20.",
						  "Le film étant encore en post-production, voici présenté un extrait. Le film entier durera 39 minutes.<br><br>C'est un film à suspense qui a nécessité dix jours de tournage. L'abandon et le remplacement de l'acteur d'un des personnages a fortement perturbé la production mais m'a appris à rebondir en cas d'imprévus.",
						  "<em>Vermillon</em> a été entièrement réalisé en 48h (et pas une de plus !) pendant les 48h du court-métrage (organisés par l'association audiovisuelle 803Z). Il a gagné le prix de la meilleur direction artistique et a manqué celui du public à une voix près (ça peut être sympa de le préciser ;).<br><br>Le film, en plus d'être réalisé en deux jours devait respecter des contraintes. Devaient apparaître : un plan dans un miroir, un personnage parlant une langue étrangère, une phrase à double sens sexuel, un plan dans l'enceinte de l'établissement scolaire (l'université Gustave Eiffel).",
						  "Ce film a été réalisé dans le cadre du concours de court-métrage organisé par le CROUS chaque année. Nous avons gagné avec deux autres films les selections régionales et avons pu concourir à la finale nationale où nous avons malheusement perdu.<br><br>Le thème du film était : <em>La révolution</em> et il ne devait pas dépasser cinq minutes.",
						  "Ce film a été fait pour la matière Pratique vidéo en première année de l'IMAC (mon école d'ingénieur). Il fallait réaliser un court-métrage de moins de cinq minutes et mes camarades et moi ont obtenu la note de 14/20.",
						  "La production de cette vidéo fut très perturbée par la crise sanitaire mais reste néanmoins un très bon souvenir pour toute l'équipe.<br><br>Elle représente ma première vidéo éditée entièrement à l'aide du logiciel DaVinci Resolve.",
						  "Ce clip a été tourné en deux heures dans un studio à Montreuil. Le défi était difficile car nous avions peu de temps mais très agréable.<br>J'ai beaucoup aimé apporter mon aide à cette équipe plus que motivée.",
						  "Ce clip a été filmé avec un iPhone 6 en 60 images par secondes et remis en 30 pour coller à l'aspect envoutant du morceau. Il n'a nécessité qu'une prise intégrale car il fallait que le soleil se lève pendant le morceau.",
						  "Nous avons tourné <em>Losing Faith</em> en deux tableaux. Étant débutants à l'époque les scènes de piano on pris trois jours à tourner tandis que celles avec Tara une heure. Le hangars était peuplé d'artistes de rue; l'expérience fut très agréable.",
						  "Animation en stop motion montée avec le logiciel Wireframe.",
						  "Cette animation a été réalisée intégralement avec le lociel Adobe After Effects lors du cours du même nom de mon école d'ingénieur IMAC.<br>Il fallait réaliser une publicité d'au moins trente secondes à l'aide du logiciel d'Adobe. J'ai choisi de réaliser une bande annonce du film <em>WALL-E</em> de Disney Pixar et j'ai obtenu 15/20. Mon tord a été de sur-estimer la puissance graphique de mon ordinateur qui supportait mal la 3D. L'animation de WALL-E a été faite à l'aveugle d'où les beugs esthétiques.",
						  "Ce film a été entièrement modélisé, texturé et animé sous Blender 2.8 pour la matière Réalisation 3D de mon école d'ingénieur. L'idée était de reproduire des pièces de la marque Lego aussi réalistes que possible. La consigne nous interdisait de mettre de la musique. Nous avons choisi d'inclure un extrait sonore du film ainsi que des bruits de lego pour un peu plus immerger le spectateur dans cette illusion.<br><br>Nous précisons qu'aucun modèle 3D n'a été utilisé. Tout a été modélisé à la main et monté suivant les instructions du manuel disponible dans la boîte Lego numéro 21103.",
						  "Tous les ans notre formation organise pour les deuxième années un projet tuteuré par un professionnel. Le nôtre était de promouvoir notre filière d'ingénieur IMAC. Pour ce faire nous sommes allées en entreprise rencontrer des anciens étudiants devenus professionnels. Si l'entreprise ne pouvait nous accueillir nous invitions la personne à répondre à nos questions lors d'interviews.<br>Nous sommes très fiers de ce projet qui a obtenu le coup de cœur du jury."
						 ] 

for(var a = 0; a<titles.length; a++){
	type = typeVideo[a];
	colortxt = color[a];
	title = titles[a];
	titleText = titleTexts[a];
	resume =resumes[a];
	tab_role = tab_roles[a];
	console.log(tab_role);
	date = dates[a];
	tab_acteurs = acteurs[a];
	tab_acteurs_clip = acteursClip[a];
	tab_equipe = equipe[a];
	tab_roles_equipe = roles_equipe[a];
	lien = liens[a];
	lienBouton = liensBouton[a];

	descriptifASavoir = descriptifASavoirS[a];

	let fenetre = document.createElement('div');
	fenetre.setAttribute('class','fenetre');
	fenetre.setAttribute('id','fenetre'.concat(title));
	fenetre.setAttribute('style','display:none; position:fixed; top:0; left:0;');

	let zoneDeCroix = document.createElement('div');
	zoneDeCroix.setAttribute('class','zoneDeCroix');

	let croix = document.createElement('img');
	croix.setAttribute('class','croix');
	croix.setAttribute('id','croix'.concat(title));
	croix.setAttribute('src','croix.png');

	zoneDeCroix.append(croix);
	fenetre.append(zoneDeCroix);

	let zoneDeTexte = document.createElement('div');
	zoneDeTexte.setAttribute('class','zoneDeTexte');

	let cadreDeTexte = document.createElement('div');
	cadreDeTexte.setAttribute('class','cadreDeTexte');

	let titre = document.createElement('h2');
	titre.setAttribute('class','titre');
	titre.setAttribute('id','titre'.concat(title));
	titre.style.color = colortxt;
	titre.textContent = titleText;

	let hr1 = document.createElement('hr');
	hr1.setAttribute('width','70%');

	let texteDescriptifResume = document.createElement('p');
	texteDescriptifResume.setAttribute('class','texteDescriptif');
	texteDescriptifResume.setAttribute('id','resume');
	texteDescriptifResume.textContent = resume;

	let hr2 = document.createElement('hr');
	hr2.setAttribute('width','70%');

	let texteDescriptifMesRoles = document.createElement('p');
	texteDescriptifMesRoles.setAttribute('class','texteDescriptif');
	texteDescriptifMesRoles.setAttribute('id','mes_roles');
	texteDescriptifMesRoles.textContent = "Mes rôles :";

	let roles = document.createElement('ul');
	roles.setAttribute('class','roles');
	for(var i = 0; i<tab_role.length; i++){
		let role = document.createElement('li');
		role.setAttribute('class','role');
		role.textContent = tab_role[i];
		roles.append(role);
	}
	let aHref = document.createElement('a');
	if(lienBouton!=null){		
		aHref.setAttribute('href', 'https://www.ingenieur-imac.fr/realisations/mise-en-valeur-de-la-filiere-imac-au-travers-de-videos');
		let button = document.createElement('button');
		button.textContent = "Voir le projet en cliquant ici !";
		aHref.append(button);
	}

	let hr3 = document.createElement('hr');
	hr3.setAttribute('width','95%');

	let texteDescriptifDate = document.createElement('p');
	texteDescriptifDate.setAttribute('class','texteDescriptif');
	texteDescriptifDate.setAttribute('id','date');
	texteDescriptifDate.textContent = date;

	let texteDescriptifAvec = document.createElement('p');
	texteDescriptifAvec.setAttribute('class','texteDescriptif');
	texteDescriptifAvec.setAttribute('id','avec');
	if(type === "court-métrage"){
		texteDescriptifAvec.textContent = "Avec :";
	}
	else if(type === "danse"){
		texteDescriptifAvec.textContent = "Avec :";
	}
	else if (type === "clip"){
		texteDescriptifAvec.textContent = "Morceau écrit et composé par :";
	}
	else if(type === "stopVideo"){
		texteDescriptifAvec.textContent = "Projet réalisé avec :";
	}
	else if(type === "3d"){
		texteDescriptifAvec.textContent = "Projet réalisé avec :";
	}
	else if(type === "reportage"){
		texteDescriptifAvec.textContent = "Projet réalisé avec :";
	}
	let roles2 = document.createElement('ul');
	roles2.setAttribute('class','roles');

	if(tab_acteurs != null){
		for(var i = 0; i<tab_acteurs.length; i++){
			let role = document.createElement('li');
			role.setAttribute('class','role');
			role.textContent = tab_acteurs[i];
			roles2.append(role);
		}
	}
	let texteDescriptifAvec2 = document.createElement('p');
	let roles25 = document.createElement('ul');
	if(tab_acteurs_clip != null){
		texteDescriptifAvec2.setAttribute('class','texteDescriptif');
		texteDescriptifAvec2.setAttribute('id','avec');
		texteDescriptifAvec2.textContent = "Avec :";
		
		roles25.setAttribute('class','roles');
		for(var i = 0; i<tab_acteurs_clip.length; i++){
			let role = document.createElement('li');
			role.setAttribute('class','role');
			role.textContent = tab_acteurs_clip[i];
			roles25.append(role);
		}
	}

	let texteDescriptifEquipeTechnique = document.createElement('p');
	texteDescriptifEquipeTechnique.setAttribute('class','texteDescriptif');
	texteDescriptifEquipeTechnique.setAttribute('id','equipeTechnique');
	texteDescriptifEquipeTechnique.textContent = "Équipe technique :";

	let roles3 = document.createElement('ul');
	roles3.setAttribute('class','roles');
	if(tab_equipe != null){
		for(var i = 0; i<tab_equipe.length; i++){
			let role = document.createElement('li');
			role.setAttribute('class','role');
			role.textContent = tab_equipe[i];

			let slash = document.createElement('span');
			slash.setAttribute('class','slash'.concat(title));
			slash.style.color = colortxt;
			slash.textContent = " - ";

			role.append(slash);
			for(var j = 0; j<tab_roles_equipe[i].length; j++){
				role.innerHTML += tab_roles_equipe[i][j];
				slash.textContent ="/";
				role.appendChild(slash);
			}
			role.removeChild(role.lastElementChild);
			roles3.append(role);
		}
	}
	cadreDeTexte.append(titre,hr1,texteDescriptifResume,hr2,texteDescriptifMesRoles,roles,lienBouton != null ? aHref : "",hr3,texteDescriptifDate,  tab_acteurs!=null ? texteDescriptifAvec : "",  tab_acteurs!=null ? roles2 : "", tab_acteurs_clip != null ? texteDescriptifAvec2 : "", tab_acteurs_clip != null ? roles25 : "", tab_equipe != null ? texteDescriptifEquipeTechnique : "", tab_equipe != null ? roles3 : "");
	zoneDeTexte.append(cadreDeTexte);
	fenetre.append(zoneDeTexte);


	let zoneDeVideo = document.createElement('div');
	zoneDeVideo.setAttribute('class','zoneDeVideo');

	let cadreDeVideo = document.createElement('div');
	cadreDeVideo.setAttribute('class','cadreDeVideo');

	let video = document.createElement('div');
	video.setAttribute('class','video');

	let videoPreview = document.createElement('iframe');
	videoPreview.setAttribute('class','videoPreview');
	videoPreview.setAttribute('width','560');
	videoPreview.setAttribute('height','315');
	videoPreview.setAttribute('src',"https://www.youtube.com/embed/".concat(lien).concat("?color=white&rel=0&controls=2"));
	videoPreview.setAttribute('frameborder','0');
	videoPreview.setAttribute('allow','accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
	videoPreview.setAttribute('allowfullscreen','');

	video.append(videoPreview);

	let zoneVide = document.createElement('div');
	zoneVide.setAttribute('class','zoneVide');

	let zoneASavoir = document.createElement('div');
	zoneASavoir.setAttribute('class','zoneASavoir');

	let aSavoir = document.createElement('div');
	aSavoir.setAttribute('class','aSavoir');

	let ASAVOIR = document.createElement('h2');
	ASAVOIR.textContent = "À savoir";

	aSavoir.append(ASAVOIR);

	let zoneTexteASavoir = document.createElement('div');
	zoneTexteASavoir.setAttribute('class','zoneTexteASavoir');

	let texteDescriptifTexteASavoir = document.createElement('p');
	texteDescriptifTexteASavoir.setAttribute('class','texteDescriptif');
	texteDescriptifTexteASavoir.setAttribute('id','texteASavoir');
	texteDescriptifTexteASavoir.innerHTML = descriptifASavoir;

	zoneTexteASavoir.append(texteDescriptifTexteASavoir);

	zoneASavoir.append(aSavoir,zoneTexteASavoir);

	cadreDeVideo.append(video,zoneVide,zoneASavoir);
	zoneDeVideo.append(cadreDeVideo);

	fenetre.append(zoneDeVideo);


	body.append(fenetre);

}

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

var open = function (title) {
	var fen = document.getElementById("fenetre".concat(title));
	
	fen.style.display= "block";

	// Les quatre prochaines lignes pour que le scroll se réinitialise à chaque ouverture de fenêtre.
	console.log(fen);
	var zoneText = fen.childNodes[1].childNodes[0];
	var zoneASavoir = fen.childNodes[2].childNodes[0].childNodes[2].childNodes[1];
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
}

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


window.onkeydown=function(e){
	var x=e.which;
	if (x == 27){
		for (var i =0; i< titles.length ; i++ ){
			exit(titles[i]);
		}
	}
}

for (var i =0; i< titles.length ; i++ ){
	useWindow(titles[i]);
}


