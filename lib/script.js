$(document).ready(function(){

function changeImage(i) {
    $img.css('display', 'none'); // on cache toutes les images
    $img.eq(i%nbImages).css('display', 'block'); // on cible l'image courante, qui possède l'indice i et on l'affiche
}

let $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    nbImages = $img.length;
    indice = 0; // on initialise un compteur
changeImage (indice); // on affiche la première image

$('.next').click(function(){ // image suivante
    changeImage (++indice);
});

$('.prev').click(function(){ // image précédente
    changeImage(--indice);
});

$('body').on("keydown", function(event) {
    if (event.which==37 || event.which==40) { changeImage(--indice); } // touches 'bas' ou 'gauche'
    else if (event.which==39 || event.which==38) { changeImage(++indice); } // touches 'haut' ou 'droite'
         else if (event.which==27) { indice=0; changeImage(indice); } // touche 'esc' pour remettre le carrousel à l'image de départ
});

$('#carrousel').on('mousewheel DOMMouseScroll', function(event) {
    if ((event.originalEvent.wheelDelta || -event.originalEvent.detail) < 0) { changeImage(--indice); }
    else { changeImage(++indice); }
});

});
