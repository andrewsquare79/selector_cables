/*==========================================================
 PRYSMIAN CABLE SELECTOR AI
 ia.js
 Motor IA basado en reglas
==========================================================*/

const DICCIONARIO = {

    tension:{

        "220v":"0.6/1kV",

        "380v":"0.6/1kV",

        "440v":"0.6/1kV",

        "460v":"0.6/1kV",

        "480v":"0.6/1kV",

        "600v":"0.6/1kV",

        "5kv":"5kV",

        "15kv":"15kV",

        "25kv":"25kV",

        "35kv":"35kV"

    },

    aplicacion:{

        "motor":"Motores",

        "bomba":"Bombeo",

        "sumergible":"Bombeo",

        "subestacion":"Subestación",

        "alimentador":"Alimentador",

        "solar":"Solar",

        "fotovoltaico":"Solar",

        "camaronera":"Camaronera",

        "mina":"Minería",

        "mineria":"Minería",

        "industrial":"Industrial",

        "residencial":"Residencial",

        "edificio":"Edificios"

    },

    instalacion:{

        "ducto":"Ducto",

        "bandeja":"Bandeja",

        "enterrado":"Enterrado",

        "subterraneo":"Enterrado",

        "aereo":"Aéreo",

        "poste":"Aéreo",

        "interior":"Interior",

        "exterior":"Exterior",

        "sumergido":"Sumergido"

    },

    ambiente:{

        "humedo":"Húmedo",

        "agua":"Húmedo",

        "quimico":"Corrosivo",

        "corrosivo":"Corrosivo",

        "salino":"Corrosivo",

        "uv":"Exterior",

        "sol":"Exterior"

    },

    conductor:{

        "cobre":"Cobre",

        "aluminio":"Aluminio"

    }

};

/*======================================================*/

function buscarIA(){

    let texto=document

        .getElementById("prompt")

        .value

        .toLowerCase();

    interpretar(texto);

    buscar();

}

/*======================================================*/

function interpretar(texto){

    detectarTension(texto);

    detectarAplicacion(texto);

    detectarInstalacion(texto);

    detectarAmbiente(texto);

    detectarConductor(texto);

}

/*======================================================*/

function detectarTension(texto){

    Object.keys(

        DICCIONARIO.tension

    )

    .forEach(k=>{

        if(

            texto.includes(k)

        ){

            document

            .getElementById("voltaje")

            .value=

            DICCIONARIO

            .tension[k];

        }

    });

}

/*======================================================*/

function detectarAplicacion(texto){

    Object.keys(

        DICCIONARIO.aplicacion

    )

    .forEach(k=>{

        if(

            texto.includes(k)

        ){

            document

            .getElementById("aplicacion")

            .value=

            DICCIONARIO

            .aplicacion[k];

        }

    });

}

/*======================================================*/

function detectarInstalacion(texto){

    Object.keys(

        DICCIONARIO.instalacion

    )

    .forEach(k=>{

        if(

            texto.includes(k)

        ){

            document

            .getElementById("instalacion")

            .value=

            DICCIONARIO

            .instalacion[k];

        }

    });

}

/*======================================================*/

function detectarAmbiente(texto){

    Object.keys(

        DICCIONARIO.ambiente

    )

    .forEach(k=>{

        if(

            texto.includes(k)

        ){

            document

            .getElementById("ambiente")

            .value=

            DICCIONARIO

            .ambiente[k];

        }

    });

}

/*======================================================*/

function detectarConductor(texto){

    Object.keys(

        DICCIONARIO.conductor

    )

    .forEach(k=>{

        if(

            texto.includes(k)

        ){

            document

            .getElementById("conductor")

            .value=

            DICCIONARIO

            .conductor[k];

        }

    });

}

/*======================================================*/

function limpiarIA(){

    document

    .getElementById("prompt")

    .value="";

}

/*======================================================*/

function mostrarInterpretacion(){

    console.log({

        voltaje:

        document.getElementById("voltaje").value,

        aplicacion:

        document.getElementById("aplicacion").value,

        instalacion:

        document.getElementById("instalacion").value,

        ambiente:

        document.getElementById("ambiente").value,

        conductor:

        document.getElementById("conductor").value

    });

}

/*======================================================*/

console.log(

"IA local cargada"

);
