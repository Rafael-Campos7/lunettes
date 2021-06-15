import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Information } from '../../components/Information'
import { Background } from '../../components/Background/'
import { ProductDetails } from '../../components/ProductDetails'
import { ProductCharacteristics } from '../../components/ProductCharacteristics'
import { Container, ProductInformation, Description } from './styles'
import { data } from './data'

type Color = {
  name: string;
  background: string;
}

type Image = {
  id: string;
  url: string;
  color: Color;
  allImages: {
    xs: string;
    md: string;
    lg: string;
  };
}

type Details = {
  accessories: string;
  bridge: string;
  front: string;
  hast: string;
  height: string;
  lens: string;
  material: string;
  size: string;
  warranty: string;
}

type Product = {
  code: string;
  name: string;
  price: number;
  formattedPrice: string;
  discountedPrice: string;
  category: string;
  styles: string[];
  description: string;
  details: Details,
  discount: number;
  images: Image[];
  colors: Color[];
}

interface DetailsProps {
  product: Product,
}

export default function Details({ product }: DetailsProps) {
  return (
    <>
      <Head>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>
      <Background height="130px" />
      <Container>
        <ProductDetails product={product} />
        <ProductInformation>
          <Description>
            <h3>Descrição</h3>
            <p>{product.description}</p>
          </Description>
          <ProductCharacteristics details={product.details} />
        </ProductInformation>
      </Container>
      <Information />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const product = {
    code: data.code,
    name: data.productName,
    price: data.price,
    formattedPrice: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(data.price),
    discountedPrice: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(data.price - ((data.discount / 100) * data.price)),
    category: data.category,
    styles: data.subcategories,
    description: data.description,
    details: data.details,
    discount: data.discount,
    images: data.images,
    colors: data.images.reduce((colors: Color[], { color }) => {
      if (color.name !== 'NOTCOLOR') {
        colors.push(color)
        return colors
      }
      return colors
    }, []),
  }

  return {
    props: {
      product,
    },
  }
}