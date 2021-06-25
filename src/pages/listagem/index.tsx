import { useCallback, useState } from 'react';
import { filter } from './_helper/filter'
import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { data } from './data'
import { Background } from '../../components/Background'
import { Product } from '../../components/Product'
import { Filter } from '../../components/Filter';
import { BreadCrumb } from '../../components/BreadCrumb';
import { Container, Content, ContentContainer } from "./styles";

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
  styles: string[];
  price: number;
  formattedPrice: string;
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
  const [listedProducts, setListedProducts] = useState<Product[]>(products)

  const handleSelectedFilters = useCallback((selectedFilters) => {
    setListedProducts(filter(selectedFilters, products))
  }, [products])

  return (
    <>
      <Head>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>

      <Background height="200px" />
      <Container>
        <BreadCrumb title="Oval" trail={["Home", "Grau"]} />
        <Filter products={products} handleSelectedFilters={handleSelectedFilters} />
        <ContentContainer>
          <Content>
            {listedProducts.map(product => {
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
      styles: product.subcategories,
      price: product.price,
      formattedPrice: new Intl.NumberFormat('pt-BR', {
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