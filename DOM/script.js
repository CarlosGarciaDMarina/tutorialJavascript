/*
*   ##################### DOM ####################
*
*   Document Object Model,
*
*   + Nodo - Es cualquier etiqueta del cuerpo, como párrafo, el mismo body o incluso las etiquetas ed una lista.
*    - Document - Es el nodo raíz, apartir del cual derivan el resto de nodos.
*    - Element - Son nodos definidos por etiquetas HTML.
*    - Text - El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
*    - Attribute - Los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos, sino como info asociada al nodo de tipo element).
*    - Comentarios - Los comentarios y otros elem. como las declaraciones DocType en cabecera de los documentos HTML generan nodos.
*    
*
*   + Document - Métodos de Selección de elementos
*    - getElementById() - Selecciona un elemento por ID.
*    - getElementByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
*    - querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
*    - querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.
*
*
*   + Métodos para Definir, Obtener y Eliminar valores de atributos
*    - setAttribute() - Modifíca el valor de un atributo.
*    - getAttribute() - Muestra el valor de un atributo.
*    - removeAttribute() - Borra el valor de un atributo.
*    - textContent - devuelve lo que hay escrito en el elemento.
*    - innerHTML - te permite asignar un valor nuevo al contenido.
*    - append() - agrega un elemento al documento html despues de 
*    - appendChild() - agrega un elemento hijo al padre en el dom HTML
*    - prepend() - agrega un elemento al documento html antes de 
*/

let parrafo = document.querySelector(".parrafo");

document.write(parrafo); 

const rangoEtario = document.querySelector(".rangoEtario");

const valorAtributo = rangoEtario.getAttribute("type");

/* el primer parametro es lo que queremos modificar, el segundo es el que queremos */
 
rangoEtario.setAttribute("type", "color"); 

document.write(valorAtributo);

const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", "true");
titulo.setAttribute("dir", "rtl");

/*
*   ##################### Atributos ####################
*
*   Atributos Globales
*    - contentEditable - Indica si el elemento puede ser modificable por el usuario (bool)
*    - dir - Indica la direccionalidad del texto.
*    - hidden - Indica si el elemento es relevante o no.
*    - tabindex - Indica si el elemento puede obtener un focus de input.
*    - title - Contiene un texto con informacion relacionada al elemento al que pertenece
*    
*
*   Atributos de inputs
*    - className 
*    - value 
*    - type 
*    - accept 
*    - form
*    - minLength
*    - placeholder
*    - required
*
*   Atributo style
*    - usos y ejemplos
*    - propiedades CamelCase
*    
*/

const input = document.querySelector(".input-normal");
input.accept = "image/png";