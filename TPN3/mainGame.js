import { getPersonajesAPI } from "./conexion-api.js";

const imagenData = document.getElementById("imagen");
const boton = document.getElementById("boton");
const botonJugar = document.getElementById("jugar-boton");
const botonAyuda = document.getElementById("personaje-pista");
const game = document.getElementById("game");
const historiaData = document.getElementById("personaje-historia");

game.style.display = 'none';
botonJugar.innerHTML = "JUGAR";

async function playGame(){
    const personajes = await getPersonajesAPI();
    var personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];

    game.style.display = 'block';
    botonJugar.innerHTML = "REFRESH"
    
    imagenData.setAttribute("src", personajeAleatorio.Imagen);
    imagenData.setAttribute("alt",personajeAleatorio.Nombre);

    //Para ver el nombre del personaje x consola
    //!console.log(imagenData.getAttribute("alt"));
}

boton.addEventListener("click", () =>{

    const input = document.getElementById("name-img");

    if(imagenData.getAttribute("alt") == input.value){
        alert("PERSONAJE ADIVINADO");
    }else{
        alert(`INCORRECTO EL PERSONAJE ERA: ${imagenData.getAttribute("alt")}`);
    }
})


botonJugar.addEventListener("click", playGame);



