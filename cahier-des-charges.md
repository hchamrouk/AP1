# Cahier des charges — Brumes

**AP1 — Site vitrine pour une activité culturelle**  
BTS SIO — Année scolaire 2026-2027

## 1. Contexte du projet

Dans le cadre de l'AP1, j'ai réalisé un site vitrine pour **Brumes**, un club fictif de jeu de rôle sur table situé à Nîmes. Le club propose principalement des parties de Donjons & Dragons, des séances d'initiation, des campagnes et des ateliers de création de personnages.

Le site permet de présenter l'activité, les membres du club, les événements, les tarifs et les articles de la boutique. Il permet également de simuler le montant d'une adhésion et de préparer une demande de contact, de réservation ou de commande.

Le maître d'ouvrage est l'enseignant et le maître d'œuvre est l'étudiant chargé de la conception et du développement du site.

## 2. Objectifs et public visé

Le site s'adresse aux personnes souhaitant découvrir le jeu de rôle ou rejoindre un club, qu'elles soient débutantes ou expérimentées, ainsi qu'aux familles souhaitant connaître le coût de plusieurs adhésions.

Les objectifs sont les suivants :

- Présenter le club, son fonctionnement et sa localisation.
- Faciliter l'accès aux informations sur les membres et les séances.
- Permettre de calculer le coût annuel d'une adhésion individuelle ou familiale.
- Présenter les articles de la boutique et calculer le montant d'une sélection.
- Mettre à disposition un formulaire adapté au motif de la demande.
- Proposer une navigation claire sur ordinateur, tablette et smartphone.

L'accès au site est public et ne nécessite pas de compte utilisateur.

## 3. Fonctionnalités du site

### 3.1. Accueil

La page d'accueil présente rapidement l'activité du club sous le titre « Le jeu de rôle, autrement. ». Elle explique le principe du jeu de rôle sur table, indique les jours habituels des séances et met en avant le tarif annuel et les réductions pour les jeunes.

Des liens permettent d'accéder directement à la présentation du club, au calendrier, au calculateur de cotisation, au panier et au formulaire de contact.

Une carte Google Maps intégrée à l'aide d'une balise `iframe` permet de localiser le siège fictif du club : 12 rue de la République, 30000 Nîmes.

### 3.2. Présentation du club

La page présente les quatre membres chargés du fonctionnement du club :

| Membre | Fonction |
|---|---|
| Hamza | Responsable du club |
| Damien | Maître du jeu |
| Clovis | Responsable de l'accueil |
| Jacky | Gestion de la boutique |

Chaque membre dispose d'un avatar anonyme, de son prénom et de sa fonction. Le survol de la ligne change sa couleur de fond grâce au CSS. Le survol de l'avatar déclenche une fonction JavaScript qui affiche la description du membre ; la description initiale revient lorsque la souris quitte l'avatar. L'avatar peut également être sélectionné au clavier ou par un clic.

La page présente aussi la charte du club : respect des limites de chacun, partage de la parole, prévention en cas d'absence et accueil de tous les niveaux.

### 3.3. Calendrier

Le calendrier présente les cinq séances prévues en décembre 2026 :

| Date | Séance | Horaire |
|---|---|---|
| Samedi 5 décembre | Le premier lancer | 14 h – 17 h |
| Mercredi 9 décembre | Atelier de création de personnages | 18 h – 20 h |
| Samedi 12 décembre | La citadelle oubliée | 14 h – 18 h |
| Jeudi 17 décembre | Le mystère de la taverne | 19 h – 22 h |
| Samedi 19 décembre | Sous les bois anciens | 14 h – 18 h |

Les jours de séance sont distingués visuellement dans une grille mensuelle. Les événements sont également détaillés sous le calendrier avec leur type, leur niveau et leurs horaires. Un clic sur une date de séance ou sur un lien de réservation dirige vers le formulaire de contact, dans lequel le visiteur sélectionne lui-même la séance souhaitée.

Sur petit écran, les titres trop longs dans les cellules sont tronqués et les horaires adoptent un format compact. Les informations complètes restent disponibles dans la liste des rendez-vous.

### 3.4. Calculateur de cotisation

Le tarif annuel de base est de 50 € par personne. Les réductions dépendent de la tranche d'âge de l'adhérent.

| Tranche d'âge | Réduction | Tarif annuel |
|---|---:|---:|
| 18 ans et plus | 0 % | 50 € |
| 16 à moins de 18 ans | 10 % | 45 € |
| 12 à moins de 16 ans | 20 % | 40 € |
| Moins de 12 ans | 30 % | 35 € |

Le visiteur renseigne le nombre d'adhérents pour chaque catégorie. Le JavaScript calcule automatiquement le sous-total de chaque catégorie, le nombre total d'adhérents et le montant annuel de la cotisation.

Chaque sous-total correspond au nombre de personnes multiplié par le tarif de la catégorie. Le montant annuel correspond à la somme des quatre sous-totaux. Les quantités prises en compte sont des nombres entiers compris entre 0 et 999 ; une valeur invalide est considérée comme nulle dans le calcul.

Un bouton permet de réinitialiser uniquement les cotisations sans modifier la sélection de la boutique.

### 3.5. Boutique et panier

La page Tarifs comporte également une boutique proposant quatre articles :

| Article | Prix unitaire |
|---|---:|
| Sweat Brumes | 38 € |
| Tapis de bataille | 25 € |
| Piste à dés | 24 € |
| Carnet de campagne | 15 € |

Chaque article est présenté avec un visuel, une courte description, son prix et un champ de quantité. Le sweat possède en plus un sélecteur de taille (S, M, L et XL). Les autres articles sont proposés en taille unique.

Le panier se met à jour automatiquement. Il affiche les articles sélectionnés, leur taille, leur quantité et leur sous-total. Les lignes correspondant aux quantités nulles sont masquées. Un message est affiché lorsque le panier est vide. Le visiteur peut retirer un article ou réinitialiser l'ensemble de sa sélection.

Le montant total de la commande correspond à la somme de la cotisation annuelle et du sous-total de la boutique. Un lien permet de rejoindre le formulaire de contact. Le visiteur reporte manuellement sa sélection dans le formulaire : il n'y a ni transfert automatique, ni paiement en ligne, ni conservation du panier entre les pages.

### 3.6. Formulaire de contact

Le formulaire propose trois motifs de demande : renseignements, réservation d'une séance et commande (adhésion ou boutique).

Les informations communes demandées sont : prénom, nom, date de naissance, courriel, téléphone, adresse postale, code postal et ville. Un message facultatif et une case obligatoire de lecture de la clause de confidentialité complètent le formulaire.

Les champs complémentaires dépendent du motif :

| Motif | Champs complémentaires |
|---|---|
| Renseignements | Aucun |
| Réservation | Niveau et séance souhaitée |
| Commande | Détail des adhésions et articles souhaités |

Pour une réservation ou une commande, le visiteur indique si un participant concerné est mineur. Si oui, une autorisation parentale est demandée dans un champ de fichier acceptant les extensions PDF, JPG, JPEG et PNG. Les champs masqués sont désactivés pour ne pas bloquer la validation. La minorité est déclarée par le visiteur et non calculée automatiquement.

Les contrôles reposent sur les attributs HTML des champs et sur des conditions et boucles JavaScript. Le formulaire vérifie notamment les champs obligatoires, le format du courriel via le navigateur, les champs textuels composés uniquement d'espaces pour l'identité et l'adresse, le téléphone (10 chiffres commençant par 0), le code postal (5 chiffres) et la présence du détail d'une commande. La date de naissance est un champ obligatoire de type date.

Un message indique l'erreur détectée ou confirme la validité de la demande. Le bouton Effacer réinitialise le formulaire. La validation est réalisée en démonstration : aucun envoi vers un serveur n'est effectué.

Les coordonnées de démonstration du club sont les suivantes :

- Responsable : Hamza.
- Adresse : 12 rue de la République, 30000 Nîmes.
- Courriel : contact@brumes.example.
- Téléphone : 01 99 00 00 00.

### 3.7. Confidentialité

Une page accessible depuis le site précise le caractère scolaire et fictif du projet, l'absence de traitement des demandes, l'utilisation d'avatars anonymes et le recours à Google Maps comme service externe. Elle invite le visiteur à ne pas saisir de données réelles ni joindre de documents personnels.

## 4. Contraintes ergonomiques et graphiques

J'ai choisi une direction artistique minimaliste avec des couleurs sombres et chaudes, de grands titres, des angles droits et des séparateurs fins. La police principale est Arial, avec des polices de remplacement sans empattement.

| Utilisation | Couleur |
|---|---|
| Fond principal — brun encre | `#201A1B` |
| Encadrés — brun chaud | `#392E2E` |
| Texte principal — ivoire | `#F2E6D8` |
| Texte secondaire | `#C9B7A9` |
| Accent — or sable | `#C89B63` |
| Liens visités (règle commune) | `#D1B7C3` |

Le site utilise une navigation horizontale commune, avec indication de la page active et un menu burger sur les petits écrans. Les pages sont indépendantes. Les grilles et les espacements s'adaptent à la largeur de l'écran grâce aux media queries.

Les dispositions retenues pour faciliter la lecture et l'utilisation comprennent des textes contrastés, des libellés associés aux champs, des alternatives textuelles pour les images, des repères de focus au clavier, un lien d'accès direct au contenu et des couleurs distinctes pour certains liens visités. Le formulaire conserve les coordonnées du club à gauche avec un positionnement sticky sur ordinateur, tandis que les deux blocs s'empilent sur mobile.

## 5. Contraintes techniques

Le site repose sur HTML5 pour la structure, CSS3 pour la présentation et JavaScript natif pour les interactions. Le gabarit responsive est réalisé sans Bootstrap, avec l'autorisation indiquée par l'enseignant. Aucun framework JavaScript, CDN ni bibliothèque externe n'est nécessaire au fonctionnement des scripts locaux. La carte Google Maps nécessite une connexion Internet.

Le JavaScript utilise principalement les variables, constantes, tableaux, opérations arithmétiques, conditions, boucles `for`, fonctions, événements et manipulations du DOM étudiés en cours. Les scripts sont séparés des pages HTML et commentés par fonctionnalité.

Le projet ne comporte pas de base de données ni de traitement serveur. Il peut être hébergé en local, notamment dans le répertoire `www` de WampServer.

## 6. Architecture des fichiers

```text
AP1/
├── index.html
├── pages/
│   ├── guilde.html
│   ├── calendrier.html
│   ├── tarifs.html
│   ├── contact.html
│   └── confidentialite.html
├── styles/
│   ├── style.css
│   ├── accueil.css
│   ├── club.css
│   ├── calendrier.css
│   ├── tarifs.css
│   ├── contact.css
│   └── confidentialite.css
├── javascript/
│   ├── commun.js
│   ├── calcul.js
│   ├── club.js
│   └── contact.js
├── images/
└── documentation/
    └── cahier-des-charges.md
```

`style.css` regroupe les règles communes ; les six autres feuilles concernent chacune une page. `commun.js` contient les tarifs et la fonction de contrôle des quantités ; `calcul.js` gère la cotisation et le panier ; `club.js` affiche les descriptions des membres ; `contact.js` gère les champs conditionnels et la validation du formulaire.

## 7. Livrable

Le livrable comprend les six pages HTML, les sept feuilles de style, les quatre scripts JavaScript, les images locales et le présent cahier des charges. Il s'agit d'un site vitrine de démonstration, avec des coordonnées, des événements et des articles fictifs. Les avatars anonymes ne représentent pas les personnes nommées.
