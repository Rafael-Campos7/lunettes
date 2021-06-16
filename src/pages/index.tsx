import Head from 'next/head'
import { Information } from '../components/Information'
import { BackgroundContainer } from './style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>
      <BackgroundContainer>
        <div></div>
      </BackgroundContainer>
      <Information />
    </>
  )
}
