/*
*   --------- Funciones de registro
*   - assert() - aparece un mensaje de error en la consola si la afirmación es falsa.
*   - clear() - limpia la consola
*   - error() - muestra un mensaje de error en la consola
*   - info() - emite un mensaje informativo de la consola web. En FireFox y Chrome aparaece un icono "i"
*   - log() - muestra un mensaje en la consola
*   - table() - Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parametro add: columns y nos muestra una tabla en la consola
*   - warn() - Imprime un msj de advertencia en la consola web
*   - dir() - Despliega una lista interactiva de las propiedades del objeto javascript especificado
*
*   --------- Funciones de conteo
*   - count() - Registra el numero de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta
*   - countReset() - Resetea el contado console.count()
*   
*   --------- Funciones de agrupacion
*   - group() - Crea un nuevo grupo en linea en el registro de la consola
*   - groupEnd() - Remueve el grupo en linea en el registro de la consola
*   - groupCollapsed() - Crea un nuevo registro en linea pero contraido, el usuario debe expandirlo para verlo
*
*   --------- Funciones de agrupacion
*   - time() - inicia un temporizador
*   - timeEnd() - registra el valor actual de un temporizador
*   - timeLog() - Detiene un temporizador
*/


const materias = {
    fisica: [90, 6, 4, "Fisica"],
    matematicas: [84, 8, 2, "matematicas"],
    logica: [92, 8, 4, "logica"],
    quimica: [96, 8, 4, "quimica"],
    calculo: [91, 6, 3, "calculo"],
    programacion: [79, 7, 4, "programacion"],
    biologia: [75, 9, 2, "biologia"],
    bbdd: [98, 9, 1, "bbdd"],
    algebra: [100, 10, 4, "algebra"]

}

const aprobo = ()=>{
    for(materia in materias){

        let asistencias = materias[materia];
        let promedio = materias[materia][1];
        let trabajo = materias[materia][2];

        console.log(materias[materia][3]);
        
        if(asistencias >= 90) {
            console.log("%c Asistencias en orden", "color:green");
        } else{
            console.log("%c Falta de asistencias", "color:red");
        }
        if(promedio >= 7) {
            console.log("%c Promedio en orden", "color:green");
        } else{
            console.log("%c Promedio desaprobado", "color:red");
        }
        if(trabajo >= 3) {
            console.log("%c Trabajos prácticos en orden", "color:green");
        } else{
            console.log("%c Faltan trabajos prácticos", "color:red");
        }
    
    }
    
}

aprobo();


let trabajar = "240 minutos de trabajo";
let estudiar = "100 minutos de estudio";
let tp = "100 minutos de trabajos prácticos";
let homework = "30 minutos de labores del hogar";
let descanso = "10 minutos de descanso";

console.log("#####TAREAS#####");
for (let i = 0; i < 14; i++) {

    if (i == 0) {
        console.group("Semana 1");
    }

    console.group("Día " + (i+1));
    console.log(trabajar);
    console.log(descanso);
    console.log(estudiar);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if (i == 6) {
        console.groupEnd();
        console.group("Semana 2");
    }



    
}

console.groupEnd();
console.groupEnd();

