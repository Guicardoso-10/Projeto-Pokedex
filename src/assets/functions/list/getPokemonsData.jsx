export async function getPokemonData (limit) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
    const resposta = await fetch(url)
    const dados = await resposta.json()
    const pokemons = dados.results
    

    return pokemons
}














