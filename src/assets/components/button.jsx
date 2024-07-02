import React, { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"

export const Button = (props) => {
    
    const { theme } = useContext(ThemeContext)
    
    console.log('button themes', theme)

    return (
        <button {...props}
            style={{background: theme.background}}
        />
    )
}