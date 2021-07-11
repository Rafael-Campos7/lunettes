import Head from 'next/head';
import { useCallback, useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import { filter } from '../../util/filter';
import { Background } from '../../components/Background';
import { Product } from '../../components/Product';
import { Filter } from '../../components/Filter';
import { BreadCrumb } from '../../components/BreadCrumb';
import { Container, Content, ContentContainer } from "../../styles/pages/listing";

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

type Product = {
  id: string;
  slug: string;
  name: string;
  styles: Style[];
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
  slug: string[];
}

export default function Listing({ products, slug }: ListingProps) {
  const [listedProducts, setListedProducts] = useState<Product[]>([])

  const handleSelectedFilters = useCallback((selectedFilters) => {
    setListedProducts(filter(selectedFilters, products))
  }, [products])

  useEffect(() => {
    setListedProducts(products)
  }, [products])

  return (
    <>
      <Head>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>
      <Background height="200px" />
      <Container>
        <BreadCrumb title={slug.length > 1 ? slug[1] : slug[0]} trail={["Home", slug[0]]} />
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

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const prismic = getPrismicClient(req)

  const { slug } = query

  const response = await prismic.query(
    //@ts-ignore
    Prismic.Predicates.at("document.tags", slug)
  )
  
  const products = response.results.map(({id, uid, data}) => {
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
      styles: data.styles,
      isNewCollection: data.is_new_collection,
      code: data.code,
    }
  })
  
  return {
    props: {  
      products,
      slug: slug,
    },
  }
}