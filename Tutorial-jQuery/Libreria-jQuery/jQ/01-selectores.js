// Comrpobamos si el documento esta cargado
$(document).ready(function(){
    console.log("Documento cargado !!")
});


$(document).ready(function() {

    // Selectores de ID
    var rojo = $("#rojo").css("background", "red")
                         .css("color", "white")
                         .css("font-size", "30px");
    var amarillo = $("#amarillo").css("background", "yellow")
                                 .css("color", "green")
                                 .css("font-size", "30px");
    var verde = $("#verde").css("background", "green")
                           .css("color", "white")
                           .css("font-size", "30px");
    var blamco = $("#blanco").css("font-size", "30px");

    // Selector de CLASES
    var mi_clase = $('.zebra').css("padding","5px");

    // Llamamos al evento click asi
    $('.sin_borde').click(function(){
        console.log("Click");
        // El this es para decirle que es para este elemento, y el addClass es para añadirle una clase al elemento
        $(this).addClass('zebra');
    });
    /**
     * Para seleccionar los elementos individuales que tienen las clases podemos hacerlo con un array o con eq. Ejmplo:
     * Con un array - mi_clase[0]
     * No es tan recomendable porque no puedes trabajar igual de funcioanl y sencillo como con eq
     * 
     * Con eq - mi_clase.eq(1)
     * con el metodo eq podemos hacer mas cosas ya que tenemos los elementos de jQuery para poder trabajar
     */
});