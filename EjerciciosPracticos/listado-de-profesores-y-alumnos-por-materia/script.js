/*
*   Crear soluciones:
*   -Una funcion que al pasarle como parametro la materia nos devuelva:
*       -el profesor asignado
*       -el nombre de todos los alumnos
*   -Una funcion que nos diga en cuantas clases esta cofla
*   -Nombrar las clases en las que está y los profesores de cada una
*/

const obtenerInformacion = (materia)=>{
    //Creamos un array asociativo
    const materias = {
        fisica: ["Juan","Antonio","Enrique","Coque","Fermin","Raquel"],
        programacion: ["Josemi","Antonio","Enrique","Coque","Fermin","Amador","Maite"],
        logica: ["Emilio","Antonio","Enrique","Coque","Fermin","Amador","Raquel","Maite"],
        quimica: ["Mariano","Antonio","Enrique","Coque","Amador","Raquel","Maite"]
    };
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = obtenerInformacion(materia);

    // Verifica si la información es un array antes de escribirla
    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor en <b>${informacion[1]}</b> es <b style="color:Blue">${profesor}</b><br><br>`);
        document.write(`Alumnos presentes en <b>${informacion[1]}</b>: <b style="color:red">${alumnos}</b><br><br>`);
    } else {
        document.write("La materia no existe o no tiene información asociada.");
    }
}

const cantClases =(alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let total = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)) {
            total++;
            clasesPresentes.push(info);
            
        }
    }
    return "El alumno <b>" + alumno + "</b> esta en un total de " + total + " asignaturas las cuales son: <b>" + clasesPresentes + "</b><br>";
}

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");

document.write(cantClases("Amador"));
document.write(cantClases("Antonio"));

