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
*   +Métodos para Definir, Obtener y Eliminar valores de atributos
*    - setAttribute() - Modifíca el valor de un atributo.
*    - getAttribute() - Muestra el valor de un atributo.
*    - removeAttribute() - Borra el valor de un atributo.
*/