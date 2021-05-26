import Head from 'next/head'

import { Information } from '../components/Information'
import { Footer } from '../components/Footer'
import { Gallery } from '../components/Gallery'
import { Menu } from '../components/Menu'

import { BackgroundContainer } from './style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>
      <header>
        <Menu />
      </header>
      <main>
        <BackgroundContainer>
          <div></div>
        </BackgroundContainer>
        <Information />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
