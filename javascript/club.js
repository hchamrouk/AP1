// Comme dans le TP ImageMap, l’indice du membre correspond à celui du tableau.
const descriptions = [
    "Coordonne les activités, les inscriptions et l’organisation du club.",
    "Prépare les campagnes et anime les parties de Donjons & Dragons.",
    "Accueille les nouveaux membres et les accompagne lors de leur première séance.",
    "Gère les articles du club, les commandes et le stock."
];

// Les événements de l’avatar affichent ou masquent le descriptif.
function afficherMembre(i) {
    document.getElementById("description-" + i).textContent = descriptions[i];
}

function masquerMembre(i) {
    document.getElementById("description-" + i).textContent = "Découvrir le rôle de ce membre.";
}
