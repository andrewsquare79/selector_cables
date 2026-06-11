/*=========================================
ADMINISTRADOR CATÁLOGO
=========================================*/

let productoActual=null;

/*=========================================*/

function cargarTabla(){

let html="";

html+="<table class='table table-bordered'>";

html+="<tr>";

html+="<th>ID</th>";

html+="<th>Producto</th>";

html+="<th>Voltaje</th>";

html+="<th>Acciones</th>";

html+="</tr>";

catalogo.forEach((c,i)=>{

html+=`

<tr>

<td>${i}</td>

<td>${c.Producto}</td>

<td>${c.Voltaje}</td>

<td>

<button
class='btn btn-primary btn-sm'

onclick='editar(${i})'>

Editar

</button>

<button
class='btn btn-danger btn-sm'

onclick='eliminar(${i})'>

Eliminar

</button>

</td>

</tr>

`;

});

html+="</table>";

tablaProductos.innerHTML=html;

}

/*=========================================*/

function editar(i){

productoActual=i;

let c=catalogo[i];

Object.keys(c).forEach(k=>{

let obj=document.getElementById(k);

if(obj){

obj.value=c[k];

}

});

}

/*=========================================*/

function nuevoProducto(){

productoActual=null;

document.querySelectorAll("input").forEach(x=>{

x.value="";

});

}

/*=========================================*/

function guardarProducto(){

let obj={

Producto:Producto.value,

Familia:Familia.value,

Voltaje:Voltaje.value,

Conductor:Conductor.value,

Seccion:Seccion.value,

Aplicacion:Aplicacion.value,

Instalacion:Instalacion.value,

PDF:PDF.value,

Imagen:Imagen.value

};

if(productoActual==null){

catalogo.push(obj);

}
else{

catalogo[productoActual]=obj;

}

guardarCache();

cargarTabla();

alert("Producto guardado");

}

/*=========================================*/

function eliminar(i){

if(confirm("Eliminar producto?")){

catalogo.splice(i,1);

guardarCache();

cargarTabla();

}

}

/*=========================================*/

function buscarProducto(){

let txt=buscar.value.toLowerCase();

let lista=catalogo.filter(c=>

JSON.stringify(c)

.toLowerCase()

.includes(txt)

);

mostrarBusqueda(lista);

}

/*=========================================*/

function mostrarBusqueda(lista){

let html="";

html+="<table class='table'>";

html+="<tr>";

html+="<th>Producto</th>";

html+="<th>Voltaje</th>";

html+="</tr>";

lista.forEach(c=>{

html+=`

<tr>

<td>

${c.Producto}

</td>

<td>

${c.Voltaje}

</td>

</tr>

`;

});

html+="</table>";

tablaProductos.innerHTML=html;

}

/*=========================================*/

window.onload=function(){

setTimeout(

cargarTabla,

1000

);

}
