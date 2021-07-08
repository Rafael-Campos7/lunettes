import { Product } from '../Product'
import { Container } from './styles'

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
  name: string;
  price: number;
  formattedPrice: string;
  discountedPrice: string;
  images: Image[];
  code: string;
  isNewCollection: boolean;
  discount: number; 
}

interface ListProductsProps {
  products: Product[];
  title: string; 
}

export function ListProducts({ products, title }: ListProductsProps) {
  return (
    <Container>
      <h4>{title}</h4>
      <div>
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} />
          )
        })}
      </div>
    </Container>
  )
}