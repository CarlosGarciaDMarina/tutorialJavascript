'use stricts'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate()
var hora = fecha.getHours();
var min = fecha.getMinutes();
var seg = fecha.getSeconds();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes+1}
    El dia es: ${dia}
    La hora es: ${hora}
    Los minutos son: ${min}
    Los segundos son: ${seg}
`;

console.log(textoHora);
