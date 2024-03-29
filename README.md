# test-centrakor
Repertoire de code pour le test Technique Cargo d'intégration d'une page Centrakor.  

https://albertbru.github.io/test-centrakor/

## 1. Installation 
Initalisation de la structure HTML
- rajout des balises meta d'accessibilité et de SEO
- Installation et découverte de LESS (lecture de la doc) pour la gestion des feuilles de styles

    Pour installer LESS, j'ai suivi les étapes suivantes :

    <details>

    - Installation de LESS en global : 

        ```npm i less -g```

    - Compilation des fichiers .less en .css à la main : 

        ```lessc style.less style.css```
    
    - Pour pouvoir compiler automatiquement les fichiers .less en .css, on peut utiliser le package npm less-watch-compiler :

        ```npm install -g less-watch-compiler```

    - Avec le fichier de config JSON, pour watch automatiquement les changements dans le fichier .less et les compiler en .css :

        ```less-watch-compiler```

    </details>

Tout à l'air opérationnel, je vais pouvoir commencer à coder la page Centrakor. Pour l'instant je n'utiliserais pas de framework CSS, la maquette est simple et je vais essayer de faire un code propre et lisible.

## 2. Analyse de la maquette

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

## 3. Structure HTML

Je vais commencer par créer la structure HTML de la page. Pas ou peu de style pour l'instant, je commence par poser les bases.

## 4. Ajout des styles

Je vais rajouter les différentes regles CSS pour mettre en forme la page. Le site doit être totalement responsive, je pense vérifier la responsivité à chaque étape de la création de la page.


## 5. Gestion des formulaires
Mise en place les forms qui renvoient "merci de votre recherche" lorsqu'on valide l'input.
Implémentation basique en JS, il est toujours possible de gérer les edges cases (input vide, input non valide, etc)...

## 6. Gestion des carousels
- Implémentation du carousel avec Slick. (https://kenwheeler.github.io/slick/)

## 7. Gestion des médias
- Implémentation de la vidéo du header. Je n'avais jamais fait et m'attendais à plus de difficultés. J'ai simplement ajouté un tag video avec les attributs autoplay, loop, et muted, et j'ai ajouté une image en poster pour le fallback. 

## 8. Gestion des réseaux sociaux
- Toujours cool de pouvoir cliquer sur les icones pour être redirigé vers les réseaux sociaux de la marque.

## 9. Gestion des images de cadeaux et de flocons

## 10. Gestion de l'anchor link
- Au clic sur le bouton du header, on redirige vers la section "recherche de magasin"

## 12. FIXES & OPTIMISATION
- Fix du breakpoint trop tardif qui causait un overlap des flèches du carousel entre 1000px et 900px de largeur d'écran. Changement du BP pour fix.
- Fix de la pastille qui ne suivait pas correctement l'image. Le container de l'image est maintenant en fit-content, son espacement avec le bloc de gauche est géré en space-evenly, et la pastille est recalculée en pourcentage de la largeur de l'image.
- Refactorisation du CSS pour ne plus avoir un fichier de 600 lignes mais un fichier par section. J'ai cherché (et trouvé) comment ne compiler qu'un seul fichier css à partir de plusieurs fichiers less, en important les fichiers auxiliaires dans le fichier principal. J'ai donc maintenant un fichier style.less qui importe tous les autres fichiers less, et une config JSON pour le watch-compiler qui détecte les changements dans les fichiers less et les compile en un seul fichier css.

## Last. Difficultés rencontrées

- Quelques difficultés à passer l'effet "néon" sur le texte, dû au fait que la police soit devenue "variable".  
- Les grids. J'ai peu pratiqué les grids, et je me suis dit que ca serait une solution sympa pour le pricing des produits. J'ai donc fait un peu de recherche sur les grids, et j'ai réussi à les mettre en place, tant bien que mal (ce n'est pas parfait, l'élément grid m'empêchant de mettre en place le :after pour le pseudo-élément de la bulle de dialogue).  
-Intégration CSS un peu plus compliquée que prévue, notamment pour la manipulation des éléments en position absolute et leur placement responsive.  
- Je n'ai pas fait les formes arrondies en background, j'ai déjà passé trop de temps sur le CSS pour le reste.  
- J'ai eu quelques difficultées à placer les éléments de décoration (flocons, cadeaux) en position absolute. Certains éléments ont nativement un overflow hidden au resize de la fenêtre, et d'autre non... A investiguer.
- Quelques difficultés à l'intégration de SLICK, rien d'insurmontable cependant.

=== WIP ===

## 11. Optimisation des ressources
- Minifier les ressources, compresser les images, faire du lazy loading pour les images, des skeletons le temps que les images se chargent, etc.
