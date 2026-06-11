async function consultarIA(texto){

const API_KEY="TU_API_KEY";

const response=

await fetch(

"https://api.openai.com/v1/chat/completions",

{

method:"POST",

headers:{

"Authorization":

"Bearer "+API_KEY,

"Content-Type":

"application/json"

},

body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[

{

role:"system",

content:

"Eres un ingeniero especialista en selección de cables Prysmian."

},

{

role:"user",

content:texto

}

]

})

});

const json=

await response.json();

return json

.choices[0]

.message.content;

}
