/*==============================================

Comparador Inteligente

==============================================*/

function cargarComparador(){

let selects=[

"cable1",

"cable2",

"cable3"

];

selects.forEach(id=>{

let s=

document.getElementById(id);

s.innerHTML=

'<option value="">Seleccione</option>';

catalogo.forEach(c=>{

let o=

document.createElement("option");

o.value=c.ID;

o.innerHTML=c.Producto;

s.appendChild(o);

});

});

}

/*======================================*/

function comparar(){

let a=

obtenerProducto(

cable1.value

);

let b=

obtenerProducto(

cable2.value

);

let c=

obtenerProducto(

cable3.value

);

let html=`

<table

class='table table-bordered'>

<tr>

<th>Propiedad</th>

<th>${a?.Producto||""}</th>

<th>${b?.Producto||""}</th>

<th>${c?.Producto||""}</th>

</tr>

${fila(

"Voltaje",

a,

b,

c,

"Voltaje"

)}

${fila(

"Conductor",

a,

b,

c,

"Conductor"

)}

${fila(

"Aislamiento",

a,

b,

c,

"Aislamiento"

)}

${fila(

"Cubierta",

a,

b,

c,

"Cubierta"

)}

${fila(

"Aplicación",

a,

b,

c,

"Aplicacion"

)}

${fila(

"Instalación",

a,

b,

c,

"Instalacion"

)}

${fila(

"Ambiente",

a,

b,

c,

"Ambiente"

)}

${fila(

"LSZH",

a,

b,

c,

"LSZH"

)}

${fila(

"Norma",

a,

b,

c,

"Norma"

)}

</table>

`;

document

.getElementById(

"comparacion"

)

.innerHTML=

html;

}

/*======================================*/

function fila(

titulo,

a,

b,

c,

campo

){

return `

<tr>

<td>

${titulo}

</td>

<td>

${a?.[campo]||""}

</td>

<td>

${b?.[campo]||""}

</td>

<td>

${c?.[campo]||""}

</td>

</tr>

`;

}

/*======================================*/

window.addEventListener(

"load",

()=>{

setTimeout(

cargarComparador,

1000

);

}

);
