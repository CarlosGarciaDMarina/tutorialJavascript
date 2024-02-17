// ARCHIVOS JSON

window.addEventListener('load', function() {
    console.log("DOM cargado !!");

    var pelicula = {
        titulo: 'Batman VS Superman',
        año: 2017,
        pais: 'EEUU'
    };

    var peliculas = [
        {titulo: "La verdad duele", año: "2016", pais: "Francia"},
        pelicula
    ]

    var caja_peliculas = document.querySelector("#peliculas");

    for (const index in peliculas) {
        var p = document.createElement("p");
        p.append(peliculas[index].titulo + " - " + peliculas[index].año)
        caja_peliculas.append(p);
    }
});