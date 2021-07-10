import { useState, useCallback, useEffect, useRef } from 'react'
import { useBag } from '../../hooks/useBag'
import { ImWhatsapp } from 'react-icons/im'
import { ColorSelector } from '../ColorSelector'
import { ProductGallery } from '../ProductGallery'
import { BreadCrumb } from '../BreadCrumb'
import { AmountSelector } from '../AmountSelector'
import { ProductButton } from '../ProductButton'
import { getBreadCrumbTrail } from './helpers/getBreadCrumbTrail'
import { findProduct } from '../../util/findProduct'
import { formatPrices } from '../../util/formatPrices'
import { Container, DiscountStamp, Gallery, Product, Label, Price } from './styles'

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
      image: product.images[0].xs,
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
    const index = product.images.findIndex((image) => image.color_name === color.name)
    setColorIndex(index)
    colorSelectedRef.current = color
  }, [product])

  const handleAmountChange = useCallback((amount: number) => {
    setPrices(formatPrices(amount, product.price, product.discount))
    amountSelectedRef.current.amount = amount
  }, [product, amountSelectedRef])

  useEffect(() => {
    setPrices(formatPrices(amountSelectedRef.current.amount, product.price, product.discount))
    setColorIndex(1)
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