<?php

header("Content-Type: text/plain"); // Utilisation d'un header pour spécifier le type de contenu de la page. Ici, il s'agit juste de texte brut (text/plain). 

// try{
	$bdd = new PDO('mysql:host=sql7.freemysqlhosting.net;dbname=sql7354367;charset=utf8','sql7354367','K2pYSVKNcs');
// }
// catch (Exception $e){
// 	die('Erreur : '. $e->getMessage());
// }

$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//On crée le tableau qui contiendra toutes les données : 
$dataPortfolio = array();


$reponse = $bdd->query('SELECT * FROM Video');

//On crée le tableau des titleTexts : 
$titleTexts = array();

while ($donnees = $reponse->fetch()){	
	array_push($titleTexts, $donnees['title']);
}

$reponse->closeCursor();

$dataPortfolio[0] = $titleTexts;




$reponse = $bdd->query('SELECT * FROM Video');

//On crée le tableau des titles :
$titles = array();

while ($donnees = $reponse->fetch()){	
	array_push($titles, $donnees['title_camel_case']);
}
$reponse->closeCursor();

$dataPortfolio[1] = $titles;



$reponse = $bdd->query('SELECT * FROM Video');

//On crée le tableau des resumes :
$resumes = array();

while ($donnees = $reponse->fetch()){	
	array_push($resumes, $donnees['synopsis']);
}
$reponse->closeCursor();

$dataPortfolio[2] = $resumes;



$reponse = $bdd->query('SELECT * FROM Video');

//On crée le tableau des color :
$color = array();

while ($donnees = $reponse->fetch()){	
	array_push($color, $donnees['color']);
}
$reponse->closeCursor();

$dataPortfolio[3] = $color;



$reponse = $bdd->query('SELECT * FROM Video');

//On crée le tableau des dates :
$dates = array();

while ($donnees = $reponse->fetch()){	
	array_push($dates, $donnees['date']);
}
$reponse->closeCursor();

$dataPortfolio[4] = $dates;



$reponse = $bdd->query('SELECT * FROM Video');

//On crée le tableau des descriptifASavoirS :
$descriptifASavoirS = array();

while ($donnees = $reponse->fetch()){	
	array_push($descriptifASavoirS, $donnees['description']);
}
$reponse->closeCursor();

$dataPortfolio[5] = $descriptifASavoirS;


$reponse = $bdd->query('SELECT * FROM Video');


//On crée le tableau des liens :
$liens = array();

while ($donnees = $reponse->fetch()){	
	array_push($liens, $donnees['link_youtube']);
}
$reponse->closeCursor();

$dataPortfolio[6] = $liens;



$reponse = $bdd->query('SELECT v.id, GROUP_CONCAT(role) AS roles
FROM Video v, Role r, VideoMesRoles vmr
WHERE vmr.id_role = r.id
AND vmr.id_video = v.id
GROUP BY v.id');

//On crée le tableau des tab_roles :

$tab_roles = array();

while ($donnees = $reponse->fetch()){	
	// array_push($tab_roles, (explode(',',$donnees['roles'])));
	$tab_roles[$donnees['id']-1] = explode(',',$donnees['roles']);
}

$reponse->closeCursor();

$dataPortfolio[7] = $tab_roles;



$reponse = $bdd->query('SELECT * FROM Video');


//On crée le tableau des liensBouton :
$liensBouton = array();

while ($donnees = $reponse->fetch()){	
	array_push($liensBouton, $donnees['link_button']);
}
$reponse->closeCursor();

$dataPortfolio[8] = $liensBouton;



$reponse = $bdd->query('SELECT v.id, GROUP_CONCAT(first_name, " " ,last_name) AS noms
FROM Video v, Role r, VideoMemberRole vmr, Member m 
WHERE m.id = vmr.id_member
AND v.id = vmr.id_video
AND r.id = vmr.id_role
AND r.role = "Acteur/Danseuse/Auteur Chanson/Projet réalisé avec"
GROUP BY v.id ');

//On crée le tableau des acteurs :

$acteurs = array();

while ($donnees = $reponse->fetch()){	
	// array_push($acteurs, (explode(',',$donnees['noms'])));
	$acteurs[$donnees['id']-1] = explode(',',$donnees['noms']);
}

$reponse->closeCursor();

$dataPortfolio[9] = $acteurs;


$reponse = $bdd->query('SELECT v.id, GROUP_CONCAT(first_name, " " ,last_name) AS noms
FROM Video v, Role r, VideoMemberRole vmr, Member m 
WHERE m.id = vmr.id_member
AND v.id = vmr.id_video
AND r.id = vmr.id_role
AND r.role = "Acteur clip"
GROUP BY v.id');

//On crée le tableau des acteursClip :

$acteursClip = array();

while ($donnees = $reponse->fetch()){	
	// array_push($acteursClip, (explode(',',$donnees['noms'])));
	$acteursClip[$donnees['id']-1] = explode(',',$donnees['noms']);
}

$reponse->closeCursor();

$dataPortfolio[10] = $acteursClip;


$reponse = $bdd->query('SELECT v.id, t.name
FROM Video v, Type t, VideoType vt 
WHERE v.id = vt.id_video
AND t.id = vt.id_type
');

//On crée le tableau des typeVideo :

$typeVideo = array();

while ($donnees = $reponse->fetch()){	
	// array_push($typeVideo, (explode(',',$donnees['noms'])));
	$typeVideo[$donnees['id']-1] =$donnees['name'];
}

$reponse->closeCursor();

$dataPortfolio[11] = $typeVideo;



$reponse = $bdd->query('SELECT id, GROUP_CONCAT(noms) AS noms, GROUP_CONCAT(roles SEPARATOR	"|") AS roles
FROM(SELECT v.id, CONCAT(first_name, " " ,last_name) AS noms, GROUP_CONCAT(r.role) AS roles
	FROM Video v, Role r, VideoMemberRole vmr, Member m
	WHERE m.id = vmr.id_member	
    AND v.id = vmr.id_video
    AND r.id = vmr.id_role
    AND r.role != "Acteur clip"
	AND r.role != "Acteur/Danseuse/Auteur Chanson/Projet réalisé avec"
	GROUP BY v.id,noms) AS T
GROUP BY id');

//On crée le tableau des equipe :

$equipe = array();
$roles_equipe = array();

while ($donnees = $reponse->fetch()){	
	// array_push($equipe, (explode(',',$donnees['noms'])));
	$equipe[$donnees['id']-1] = explode(',',$donnees['noms']);

	$roles_equipe[$donnees['id']-1] = explode('|',$donnees['roles']);
	foreach($roles_equipe[$donnees['id']-1] as $k=>$v){
		$roles_equipe[$donnees['id']-1][$k] = explode(',', $v);
	}
}

$reponse->closeCursor();

$dataPortfolio[12] = $equipe;
$dataPortfolio[13] = $roles_equipe;

echo json_encode($dataPortfolio);


?>