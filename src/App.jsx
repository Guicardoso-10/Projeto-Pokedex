import './App.css'
import '../src/styles/responsive/main.css'
import React from 'react'
import { ThemeProvider, useTheme, themes } from './context/themeContext.jsx'
import Toggler from './assets/components/themeToggler.jsx'
import Title from './assets/components/title.jsx'
import Search from './assets/components/searchBar.jsx'
import { AppRoutes } from './assets/components/routes.jsx'
import { BrowserRouter } from 'react-router-dom'


function App() {
  
  const { theme } = useTheme()
  return (
    <>
      <header className='cabecalho'>
        <Search />
        <Title />
        <Toggler />
      </header>
      
      <main className='principal' id={theme === themes.light ? 'light-theme' : 'dark-theme'}>
        <AppRoutes/>
      </main>
    </>
  )

}

const RootApp = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default RootApp



