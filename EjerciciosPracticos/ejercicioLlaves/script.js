const contenedor = document.querySelector(".flex-container");
let contador = 0;

const boton = document.querySelector(".boton-enviar");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

function crearLlaves(nombre, modelo, precio) {
    contador++;
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2> ${nombre} </h2>`;
    modelo = `<h3 id='${modelo}'> ${modelo} </h3>`;
    precio = `<p> ${precio} </p>`;
    return [nombre, modelo, precio, img];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i < 21; i++) {

    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlaves(`Llave ${i}`, `Modelo ${modeloRandom}`, `Precio :<b> ${precioRandom}€</b>`);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
    
}

contenedor.appendChild(documentFragment);