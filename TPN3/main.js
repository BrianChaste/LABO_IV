import { getPersonajesAPI } from "./Conexion-API.js";

const imagenData = document.getElementById("imagen");
const boton = document.getElementById("boton");
const botonJugar = document.getElementById("jugar-boton");
const game = document.getElementById("game");

function mostrarJuego () {
    game.style.display = 'block';
}


async function mostrarPersonaje(){
    const personajes = await getPersonajesAPI();
    let personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];

    mostrarJuego();
    
    imagenData.setAttribute("src", personajeAleatorio.Imagen);
    imagenData.setAttribute("alt",personajeAleatorio.Nombre);

    //Para ver el nombre del personaje x consola
    //!console.log(imagenData.getAttribute("alt"));

}



botonJugar.addEventListener("click", mostrarPersonaje);

boton.addEventListener("click", () =>{

    const input = document.getElementById("name-img");

    if(imagenData.getAttribute("alt") == input.value){
        alert("PERSONAJE ADIVINADO");
    }else{
        alert(`INCORRECTO EL PERSONAJE ERA: ${imagenData.getAttribute("alt")}`);
    }
})
