'use strict';

// BOM - Browser Object Model

//Muestra valores
function getBom() {
    console.log('Window innerWidth:', window.innerWidth);
    console.log('Window innerHeight:', window.innerHeight);
    console.log('URL:', window.location);
    console.log('Screen width:', screen.width);
    console.log('Screen height:', screen.height);
}

// Redirige
function redirect(url) {
    window.location.href = url;
}
// Abre una ventana nueva en el navegador
function abrirVentana(url) {
    window.open(url,"","width=400", "height = 300");
}

getBom();
// redirect("https://google.com");
// abrirVentana("https://google.com");

