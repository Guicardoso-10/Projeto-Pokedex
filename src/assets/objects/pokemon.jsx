import { getPokemonInfo } from "../functions/object/getPokemonInfo.jsx"
import { fetchMoves } from "../functions/object/getPokemonMoves.jsx"
import { fetchAbilities, fetchDescriptions } from "../functions/object/getPokemonsAbilities.jsx"






export async function setPokemon (id) {

    const info = await getPokemonInfo(id)
    const movesNames = await fetchMoves(id)
    const abilitiesNames = await fetchAbilities(id)
    const abilitiesDescriptions = await fetchDescriptions(id)


    const pokemon = {
        name: info.name,
        id: info.id,
        image: info.sprites.front_default,
        type: info.types[0].type.name,
        moves: [],
        abilities: []
    }

    function setMoves () {
        for (let i = 0; i < movesNames.length; i++) {
            pokemon.moves[i] = movesNames[i]
        }
    }


    function setAbilities () {
        for (let i = 0; i < abilitiesNames.length; i++) {
            pokemon.abilities.push({
                ability: abilitiesNames[i],
                effect: abilitiesDescriptions[i]
            })
        }
    }

    
    setMoves()
    setAbilities()
    

    return pokemon
}



