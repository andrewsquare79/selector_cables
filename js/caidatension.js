/*=============================================
CALCULADORA DE CAÍDA DE TENSIÓN
=============================================*/

const resistividad={

"Cobre":0.01724,

"Aluminio":0.02826

};

function calcularCaida(){

let V=parseFloat(voltaje.value);

let I=parseFloat(corriente.value);

let L=parseFloat(longitud.value);

let fp=parseFloat(fp.value);

let S=parseFloat(seccion.value);

let mat=material.value;

let rho=resistividad[mat];

let sistema=sistema.value;

let dv=0;

if(sistema=="Trifásico"){

dv=Math.sqrt(3)*I*rho*L/S;

}

else{

dv=2*I*rho*L/S;

}

let porcentaje=

dv/V*100;

mostrarResultado(

dv,

porcentaje

);

}

/*==============================*/

function mostrarResultado(

dv,

porcentaje

){

let lim=

parseFloat(

limite.value

);

let estado=

porcentaje<=lim

?

"Cumple"

:

"No cumple";

let color=

porcentaje<=lim

?

"green"

:

"red";

resultado.innerHTML=

`

<div class="card">

<div class="card-body">

<h3>

Resultado

</h3>

<hr>

<b>

Caída:

</b>

${dv.toFixed(2)} V

<br>

<b>

Caída %:

</b>

<span style="color:${color}">

${porcentaje.toFixed(2)} %

</span>

<br>

<b>

Estado:

</b>

${estado}

</div>

</div>

`;

}
