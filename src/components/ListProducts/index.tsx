import { useState, useEffect } from 'react'
import { Product } from '../Product'
import { Container } from './styles'

/*type Product = {
  id: string;
  url: string;
}*/

interface ListProductsProps {
  //products: Product[];
  title: string; 
}

export function ListProducts({ products, title }: ListProductsProps) {
  const [listedProducts, setListedProducts] = useState(products)

  useEffect(() => {
    // Carregar os dados dos óculos através dos ids recebidos.
    // Atualizar o estado  
  }, []) 

  return (
    <Container>
      <h4>{title}</h4>
      <div>
        {listedProducts.map((product) => {
          return (
            <Product key={product.id} product={product} />
          )
        })}
      </div>
    </Container>
  )
}