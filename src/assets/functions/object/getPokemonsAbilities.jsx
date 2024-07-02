import { getPokemonInfo } from "./getPokemonInfo.jsx";

async function getAbilities (id) {
    const info = await getPokemonInfo(id)
    const abilitiesInfo = []
    for (let i = 0; i < info.abilities.length; i++) {
        abilitiesInfo.push(info.abilities[i].ability)
    }
    
    return abilitiesInfo
}

export async function fetchAbilities (id) {
    const data = await getAbilities(id)
    const abilities = []
    for (let i = 0; i < data.length; i++) {
        abilities.push(data[i].name)
    }

    return abilities
}



async function getDescriptions (id) {
    const info = await getPokemonInfo(id)
    const descriptionData = []

    if (info.abilities && info.abilities.length > 0) {
        for (let i = 0; i < info.abilities.length; i++) {
            let abilityUrl = info.abilities[i].ability.url
            let response = await fetch(abilityUrl)
            let data = await response.json()
            descriptionData.push(data)
        }
    }

    return descriptionData
}


export async function fetchDescriptions (id) {
    const response = await getDescriptions(id)
    const effects = []
    const languages = []
    const descriptions = []
    for (let i = 0; i < response.length; i++) {
        if (response[i].effect_entries && response[i].effect_entries.length > 0) {
            const englishEntries = response[i].effect_entries.filter(entry => entry.language.name === 'en')

            if (englishEntries.length > 0) {
                effects.push(englishEntries[0].effect)
                languages.push(englishEntries[0].language)
            }
        }
    }

    for (let i = 0; i < languages.length; i++) {
        if (languages[i] && languages[i].name) {
            descriptions[i] = effects[i]
        }
    }
    return descriptions
}








