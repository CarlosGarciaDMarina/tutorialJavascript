const titulo = document.querySelector(".titulo");

titulo.style.color = "#FF0000";
titulo.style.padding = "1vh";
titulo.style.borderBottom = "1px solid black";

/*
*   ********** CLASES, CLASSLIST y MËTODOS DE CLASSLIST **********
*
*   - Definicion y usos:
*   - add() - añade una clase
*   - remove() - borra una clase
*   - item() - devuelve la clase del índice especificado
*   - contains() - verifica si ese elemento posee o no la clase especificada
*   - replace() - reemplaza una clase por otra
*   - toggle() - si no tiene la clase especificada la agrega, si la tiene la elimina.
*
*       ***EJEMPLO***
*
*       titulo.classList.add("grande");
*        
*   + Obtencion y modificacion de elementos
*    - textContent - devuelve el texto de cualquier nodo.
*    - innerText - devuelve el texto visible de un node element.
*    - outerText - devuelve el texto que se encuentra en las etiquetas html.
*
*    - innerHTML - devuelve el contenido html de un elemento.
*    - outerHTML - devuelve el código HTML completo edl elemento.
*
*
*   + Creación de elementos
*    - createElements() - 
*    - createTextElements() - 
*    - createDocumentFragment() - Optimiza los recursos del navegador 
*
*
*   + Obtencion y modificacion de childs
*    - firstChild 
*    - lastChild 
*    - firstElementChild
*    - firstElementChild
*    - childNodes
*    - children
*
*
*   + Métodos de childs (Hijos)
*    - appendChild()  
*    - replaceChild()  
*    - removeChild() 
*    - hasChildNodes() 
*   
*
*   + Propiedad de parents (Padres)
*    - parentElement
*    - parentNode
*
*   + Propiedad de siblings (Hermanos)
*    - parentElement
*    - parentNode
*
*
*/

const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 21; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "- Item " + i + ":";
    fragmento.appendChild(item);
    
}
contenedor.appendChild(fragmento);


/* Padres e hijos */
const contenedorDos = document.querySelector(".contenedor-dos");

const hijos = contenedorDos.children;

for (hijo of hijos){
    console.log(hijo);
}