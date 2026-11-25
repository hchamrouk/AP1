let simulateur = document.getElementById("simulateur");


// Calcul de la cotisation, du panier et du total général.
function calculer() {

    let totalCotisation = 0;
    let totalBoutique = 0;
    let nombreTotal = 0;

    // Pour chaque tranche d’âge, je multiplie le nombre d’adhérents par le tarif
    // correspondant, puis je mets à jour le sous-total affiché.
    for (let i = 0; i < ADHESIONS.length; i++) {
        let id = ADHESIONS[i];
        let nombre = quantite(document.getElementById(id).value);
        let cout = nombre * PRIX_ADHESIONS[i];

        nombreTotal += nombre;
        totalCotisation += cout;

        document.getElementById("cout-" + id).textContent = cout + " €";
    }

    document.getElementById("nombre-total").textContent = nombreTotal;
    document.getElementById("cout-total").textContent = totalCotisation;
    document.getElementById("recap-cotisation").textContent = totalCotisation + " €";

    // Les lignes du panier existent déjà dans tarifs.html. Je retire hidden
    // uniquement quand un article est sélectionné, puis j’actualise sa taille et son prix.
    for (let i = 0; i < PRODUITS.length; i++) {
        let produit = PRODUITS[i];
        let nombre = quantite(document.getElementById("qte-" + produit).value);
        let cout = nombre * PRIX_PRODUITS[i];
        let taille = document.getElementById("taille-" + produit);

        if (nombre === 0) {
            document.getElementById("ligne-" + produit).setAttribute("hidden", "");
        } else {
            document.getElementById("ligne-" + produit).removeAttribute("hidden");
        }

        if (taille) {
            document.getElementById("panier-taille-" + produit).textContent = "Taille " + taille.value;
        } else {
            document.getElementById("panier-taille-" + produit).textContent = "Taille unique";
        }

        document.getElementById("panier-qte-" + produit).textContent = nombre;
        document.getElementById("panier-prix-" + produit).textContent = cout + " €";

        totalBoutique += cout;
    }

    // Je regroupe les deux montants et affiche un panier vide si aucun article n’est sélectionné.
    if (totalBoutique > 0) {
        document.getElementById("panier-vide").setAttribute("hidden", "");
    } else {
        document.getElementById("panier-vide").removeAttribute("hidden");
    }
    document.getElementById("total-boutique").textContent = totalBoutique + " €";
    document.getElementById("recap-boutique").textContent = totalBoutique + " €";

    let total = totalCotisation + totalBoutique;
    document.getElementById("total-commande").textContent = total;

}


// Réinitialiser seulement les adhésions, sans toucher aux articles de la boutique.
function resetCotisation() {
    for (let i = 0; i < ADHESIONS.length; i++) {
        document.getElementById(ADHESIONS[i]).value = 0;
    }

    calculer();
}


// Retirer un article revient à remettre sa quantité à zéro puis à recalculer.
function retirer(produit) {
    document.getElementById("qte-" + produit).value = 0;
    calculer();
}


// Événements : les boutons Retirer sont associés à leurs articles une seule fois.
for (let i = 0; i < PRODUITS.length; i++) {
    let produit = PRODUITS[i];

    document.getElementById("retirer-" + produit).addEventListener("click", function () {
        retirer(produit);
    });
}

document.getElementById("reset-cotisation").removeAttribute("disabled");
document.getElementById("reset-cotisation").addEventListener("click", resetCotisation);

// Les événements input et change actualisent les montants dès la saisie.
simulateur.addEventListener("input", calculer);
simulateur.addEventListener("change", calculer);
simulateur.addEventListener("submit", function (event) {
    event.preventDefault();
});

// Pour remettre le simulateur à zéro, je remets directement les valeurs des champs.
function resetTotal() {
    for (let i = 0; i < ADHESIONS.length; i++) {
        document.getElementById(ADHESIONS[i]).value = 0;
    }

    for (let i = 0; i < PRODUITS.length; i++) {
        let produit = PRODUITS[i];
        document.getElementById("qte-" + produit).value = 0;
        let taille = document.getElementById("taille-" + produit);
        if (taille) {
            taille.value = "M";
        }
    }

    calculer();
}

document.getElementById("reset-total").addEventListener("click", resetTotal);
calculer();
