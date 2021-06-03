import Head from 'next/head'

import { Information } from '../components/Information'
import { Gallery } from '../components/Gallery'

import { BackgroundContainer } from './style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>
      <main>
        <BackgroundContainer>
          <div></div>
        </BackgroundContainer>
        <Information />
        <Gallery />
      </main>
    </>
  )
}
