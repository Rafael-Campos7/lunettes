import { useState } from 'react'

import type { AppProps } from 'next/app'

import { ThemeProvider, } from 'styled-components'
import menuClosed from '../styles/themes/menuClosed'
import menuOpen from '../styles/themes/menuOpen'
import GlobalStyle from '../styles/global'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(menuClosed)

  const changeTheme = () => {
    setTheme(theme.title === 'menuClosed' ? menuOpen : menuClosed)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>
        <Menu toggleTheme={changeTheme} />
      </header>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
