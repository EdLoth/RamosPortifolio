import React, { useState } from "react"
import Home from "./pages/Home"
import { ThemeProvider, DefaultTheme  } from "styled-components"
import {Header} from './components/Header'
import usePeristedState from './utils/usePersistedState'
import './global.scss'

import dark from './themes/dark'
import light from './themes/light'


function App() {
  const [theme, setTheme] =  usePeristedState<DefaultTheme>('theme', light);;

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  console.log(theme)

  return (
   <ThemeProvider theme={theme}>
    <Header toggleTheme={toggleTheme} />
    <Home />
   </ThemeProvider>
  )
}

export default App
