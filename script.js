var joueurs = []; // Tableau pour stocker les noms des joueurs

// Fonction pour ajouter un joueur à la liste
function ajouterJoueur() {
  var inputNom = document.getElementById('nom-joueur');
  var nomJoueur = inputNom.value;
  
  // Vérifier si le nom du joueur est vide
  if (nomJoueur === '') {
    alert("Veuillez entrer un nom de joueur.");
    return;
  }
  
  var listeJoueurs = document.getElementById('joueurs-liste');
  
  // Créer un nouvel élément de liste (li) pour le joueur
  var nouvelElement = document.createElement('p');
  nouvelElement.textContent = nomJoueur;
  
  // Ajouter le nouvel élément à la liste des joueurs
  listeJoueurs.appendChild(nouvelElement);
  
  // Ajouter le nom du joueur au tableau des joueurs
  joueurs.push(nomJoueur);
  
  // Réinitialiser le champ de saisie du nom du joueur
  inputNom.value = '';
}

// Fonction pour choisir deux joueurs aléatoires différents
function choisirJoueursAleatoires() {
  var joueursAleatoires = document.getElementById('joueurs-aleatoires');
  
  // Vérifier s'il y a au moins deux joueurs enregistrés
  if (joueurs.length < 2) {
    joueursAleatoires.textContent = "Il faut au moins deux joueurs enregistrés pour jouer.";
    return;
  }
  
  var joueur1, joueur2;
  
  // Choisir le joueur 1 aléatoire
  var indexJoueur1 = Math.floor(Math.random() * joueurs.length);
  joueur1 = joueurs[indexJoueur1];
  
  // Choisir le joueur 2 aléatoire, en s'assurant qu'il est différent du joueur 1
  var indexJoueur2;
  do {
    indexJoueur2 = Math.floor(Math.random() * joueurs.length);
    joueur2 = joueurs[indexJoueur2];
  } while (indexJoueur1 === indexJoueur2);
  
  // Liste de verbes aléatoires
  var verbes = ["lécher la joue de", "donner une tape à", "faire un câlin à", "faire un high-five avec", "chanter une chanson pour", "imiter", "danser avec", "faire un compliment honnête à", "faire un massage à", "jouer à pierre-papier-ciseaux avec", "raconter une blague à", "imiter un animal pour", "faire un selfie avec", "dire 'je t'aime' à", "jouer à cache-cache avec", "faire une grimace à", "simuler un orgasme pour", "faire un clin d'œil à", "sautiller avec", "faire une danse ridicule avec", "faire une bataille d'oreillers avec", "faire un concours de cuisine avec des ingrédients inattendus contre", "faire un concours de dessin à l'aveugle face à", "faire une décoration de pizzas avec des garnitures insolites avec", "faire une dégustation de snacks les yeux bandés et deviner les saveurs avec"];
  
  // Choisir un verbe aléatoire
  var verbe = verbes[Math.floor(Math.random() * verbes.length)];
  
  // Afficher les joueurs aléatoires avec le verbe aléatoire
  joueursAleatoires.textContent = joueur1 + " doit " + verbe + " " + joueur2;
}

