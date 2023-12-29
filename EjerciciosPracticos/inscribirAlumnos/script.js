/*
*   Crear soluciones:
*   - Crear una solucion que inscriba a un alumno dentro de una materia
*   - Si ya hay 20 personas anotados en la materia negarle la inscripcion
*   - Si hay menos de 20 personas inscribir al alumno y añadirlo a la lista de personas
*/

let materias = {
    fisica: ["Juan","Antonio","Enrique","Coque","Fermin","Raquel"],
    programacion: ["Josemi","Antonio","Enrique","Coque","Fermin","Amador","Maite"],
    logica: ["Emilio","Antonio","Enrique","Coque","Fermin","Amador","Raquel","Maite"],
    quimica: ["Mariano","Antonio","Enrique","Coque","Amador","Raquel","Maite"]
};

const inscribir = (alumno, materia)=>{
    const personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas.`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
                materias = {
                    fisica: personas,
                    programacion: materias['programacion'],
                    logica: materias['logica'],
                    quimica: materias['quimica']
                }
        } else if (materia == "programacion") {
                materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
            
        } else if (materia == "logica") {
                materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        
        } else if (materia == "fisica") {
                materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        
        }
        document.write(`Felicidades <b>${alumno}</b>! Te has inscrito a <b>${materia}</b>`)
    }
}

document.write(materias["fisica"].join(", "));
document.write("<br><br>")

inscribir("Pedrito", "fisica");

document.write("<br><br>")
document.write(materias["fisica"].join(", "));