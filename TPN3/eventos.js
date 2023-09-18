import "./main.js";

// El problema principal en tu código es que la función getAllPersonajes() 
// no está retornando los datos que obtiene
//  de la API de manera adecuada. Debes asegurarte de que la función getAllPersonajes() 
// devuelva una promesa y resuelva con los datos que quieres utilizar. 
// Aquí está una corrección para tu código:

let imagenData = document.getElementById("imagen");
let boton = document.getElementById("boton");
let nombre = await mostrarImagenPersonaje();

console.log(nombre);

function getAllPersonajes() {
    const totalPeronajes = 633;

    return fetch("https://apisimpsons.fly.dev/api/personajes?limit=635&page=1", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            const nombres = [];
            for (let i = 0; i < Math.min(totalPeronajes, data.docs.length); i++) {
                nombres.push(data.docs[i].Nombre);
            }
            return nombres;
        })
        .catch((error) => {
            console.error(
                "Error en la solicitud fetch para obtener all personajes: ",
                error
            );
            throw error;
        });
}

async function mostrarImagenPersonaje() {
    try {
        const nombres = await getAllPersonajes();

        let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];

        const response = await fetch(
            `https://apisimpsons.fly.dev/api/personajes/find/${nombreAleatorio}`,
            {
                method: "GET",
            }
        );
        const data = await response.json();

        imagenData.setAttribute("src", data.result[0].Imagen);
        imagenData.setAttribute("alt", data.result[0].Nombre);

        return data.result[0].Nombre;
    } catch (error) {
        console.error("Error en la solicitud fetch para mostrar imagen: ", error);
    }
}



// boton.addEventListener("click", async () => {
//     try {
//       let nombre = await mostrarImagenPersonaje();
//       console.log(nombre);
//     } catch (error) {
//       console.error("Error al obtener y mostrar el nombre: ", error);
//     }
//   });



boton.addEventListener("click", async () => {
  let input = document.getElementById("name-img");

  console.log();
  console.log(input.value);



});

