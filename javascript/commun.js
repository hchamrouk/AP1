// Tarifs des adhésions : un même indice désigne la même catégorie dans les trois tableaux.
// Chaque indice associe une catégorie et son prix.
const ADHESIONS = ["adultes", "de16a17", "de12a15", "moins12"];
const PRIX_ADHESIONS = [50, 45, 40, 35];

// Même principe pour la boutique, dans l’ordre sweat, tapis de bataille, piste à dés et carnet.
const PRODUITS = ["sweat", "tapis", "piste", "carnet"];
const PRIX_PRODUITS = [38, 25, 24, 15];

// Les champs numériques peuvent être vides. Une quantité négative ou non entière ne compte pas.
function quantite(valeur) {
    let nombre = Number(valeur);

    if (nombre >= 0 && nombre <= 999 && nombre % 1 === 0) {
        return nombre;
    }

    return 0;
}
