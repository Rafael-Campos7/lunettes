import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic'
import { Information } from '../components/Information'
import { ListProducts } from '../components/ListProducts'
import { BackgroundContainer } from './style'

type Image = {
  id: string;
  color_name: string;
  background: string;
  xs: string;
  md: string;
  lg: string;
}

type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  formattedPrice: string;
  discountedPrice: string;
  images: Image[];
  code: string;
  isNewCollection: boolean;
  discount: number; 
}

interface HomeProps {
  highlightedProducts: Product[];
}

export default function Home({ highlightedProducts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>
      <BackgroundContainer>
        <div></div>
      </BackgroundContainer>
      <Information />
      {highlightedProducts.length > 0 && <ListProducts products={highlightedProducts} title="Produtos em destaque" />}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const prismic = getPrismicClient(req)

  const response = await prismic.query(
    Prismic.Predicates.at('my.product.highlighted', true)
  )
    
  const highlightedProducts = response.results.map(({id, uid, data}) => {
    return {
      id: id,
      slug: uid, 
      name: data.product_name,
      price: data.price,
      discount: data.discount,
      formattedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(data.price),
      discountedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(data.price - ((data.discount / 100) * data.price)),
      images: data.images,
      isNewCollection: data.is_new_collection,
      code: data.code,
    }
  })

  return {
    props: {
      highlightedProducts,
    },
  }
}
