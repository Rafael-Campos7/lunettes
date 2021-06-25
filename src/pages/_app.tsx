import { useState } from 'react'
import type { AppProps } from 'next/app'
import { BagProvider } from '../hooks/useBag'
import { ThemeProvider, } from 'styled-components'
import menuClosed from '../styles/themes/menuClosed'
import menuOpen from '../styles/themes/menuOpen'
import GlobalStyle from '../styles/global'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Gallery } from '../components/Gallery'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(menuClosed)

  const changeTheme = () => {
    setTheme(theme.title === 'menuClosed' ? menuOpen : menuClosed)
  }

  return (
    <BagProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header>
          <Menu toggleTheme={changeTheme} />
        </header>
        <main>
          <Component {...pageProps} />
          <Gallery />
        </main>
        <Footer />
      </ThemeProvider>
    </BagProvider>
  )
}

export default MyApp
