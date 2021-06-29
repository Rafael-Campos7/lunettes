import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'
import { Information } from '../../components/Information'
import { Background } from '../../components/Background/'
import { ProductDetails } from '../../components/ProductDetails'
import { ProductCharacteristics } from '../../components/ProductCharacteristics'
import { ListProducts } from '../../components/ListProducts'
import { Container, ProductInformation, Description } from './styles'

type Color = {
  name: string;
  background: string;
}

type Style = {
  name: string;
}

type Image = {
  id: string;
  color_name: string;
  background: string;
  xs: string;
  md: string;
  lg: string;
}

type Detail = {
  name: string;
  value: string;
}

type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  styles: Style[];
  price: number;
  formattedPrice: string;
  discountedPrice: string;
  images: Image[];
  code: string;
  description: string,
  details: Detail[],
  isNewCollection: boolean;
  discount: number;
  colors: Color[];
}

interface DetailsProps {
  product: Product,
  relatedProducts: Product[];
}

export default function Details({ product, relatedProducts }: DetailsProps) {
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
      {relatedProducts.length > 0 && <ListProducts products={relatedProducts} title="Produtos Relacionados" />}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const prismic = getPrismicClient(req)
  const { slug } = params

  const response = await prismic.getByUID('product', String(slug), {})

  const relatedIds = response.data.associated.map(({ product_ref }) => product_ref.id)

  const related = await prismic.getByIDs(relatedIds, {})

  const product = {
    id: response.id,
    slug: response.uid,
    name: response.data.product_name,
    price: response.data.price,
    discount: response.data.discount,
    formattedPrice: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(response.data.price),
    discountedPrice: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(response.data.price - ((response.data.discount / 100) * response.data.price)),
    images: response.data.images,
    category: response.data.category,
    styles: response.data.styles,
    isNewCollection: response.data.is_new_collection,
    code: response.data.code,
    description: response.data.description,
    details: response.data.details,
    colors: response.data.images.reduce((colors: Color[], image: Image) => {
      if (image.color_name !== 'NOTCOLOR') {
        colors.push({
          name: image.color_name,
          background: image.background,
        })
        return colors
      }
      return colors
    }, []),
  }

  const relatedProducts = related.results.map(({id, uid, data}) => {
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
      product,
      relatedProducts,
    },
  }
}