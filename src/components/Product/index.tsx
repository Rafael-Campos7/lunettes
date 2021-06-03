import { FiHeart } from "react-icons/fi";
import { ProductGallery } from "./ProductGallery";
import { Container, Name, Id, Price, Details, DiscountStamp } from './styles'

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

interface ProductProps {
  product: Product;
}

export function Product({ product }: ProductProps) {
  return (
    <Container>
      {product.discount > 0 && <DiscountStamp>{product.discount}% <span>OFF</span></DiscountStamp>}
      <ProductGallery images={product.images} />
      <Name>
        {product.name}
        {(product.isNewCollection && <span>Nova coleção</span>)}
      </Name>
      <Id>
        {product.code}
      </Id>
      <Price discount={product.discount > 0}>
        <h3 className="priceWithoutDiscount">{product.price}</h3>
        {(product.discount > 0) && <h3 className="priceWithDiscount" >{ product.discountedPrice }</h3>}
      </Price>
      <Details>
        <FiHeart />
        <span>Ver mais</span>
      </Details>
    </Container>
  )
}