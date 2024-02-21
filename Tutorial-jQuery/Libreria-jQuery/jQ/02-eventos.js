$(document).ready(function() {
    console.log("El dom está cargado.")

    // MouseOver y MouseOut
    var caja = $("#caja");
/*
    caja.mouseover(function() {
        $(this).css("background", "red");
    });    
    
    caja.mouseout(function() {
        $(this).css("background", "green");
    });
*/
    function cambiaRojo() {
        $(this).css("background", "red");
    }    

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    // Hover en jQuery primero se ejecuta el hover cuando entras y luego cuando sales ejemplo: .hover(entra, sale)
    caja.hover(cambiaRojo, cambiaVerde);

    // Click y DoubleClick
    // Click
    caja.click(function() {
        $(this).css("color", "#fff")
               .css("background", "blue");
    })

    // DoubleClick
    caja.dblclick(function() {
        $(this).css("color", "#000")
               .css("background", "pink");
    })

});