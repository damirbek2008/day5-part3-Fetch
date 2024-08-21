// fetch = Function used for making HTTP reqyests to fetch resoueces.
//         (JSON style data, images, files)
//          Simplifies asynchronous data fetching in JavaScript and
//          used for interactinf with APIs to retrieve and send
//          data asynchronousl over the web.
//          fetch(url, {option})


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(responce => {
//         if(!responce.ok){
//             throw new Error("Could not fetch resorce")
//         }else{
//             return responce.json()
//         }
//     })
//     .then(data=>console.log(data))
//     .catch(error=>console.error(error))







async function fetchdata(){
    try{

        const pokemonName= document.getElementById("pokemonName").value.toLowerCase()


        const responce=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!responce.ok){
            throw new Error("Could not fetch resource")
        }
        const data=await responce.json()
        

        const pokemonSprite = data.sprites.front_default;
        const imgElement=document.getElementById("pokemonSprite")

        imgElement.src=pokemonSprite;
        imgElement.style.display="block"

    }catch(error){
        console.log(error);
    }
}















