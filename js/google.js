/*=========================================================
PRYSMIAN CABLE SELECTOR AI
google.js

Lee Google Sheets mediante PapaParse
Genera catálogo dinámico
Genera filtros
Cache Local
=========================================================*/

//====================================================

const SHEET_URL =
"https://docs.google.com/spreadsheets/d/e/XXXXXXXX/pub?output=csv";

//====================================================

let catalogo=[];

//====================================================

function cargarCatalogo(){

mostrarLoading(true);

Papa.parse(

SHEET_URL,

{

download:true,

header:true,

skipEmptyLines:true,

complete:function(result){

catalogo=result.data;

console.log(

"Productos cargados:",

catalogo.length

);

guardarCache();

generarFiltros();

buscar();

mostrarLoading(false);

},

error:function(){

mostrarLoading(false);

alert(

"No fue posible cargar Google Sheets"

);

}

});

}

//====================================================

function guardarCache(){

localStorage.setItem(

"catalogo",

JSON.stringify(catalogo)

);

}

//====================================================

function cargarCache(){

let data=

localStorage.getItem("catalogo");

if(data){

catalogo=

JSON.parse(data);

generarFiltros();

buscar();

}

}

//====================================================

function mostrarLoading(flag){

let x=

document.getElementById("loading");

if(!x)return;

x.style.display=

flag?

"flex":

"none";

}

//====================================================

function valoresUnicos(campo){

let lista=

catalogo

.map(

x=>x[campo]

)

.filter(

x=>x!=""&&x!=null

);

return [...new Set(lista)];

}

//====================================================

function llenarSelect(id,campo){

let s=

document.getElementById(id);

if(!s)return;

let lista=

valoresUnicos(campo);

lista.sort();

lista.forEach(v=>{

let o=

document.createElement("option");

o.value=v;

o.innerHTML=v;

s.appendChild(o);

});

}

//====================================================

function generarFiltros(){

llenarSelect(

"familia",

"Familia"

);

llenarSelect(

"voltaje",

"Voltaje"

);

llenarSelect(

"aplicacion",

"Aplicacion"

);

llenarSelect(

"instalacion",

"Instalacion"

);

llenarSelect(

"ambiente",

"Ambiente"

);

llenarSelect(

"conductor",

"Conductor"

);

}

//====================================================

window.onload=function(){

if(

localStorage.getItem("catalogo")

){

cargarCache();

}

cargarCatalogo();

}

//====================================================

function limpiarFiltros(){

document.getElementById(

"familia"

).value="";

document.getElementById(

"voltaje"

).value="";

document.getElementById(

"aplicacion"

).value="";

document.getElementById(

"instalacion"

).value="";

document.getElementById(

"ambiente"

).value="";

document.getElementById(

"conductor"

).value="";

buscar();

}

//====================================================

function totalProductos(){

return catalogo.length;

}

//====================================================

function obtenerProducto(id){

return catalogo.find(

x=>x.ID==id

);

}

//====================================================

function abrirPDF(url){

document.getElementById(

"pdf"

).src=url;

let modal=

new bootstrap.Modal(

document.getElementById(

"modalFicha"

)

);

modal.show();

}

//====================================================

function exportarJSON(){

console.log(

JSON.stringify(

catalogo,

null,

2

)

);

}

//====================================================

function buscarTexto(txt){

txt=

txt.toLowerCase();

return catalogo.filter(c=>

JSON.stringify(c)

.toLowerCase()

.includes(txt)

);

}

//====================================================

function refrescar(){

localStorage.removeItem(

"catalogo"

);

cargarCatalogo();

}

//====================================================
