import { useState, useCallback } from 'react'
import { ColorSelector } from '../ColorSelector'
import { ProductGallery } from '../ProductGallery'
import { BreadCrumb } from '../BreadCrumb'
import { AmountSelector } from '../AmountSelector'
import { getBreadCrumbTrail } from './helpers/getBreadCrumbTrail'
import { formatPrice } from './helpers/formatPrice'
import { ImWhatsapp } from 'react-icons/im'
import { FiHeart } from 'react-icons/fi'
import { Container, DiscountStamp, Gallery, Product, Label, Price } from './styles'

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

type Prices = {
  price: string;
  discountedPrice: string;
}

interface ProductDetailsProps {
  product: Product,
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [prices, setPrices] = useState<Prices>(formatPrice(1, product.price, product.discount))
  const [colorIndex, setColorIndex] = useState(1)
  
  const handleColorChange = useCallback((colorName) => {
    const index = product.images.findIndex((image) => image.color.name === colorName)
    setColorIndex(index)
  }, [product])

  const handleUpdatePrice = useCallback((amount: number) => {
    setPrices(formatPrice(amount, product.price, product.discount))
  }, [product])

  return (
    <Container>
      <Gallery>
        {product.discount > 0 && <DiscountStamp>{product.discount}% <span>OFF</span></DiscountStamp>}
        <ProductGallery images={product.images} colorDots={false} selectedIndex={colorIndex} />
      </Gallery>
      <Product>
        <BreadCrumb title={product.name} trail={getBreadCrumbTrail(product.category, product.styles)} />
        <span className="code" >{product.code}</span>
        <div className="colors" >
          <Label>Cores:</Label>
          <ColorSelector onColorChange={handleColorChange} colors={product.colors} />
        </div>
        <div className="price" >
          <Label>Preço:</Label>
          <Price discount={product.discount > 0}>
            <h3 className="priceWithoutDiscount">{prices.price}</h3>
            {(product.discount > 0) && <h3 className="priceWithDiscount" >{ prices.discountedPrice }</h3>}
          </Price>
        </div>
        <div className="amount" >
          <Label>Qtd:</Label>
          <AmountSelector onChangeAmount={handleUpdatePrice} />
        </div>
        <div className="buttons" >
          <button className="putInTheBag" > <FiHeart />Por na sacola</button>
          <button className="buyNow" > <ImWhatsapp /> Comprar agora</button>
        </div>
      </Product>
    </Container>
  )
}