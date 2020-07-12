var bandedemo = document.getElementById('bandeDemo');
var pagePrincipale = document.getElementById("pagePrincipale");
var body = document.getElementsByTagName('BODY')[0];
var boutonPHP = document.getElementById('boutonPHP');

// function ajax_post(){
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = "portfolio.php";
    //var fn = document.getElementById("first_name").value;
    //var ln = document.getElementById("last_name").value;
    var vars = "firstname="+"fn"+"&lastname="+"ln";
    hr.open("POST", url , true);

    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
    	console.log(hr.readyState);
    	console.log(hr.status);
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			// document.getElementById("coco").innerHTML = return_data;
	    	console.log(JSON.parse(return_data));
	    	console.log("rentre");

			var typeVideo = JSON.parse(return_data)[11];
			
			var color = JSON.parse(return_data)[3];
			
			var titles = JSON.parse(return_data)[1];

			var titleTexts = JSON.parse(return_data)[0];

			var resumes = JSON.parse(return_data)[2];

			var tab_roles = JSON.parse(return_data)[7];

			var dates = JSON.parse(return_data)[4];

			var acteurs = JSON.parse(return_data)[9];
			
			var acteursClip = JSON.parse(return_data)[10];
			
			var equipe = JSON.parse(return_data)[12];

			var roles_equipe = JSON.parse(return_data)[13];

			var liens = JSON.parse(return_data)[6];

			var liensBouton = JSON.parse(return_data)[8];

			var descriptifASavoirS = JSON.parse(return_data)[5];

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
	    }
	    else{
	    	console.log("marchepas");
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(); // Actually execute the request
    //document.getElementById("coco").innerHTML = "processing...";
// }

// body.onload = function(){
	// ajax_post();
// }
// boutonPHP.onclick = function(){
// 	ajax_post();
// }




