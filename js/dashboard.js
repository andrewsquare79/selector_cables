/*==========================================
Dashboard Comercial
==========================================*/

window.onload=function(){

setTimeout(

iniciarDashboard,

1000

);

}

/*==========================================*/

function iniciarDashboard(){

actualizarKPIs();

graficarFamilias();

graficarAplicaciones();

mostrarBusquedas();

}

/*==========================================*/

function actualizarKPIs(){

kpiProductos.innerHTML=

catalogo.length;

kpiBT.innerHTML=

catalogo.filter(

x=>x.Familia=="BT"

).length;

kpiMT.innerHTML=

catalogo.filter(

x=>x.Familia=="MT"

).length;

kpiLSZH.innerHTML=

catalogo.filter(

x=>x.LSZH=="Sí"

).length;

}

/*==========================================*/

function contar(campo){

let obj={};

catalogo.forEach(c=>{

obj[c[campo]]=

(obj[c[campo]]||0)+1;

});

return obj;

}

/*==========================================*/

function graficarFamilias(){

let d=

contar("Familia");

new Chart(

graficoFamilias,

{

type:"bar",

data:{

labels:Object.keys(d),

datasets:[{

label:"Productos",

data:Object.values(d)

}]

}

}

);

}

/*==========================================*/

function graficarAplicaciones(){

let d=

contar("Aplicacion");

new Chart(

graficoAplicacion,

{

type:"pie",

data:{

labels:Object.keys(d),

datasets:[{

data:Object.values(d)

}]

}

}

);

}

/*==========================================*/

function mostrarBusquedas(){

let lista=

JSON.parse(

localStorage.getItem(

"busquedas"

)||"[]"

);

let obj={};

lista.forEach(x=>{

obj[x]=(obj[x]||0)+1;

});

let html="";

Object.keys(obj).forEach(k=>{

html+=`

<tr>

<td>${k}</td>

<td>${obj[k]}</td>

</tr>

`;

});

tablaBusquedas.innerHTML=

html;

}

/*==========================================*/

function registrarBusqueda(txt){

let lista=

JSON.parse(

localStorage.getItem(

"busquedas"

)||"[]"

);

lista.push(txt);

localStorage.setItem(

"busquedas",

JSON.stringify(lista)

);

}
