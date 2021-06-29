import { useRouter } from 'next/router'
import { ProductButton } from "../ProductButton";
import { ProductGallery } from "../ProductGallery";
import { Container, Name, Id, Price, DiscountStamp } from './styles'

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

interface ProductProps {
  product: Product;
}

export function Product({ product }: ProductProps) {
  const router = useRouter()
  return (
    <Container>
      {product.discount > 0 && <DiscountStamp>{product.discount}% <span>OFF</span></DiscountStamp>}
      <ProductGallery images={product.images} colorDots={true} />
      <Name>
        {product.name}
        {(product.isNewCollection && <span>Nova coleção</span>)}
      </Name>
      <Id>
        {product.code}
      </Id>
      <Price discount={product.discount > 0}>
        <h3 className="priceWithoutDiscount">{product.formattedPrice}</h3>
        {(product.discount > 0) && <h3 className="priceWithDiscount" >{ product.discountedPrice }</h3>}
      </Price>
      <ProductButton action={() => {router.push(`/detalhes/${product.slug}`)}} productId={product.id}>
        Ver mais
      </ProductButton>
    </Container>
  )
}