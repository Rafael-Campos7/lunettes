import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { data } from './data'
import { BiChevronRight } from "react-icons/bi";
import { Product } from '../../components/Product'
import { Filter } from '../../components/Filter';
import { BackgroundContainer, Container, CategoryName, Content, ContentContainer } from "./styles";

type Image = {
  id: string;
  url: string;
  color: {
    name: string;
    background: string;
  };
  allImages: {
    xs: string;
    md: string;
    lg: string;
  };
}

type Product = {
  id: string;
  name: string;
  price: string;
  discountedPrice: string;
  images: Image[];
  code: string;
  isNewCollection: boolean;
  discount: number; 
}

interface ListingProps {
  products: Product[];
}

export default function Listing({ products }: ListingProps) {
  return (
    <>
      <Head>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>

      <BackgroundContainer />
      <Container>
        <CategoryName>
          <div>
            <span>Home</span>
            <BiChevronRight />
            <span>Grau</span>
          </div>
          <h2>Oval</h2>
        </CategoryName>
        <Filter />
        <ContentContainer>
          <Content>
            {products.map(product => {
              return (
                <Product key={product.id} product={product} />
              )
            })}
          </Content>
        </ContentContainer>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = data.map(product => {
    return {
      id: product._id,
      name: product.productName,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price),
      discountedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price - ((product.discount / 100) * product.price)),
      images: product.images,
      code: product.code,
      isNewCollection: product.isNewCollection,
      discount: product.discount, 
    }
  })
  
  return {
    props: {  
      products,
    },
  }
}