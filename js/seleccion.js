/*========================================
SELECCIÓN AUTOMÁTICA
========================================*/

const ampacidadCu={

1.5:18,
2.5:24,
4:32,
6:41,
10:57,
16:76,
25:101,
35:125,
50:150,
70:192,
95:232,
120:269,
150:309,
185:353,
240:415,
300:477

};

/*========================================*/

function seleccionarCable(){

let I=

parseFloat(

corriente.value

);

let L=

parseFloat(

longitud.value

);

let V=

parseFloat(

voltaje.value

);

let mat=

material.value;

let seccion=

calcularSeccion(I);

let cable=

buscarCatalogo(

seccion

);

mostrar(

seccion,

cable

);

}

/*========================================*/

function calcularSeccion(I){

for(let s in ampacidadCu){

if(

ampacidadCu[s]>=I

){

return parseFloat(s);

}

}

return 300;

}

/*========================================*/

function buscarCatalogo(sec){

let mejor=null;

catalogo.forEach(c=>{

let s=

parseFloat(

c.Seccion

);

if(

s>=sec

){

if(

mejor==null

){

mejor=c;

}

else{

if(

s<parseFloat(

mejor.Seccion

)

){

mejor=c;

}

}

}

});

return mejor;

}

/*========================================*/

function mostrar(sec,c){

if(!c){

resultado.innerHTML=

`
<div class="alert alert-danger">

No existe cable

</div>

`;

return;

}

resultado.innerHTML=

`

<div class="card">

<div class="card-body">

<h3>

Cable recomendado

</h3>

<hr>

<b>

Producto:

</b>

${c.Producto}

<br>

<b>

Sección:

</b>

${c.Seccion}

mm²

<br>

<b>

Voltaje:

</b>

${c.Voltaje}

<br>

<b>

Conductor:

</b>

${c.Conductor}

<br>

<b>

Aplicación:

</b>

${c.Aplicacion}

<br>

<br>

<button

class="btn btn-success"

onclick="abrirPDF(

'${c.PDF}'

)">

Ficha Técnica

</button>

</div>

</div>

`;

}
