// listas de partes que contiene la excusa
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//funcion para generar excusa aleatoria 
function generateExcuse () {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  
  return `${randomWho} ${randomAction} ${randomWhat}  ${randomWhen}.`;
}
//al cargar la pagina muestra la excusa
window.onload = function () {
    let excuseElement = document.getElementById("excuse");
    if (excuseElement) {
      excuseElement.innerHTML = generateExcuse();
    } 
      console.log("elemento #excuse no encontrado.");
    
};

