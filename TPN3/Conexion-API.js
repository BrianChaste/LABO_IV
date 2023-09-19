
export async function getPersonajesAPI(){

    const url = `https://apisimpsons.fly.dev/api/personajes?limit=635&page=1`;

    try{
        const responseAPI = await fetch (url, {method: 'GET'});

        if (!responseAPI.ok){
                throw new Error("Error en consumir la API");
        }
    
        const data = await responseAPI.json();
    
        return data.docs;
    }catch (error){
        throw new Error("Error en catch al consumiar la API");
    }
}