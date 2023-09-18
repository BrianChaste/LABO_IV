let imagenData = document.getElementById("imagen");

function getAllPersonajes() {
    const totalPeronajes = 633;
    const nombres = [];

    fetch("https://apisimpsons.fly.dev/api/personajes?limit=635&page=1", {
        method: "GET",
    })
        .then((responde) => responde.json())
        .then((data) => {
            for (let i = 0; i <= totalPeronajes; i++) {
                nombres.push(data.docs[i].Nombre);
            }

            return nombres;

            // imagenData.setAttribute("src", data.result[0].Imagen);
            //! Para acceder a los atributos, primer hay que acceder al arreglo, sino, nos devuelve codigo 404
        })
        .catch((error) => {
            console.error(
                "Error en la solicitud fetch para obtener all personajes: ",
                error
            );
        });
}

async function mostrarImagenPersonaje() {
    let nombres = await getAllPersonajes();

    let nombreAleatorio = nombres[Math.floor(Math.random() * 300)];

    fetch(`https://apisimpsons.fly.dev/api/personajes/find/${nombreAleatorio}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            imagenData.setAttribute("src", data.result[0].Imagen);
            imagenData.setAttribute("alt", data.result[0].Nombre);

            return data.result[0].Nombre;
        })
        .catch((error) => {
            console.error("Error en la solicitud fetch para mostrar imagen: ", error);
        });
}

