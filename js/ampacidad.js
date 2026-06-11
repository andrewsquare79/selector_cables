/*======================================
 Calculadora Ampacidad
======================================*/

const tablaCu={

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

300:477,

400:545,

500:626

};

const tablaAl={

16:61,

25:80,

35:99,

50:119,

70:151,

95:182,

120:210,

150:240,

185:274,

240:321,

300:369,

400:422,

500:485

};

function calcularAmpacidad(){

let I=

parseFloat(

corriente.value

);

let mat=

material.value;

let tabla=

mat=="Cobre"

?

tablaCu

:

tablaAl;

let seccion=

seleccionar(

I,

tabla

);

mostrar(

I,

seccion,

tabla[seccion]

);

}

/*=============================*/

function seleccionar(

I,

tabla

){

for(let s in tabla){

if(

tabla[s]>=I

){

return s;

}

}

return "Mayor a 500 mm²";

}

/*=============================*/

function mostrar(

I,

s,

amp

){

resultado.innerHTML=

`

<div class="card">

<div class="card-body">

<h3>

Resultado

</h3>

<hr>

<b>

Corriente:

</b>

${I} A

<br>

<b>

Sección recomendada:

</b>

${s} mm²

<br>

<b>

Ampacidad:

</b>

${amp} A

<br><br>

<button

class="btn btn-success">

Buscar cable

</button>

</div>

</div>

`;

}

/*=============================*/

console.log(

"Calculadora cargada"

);
