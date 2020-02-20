import React, { useState } from 'react'
import { Switch } from 'antd'

const ThemeChanger = (props) => {  
    const [theme, changeThemeState] = useState(true)

    const changeTheme = ( ) => {
      changeThemeState(!theme)
      if (theme) {
        document.body.style.setProperty('--background-color', '#eeeeee')
        document.body.style.setProperty('--link-color', '#e06c75')
        document.body.style.setProperty('--link-color-hover', '#986801')
        document.body.style.setProperty('--special-text-color', '#a626a4')
        document.body.style.setProperty('--normal-text-color', '#000000')
        document.body.style.setProperty('--special-text-color-two', '#00cccc')
        document.body.style.setProperty('--alternate-background', '#011627')
      } else {
        document.body.style.setProperty('--background-color', '#011627')
        document.body.style.setProperty('--link-color', '#f78c6c')
        document.body.style.setProperty('--link-color-hover', '#f86c6c')
        document.body.style.setProperty('--special-text-color', '#22da6e')
        document.body.style.setProperty('--normal-text-color', '#637777')
        document.body.style.setProperty('--special-text-color-two', '#00cccc')
        document.body.style.setProperty('--alternate-background', '#eeeeee')
  
      }
    }

    return <div className='theme-container'>
        {theme ? <span className='theme-identifier'> dark theme </span> : <span className='theme-identifier'> light theme </span>}
        <Switch
        className='theme-button'
        checked={theme}
        onChange={changeTheme}
        />
    </div>
}

export default ThemeChanger