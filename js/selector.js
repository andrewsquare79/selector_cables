/*======================================================
 PRYSMIAN CABLE SELECTOR AI
 selector.js

 Motor Inteligente de Recomendación

======================================================*/

function buscar(){

    let familia=document.getElementById("familia").value;

    let voltaje=document.getElementById("voltaje").value;

    let aplicacion=document.getElementById("aplicacion").value;

    let instalacion=document.getElementById("instalacion").value;

    let ambiente=document.getElementById("ambiente").value;

    let conductor=document.getElementById("conductor").value;

    let lszh=document.getElementById("lszh").value;

    let ranking=[];

    catalogo.forEach(c=>{

        let score=0;

        //-----------------------------------

        if(familia!=""){

            if(c.Familia==familia){

                score+=15;

            }

        }

        //-----------------------------------

        if(voltaje!=""){

            if(c.Voltaje==voltaje){

                score+=40;

            }

        }

        //-----------------------------------

        if(aplicacion!=""){

            if(

                (c.Aplicacion||"")

                .toLowerCase()

                .includes(

                    aplicacion.toLowerCase()

                )

            ){

                score+=30;

            }

        }

        //-----------------------------------

        if(instalacion!=""){

            if(

                (c.Instalacion||"")

                .toLowerCase()

                .includes(

                    instalacion.toLowerCase()

                )

            ){

                score+=20;

            }

        }

        //-----------------------------------

        if(ambiente!=""){

            if(

                (c.Ambiente||"")

                .toLowerCase()

                .includes(

                    ambiente.toLowerCase()

                )

            ){

                score+=15;

            }

        }

        //-----------------------------------

        if(conductor!=""){

            if(c.Conductor==conductor){

                score+=5;

            }

        }

        //-----------------------------------

        if(lszh!=""){

            if(c.LSZH==lszh){

                score+=5;

            }

        }

        //-----------------------------------

        ranking.push({

            score:score,

            cable:c

        });

    });

    //-----------------------------------

    ranking.sort(

        (a,b)=>

        b.score-a.score

    );

    //-----------------------------------

    mostrarResultados(

        ranking.slice(0,20)

    );

}

/*==========================================*/

function mostrarResultados(lista){

    let html="";

    lista.forEach(r=>{

        html+=crearCard(

            r.cable,

            r.score

        );

    });

    document

    .getElementById(

        "resultados"

    )

    .innerHTML=html;

}

/*==========================================*/

function crearCard(c,score){

return `

<div class="col-lg-6 mb-4 fadein">

<div class="producto">

<img src="${c.Imagen||'img/cable.png'}">

<h3>${c.Producto}</h3>

<div class="score">

⭐ ${score} puntos

</div>

<br>

<span class="badge badge-bt">

${c.Familia}

</span>

<br><br>

<b>Voltaje:</b>

${c.Voltaje}

<br>

<b>Conductor:</b>

${c.Conductor}

<br>

<b>Aplicación:</b>

${c.Aplicacion}

<br>

<b>Instalación:</b>

${c.Instalacion}

<br>

<b>Ambiente:</b>

${c.Ambiente}

<br>

<b>LSZH:</b>

${c.LSZH}

<br><br>

<button

class="btn btn-primary btn-sm"

onclick="abrirPDF(

'${c.PDF}'

)">

Ficha Técnica

</button>

</div>

</div>

`;

}

/*==========================================*/

function top3(){

let ranking=[];

catalogo.forEach(c=>{

ranking.push({

score:0,

cable:c

});

});

ranking.sort(

(a,b)=>

b.score-a.score

);

return ranking.slice(0,3);

}

/*==========================================*/

function mejorCable(){

let r=

document

.getElementsByClassName(

"producto"

);

if(r.length>0){

r[0]

.style.border=

"3px solid green";

}

}

/*==========================================*/

function limpiar(){

document

.getElementById(

"resultados"

)

.innerHTML="";

}

/*==========================================*/

function buscarRapido(texto){

texto=

texto.toLowerCase();

let lista=

catalogo.filter(c=>

JSON.stringify(c)

.toLowerCase()

.includes(texto)

);

mostrarResultados(

lista.map(c=>

({

score:100,

cable:c

})

)

);

}

/*==========================================*/

function contarResultados(){

return

document

.getElementsByClassName(

"producto"

)

.length;

}

/*==========================================*/

function ordenarNombre(){

catalogo.sort(

(a,b)=>

a.Producto.localeCompare(

b.Producto

)

);

buscar();

}

/*==========================================*/

function ordenarVoltaje(){

catalogo.sort(

(a,b)=>

a.Voltaje.localeCompare(

b.Voltaje

)

);

buscar();

}

/*==========================================*/

function favoritos(){

return JSON.parse(

localStorage.getItem(

"favoritos"

)||"[]"

);

}

/*==========================================*/

function agregarFavorito(id){

let fav=

favoritos();

if(

!fav.includes(id)

){

fav.push(id);

}

localStorage.setItem(

"favoritos",

JSON.stringify(fav)

);

}

/*==========================================*/

function quitarFavorito(id){

let fav=

favoritos();

fav=

fav.filter(

x=>x!=id

);

localStorage.setItem(

"favoritos",

JSON.stringify(fav)

);

}

/*==========================================*/

function verFavoritos(){

let fav=

favoritos();

let lista=

catalogo.filter(

c=>

fav.includes(c.ID)

);

mostrarResultados(

lista.map(

x=>

({

score:999,

cable:x

})

)

);

}

/*==========================================*/

console.log(

"Motor IA cargado"

);

/*==========================================*/
