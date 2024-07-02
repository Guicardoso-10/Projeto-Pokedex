import {  Route, Routes } from "react-router-dom";
import { List } from "./list.jsx";
import { PokemonDetails } from "./inner-page/pokemonDetails.jsx";



const AppRoutes = () => {
    return (
         <Routes>
            <Route path='/' element={<List/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
        </Routes>
    )
}








export {AppRoutes}