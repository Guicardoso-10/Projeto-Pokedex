import { getPokemonInfo } from "./getPokemonInfo.jsx";

async function getMoves (id) {
    const response = await getPokemonInfo(id)
    const data = response.moves
    const moves = []
    for (let i = 0; i < data.length; i++) {
        moves.push(data[i].move)
    }
    return moves
}

export async function fetchMoves (id) {
    const data = await getMoves(id)
    const moves = []
    for (let i = 0; i < data.length; i++) {
        moves.push(data[i].name)
    }
    return moves
}
