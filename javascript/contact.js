// Le formulaire utilise les contraintes HTML (required, type email, etc.).
// Je gère uniquement les champs conditionnels et les contrôles simples vus en cours.
const formulaire = document.getElementById("form-inscription");

// Un champ masqué est aussi désactivé pour ne pas empêcher la validation.
function afficherChamp(groupe, champ, visible) {
    if (visible) {
        document.getElementById(groupe).removeAttribute("hidden");
        document.getElementById(groupe).removeAttribute("disabled");
        document.getElementById(champ).removeAttribute("disabled");
        document.getElementById(champ).setAttribute("required", "");
    } else {
        document.getElementById(groupe).setAttribute("hidden", "");
        document.getElementById(groupe).setAttribute("disabled", "");
        document.getElementById(champ).setAttribute("disabled", "");
        document.getElementById(champ).removeAttribute("required");
    }
}

function champsConditionnels() {
    let objet = document.getElementById("objet").value;
    let reservation = objet === "reservation";
    let commande = objet === "commande";

    afficherChamp("champ-niveau", "niveau", reservation);
    afficherChamp("champ-partie", "partie", reservation);
    afficherChamp("details-commande", "commande", commande);
    afficherChamp("statut-mineur", "mineur", reservation || commande);

    // Je demande directement si un participant est mineur, sans calcul de date automatique.
    let autorisation = (reservation || commande) && document.getElementById("mineur").value === "oui";
    afficherChamp("autorisation-parentale", "autorisation", autorisation);
}

// Les boucles permettent de vérifier les chiffres sans expression régulière.
function chiffres(valeur, longueur) {
    if (valeur.length !== longueur) {
        return false;
    }

    for (let i = 0; i < valeur.length; i++) {
        if (valeur[i] < "0" || valeur[i] > "9") {
            return false;
        }
    }

    return true;
}

function verifierFormulaire(event) {
    event.preventDefault();

    let message = document.getElementById("erreurs-formulaire");
    let telephone = document.getElementById("telephone").value;
    let cp = document.getElementById("cp").value;
    message.classList.remove("succes");

    if (document.getElementById("prenom").value.trim() === "" ||
        document.getElementById("nom").value.trim() === "" ||
        document.getElementById("adresse").value.trim() === "" ||
        document.getElementById("ville").value.trim() === "") {
        message.textContent = "Complétez votre identité et votre adresse.";
    } else if (!chiffres(telephone, 10) || telephone[0] !== "0") {
        message.textContent = "Le téléphone doit contenir 10 chiffres et commencer par 0.";
    } else if (!chiffres(cp, 5)) {
        message.textContent = "Le code postal doit contenir 5 chiffres.";
    } else if (document.getElementById("objet").value === "commande" &&
        document.getElementById("commande").value.trim() === "") {
        message.textContent = "Indiquez votre commande.";
    } else {
        message.classList.add("succes");
        message.textContent = "Votre demande est valide. Mode démonstration : aucun envoi effectué.";
    }
}

// Le navigateur efface les champs ; je remets aussi l’affichage dans son état initial.
function effacer() {
    document.getElementById("objet").value = "";
    document.getElementById("mineur").value = "";
    champsConditionnels();
    document.getElementById("erreurs-formulaire").textContent = "";
}

document.getElementById("objet").addEventListener("change", champsConditionnels);
document.getElementById("mineur").addEventListener("change", champsConditionnels);
formulaire.addEventListener("submit", verifierFormulaire);
formulaire.addEventListener("reset", effacer);
document.getElementById("envoyer").removeAttribute("disabled");
champsConditionnels();
