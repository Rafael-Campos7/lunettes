import { useState, useCallback, useRef } from 'react'
import { useBag } from '../../hooks/useBag'
import { ColorSelector } from '../ColorSelector'
import { ProductGallery } from '../ProductGallery'
import { BreadCrumb } from '../BreadCrumb'
import { AmountSelector } from '../AmountSelector'
import { ProductButton } from '../ProductButton'
import { getBreadCrumbTrail } from './helpers/getBreadCrumbTrail'
import { findProduct } from '../../util/findProduct'
import { formatPrices } from '../../util/formatPrices'
import { ImWhatsapp } from 'react-icons/im'
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
  id: string;
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
  const { bag, addProduct, removeProduct } = useBag()
  const [prices, setPrices] = useState<Prices>(formatPrices(1, product.price, product.discount))
  const [colorIndex, setColorIndex] = useState(1)
  const colorSelectedRef = useRef(product.colors[0])
  const amountSelectedRef = useRef({ amount: 1 })
  
  const handleTheBag = useCallback(() => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      code: product.code,
      amount: amountSelectedRef.current.amount,
      image: product.images[0].allImages.xs,
      color: colorSelectedRef.current,
    })
    
  }, [product, colorSelectedRef, amountSelectedRef])

  const handleButtonAction = useCallback(() => {
    const isProductInTheBag = findProduct(bag, product.id)
    if (!isProductInTheBag) {
      handleTheBag()
      return
    }
    
    removeProduct(product.id)
  }, [product, bag])

  const handleColorChange = useCallback((color) => {
    const index = product.images.findIndex((image) => image.color.name === color.name)
    setColorIndex(index)
    colorSelectedRef.current = color
  }, [product])

  const handleAmountChange = useCallback((amount: number) => {
    setPrices(formatPrices(amount, product.price, product.discount))
    amountSelectedRef.current.amount = amount
  }, [product, amountSelectedRef])

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
          <AmountSelector onChangeAmount={handleAmountChange} initialValue={1} color="#000000" />
        </div>
        <div className="buttons" >
          <ProductButton 
            action={handleButtonAction} 
            productId={product.id} 
          > Por na sacola</ProductButton>
          { !findProduct(bag, product.id) && <button className="buyNow" > <ImWhatsapp /> Comprar agora</button> }
        </div>
      </Product>
    </Container>
  )
}