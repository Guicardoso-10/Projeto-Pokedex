import { useEffect, useState } from "react"
import { setPokemon } from "../../objects/pokemon.jsx"
import { useParams, useLocation } from "react-router-dom"
import { useTheme, themes } from "../../../context/themeContext.jsx"
import './pokemonDetails.css'
import '../../../styles/responsive/inner-page.css'


export function PokemonDetails () {

    const { id } = useParams()
    const location = useLocation()
    const [pokemon, setPokemonData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [expandedAbilityIndex, setExpandedAbilityIndex] = useState(null)
    const { theme } = useTheme()

    const handleAbilityClick = (index) => {
        setExpandedAbilityIndex(prevIndex => {
            const newIndex = prevIndex === index ? null : index
            return newIndex
        })
    }

    useEffect( () => {
        async function fetchPokemonData() {
            setLoading(true)
            setPokemonData(null)
            try {
                const data = await setPokemon(id)
                setPokemonData(data)
            } catch (error) {
                console.log("Error fetching pokemon data:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchPokemonData()
    }, [id])

    if (loading) {
        return <div className="message">Loading...</div>
    }

    if (!pokemon) {
        return <div className="message">Error loading pokemon data...</div>
    }

    const abilities = pokemon.abilities
 

    return (
        <>
            <section className="info" id={theme === themes.light ? 'light-theme' : 'dark-theme'}>
                <img className="image" src={pokemon.image} alt={pokemon.name} />
                <div className="type-name">
                    <p className="name">{pokemon.name}</p>
                    <p className="type">type: {pokemon.type}</p>
                </div>
            </section>

            <div className="abilities">
                    <h2 className="titulo">Abilities</h2>
                    <ul className="abilities-list">
                        {
                            abilities.map((ability, index) => (
                                <li key={index} className="ability-item">
                                    <h3 className="item-title" onClick={() => handleAbilityClick(index)}>
                                        {ability.ability} <i className="fas fa-arrow-down"></i>
                                    </h3>
                                    {
                                        expandedAbilityIndex === index && (
                                            <p className="item-text" id={theme === themes.light ? 'light-theme' : 'dark-theme'}>{ability.effect}</p>
                                        )
                                    }
                                    
                                </li>
                            ))
                        }
                    </ul>
            </div>

            <div className="moves">
                        <h2 className="moves-title">Moves</h2>
                        <ul className="moves-list">
                            {
                                pokemon.moves.map((move, index) => (
                                    <li key={index} className="move-item" id={theme === themes.light ? 'light-theme' : 'dark-theme'}>
                                        {move}
                                    </li>
                                ))
                            }
                        </ul>
            </div>
        </>
    )
}