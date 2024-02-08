# test-centrakor
Repertoire de code pour le test Technique Cargo d'intégration d'une page Centrakor

## Installation 
Initalisation de la structure HTML
- rajout des balises meta d'accessibilité et de SEO
- Installation et découverte de LESS (lecture de la doc) pour la gestion des feuilles de styles
    - Installation de LESS en global : 

        ```npm i less -g```

    - Compilation des fichiers .less en .css à la main : 

        ```lessc style.less style.css```
    
    - Pour pouvoir compiler automatiquement les fichiers .less en .css, on peut utiliser le package npm less-watch-compiler :

        ```npm install -g less-watch-compiler```

    - Avec le fichier de config JSON, pour watch automatiquement les changements dans le fichier .less et les compiler en .css :

        ```less-watch-compiler```

Tout à l'air opérationnel, je vais pouvoir commencer à coder la page Centrakor. Pour l'instant je n'utiliserais pas de framework CSS, la maquette est simple et je vais essayer de faire un code propre et lisible.

## Analyse de la maquette

La maquette est simple, elle est composée de 4 sections :

- **Header :**  
    Le header est composé du nom de la marque et sa baseline, une phrase d'accroche, un bouton "je trouve mon magasin", et un encart pouvant acceuillir une image ou une vidéo.  
    **Mobile** : Mêmes éléments mais l'un sous l'autre. On a donc un premier bloc "marque / Baseline / Bouton", et un second bloc "photo / vidéo" à flex.

- **Section Produits** :  
    La section produits est composée de 2 carousels de produits, un pour les petits articles et un pour les gros articles. Chaque carousel est composé de 2 à 10 produits, avec un titre, une image, et un prix dans une "bulle de dialogue".  
    **Mobile** : Les carousels sont juste placés l'un sous l'autre. On a donc un bloc à flex avec les 2 carousels à l'interieur.

- **Section Recherche de magasin** :  
    La section recherche de magasin est composée d'un formulaire de recherche de magasin, avec un champ de recherche, un bouton "rechercher" (icone loupe), et un autre form pour les "Magasins autour de moi".  
    **Mobile** : Les 2 formulaires sont juste placés l'un sous l'autre. On a donc un bloc blanc à flex avec les 2 formulaires à l'interieur.

- **Section Footer** :  
    Le footer est composé du logo de la marque dans un cercle, un H2 avec "qui sommes-nous ?" et un bouton "découvrez Centrakor", et en dessous des call-to-action vers les différents réseaux sociaux de la marque.  
    **Mobile** : Le rond avec le logo se retrouve au dessus du bloc "Qui sommes-nous ?" et du bouton "découvrez Centrakor". Le reste de la disposition ne change pas.