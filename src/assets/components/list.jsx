import React from 'react'
import {useState, useEffect} from 'react'
import { getPokemonNames } from '../functions/list/getPokemonNames.jsx'
import { getPokemonImages } from '../functions/list/getPokemonImages.jsx'
import { getPokemonIds } from '../functions/list/getPokemonIds.jsx'
import { Link } from 'react-router-dom'
import { useTheme, themes } from '../../context/themeContext.jsx'





export function List() {
    const [pokemons, setPokemons] = useState([])
    const [itensToShow, setItensToShow] = useState(10)
    const { theme } = useTheme()
    

    useEffect(() => {
        async function fetchPokemonData (itensToShow) {
            const names = await getPokemonNames(itensToShow)
            const images = await getPokemonImages(itensToShow)
            const ids = await getPokemonIds(itensToShow)

            const combinedData = names.map((name, index) => (
                {
                    name,
                    image: images[index],
                    id: ids[index]
                }
            ))
            setPokemons(combinedData)
        }
        fetchPokemonData(itensToShow)
    }, [itensToShow])



    

    const loadMore = () => {
        setItensToShow((itensToShow) => itensToShow + 10)
    }

    

    

    return (
        <div className="component">
            <h2 className="title">Lista de Pokemons</h2>
            <ul className="lista">
                {pokemons.map((pokemon, index) => (
                    <li key={index} className='item' id={theme === themes.light ? 'light-theme' : 'dark-theme'}>
                        {pokemon.name} <Link to={`/pokemon/${pokemon.id}`} className='imagem' ><img src={pokemon.image} alt={pokemon.name}/></Link>
                    </li>
                ))}
            </ul>
            <button className='botao' onClick={() => {
                loadMore()
            }}>Carregar mais</button>
        </div>
    )
}