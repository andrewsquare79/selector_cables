function agregarMensaje(texto,tipo){

let html=

`
<div class="${tipo}">

<div class="bubble">

${texto}

</div>

</div>

`;

chat.innerHTML+=html;

chat.scrollTop=chat.scrollHeight;

}

async function enviarPregunta(){

let texto=prompt.value;

agregarMensaje(texto,"msg-user");

prompt.value="";

let respuesta=

await consultarIA(texto);

agregarMensaje(

respuesta,

"msg-ai"

);

}
