import { useState, useCallback } from 'react'
import { ColorSelector } from '../ColorSelector'
import { ProductGallery } from '../ProductGallery'
import { BreadCrumb } from '../BreadCrumb'
import { AmountSelector } from '../AmountSelector'
import { getBreadCrumbTrail } from './helpers/getBreadCrumbTrail'
import { ImWhatsapp } from 'react-icons/im'
import { FiHeart } from 'react-icons/fi'
import { Container, Gallery, Product, Label } from './styles'

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

interface ProductDetailsProps {
  product: Product,
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [price, setPrice] = useState(product.formattedPrice)
  const [colorIndex, setColorIndex] = useState(1)
  
  const handleColorChange = useCallback((colorName) => {
    const index = product.images.findIndex((image) => image.color.name === colorName)
    setColorIndex(index)
  }, [product])

  const handleUpdatePrice = useCallback((amount: number) => {
    const newPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(product.price * amount)

    setPrice(newPrice)
  }, [product])

  return (
    <Container>
      <Gallery>
        <ProductGallery images={product.images} colorDots={false} selectedIndex={colorIndex} />
      </Gallery>
      <Product>
        <BreadCrumb title={product.name} trail={getBreadCrumbTrail(product)} />
        <span className="code" >{product.code}</span>
        <div className="colors" >
          <Label>Cores:</Label>
          <ColorSelector onColorChange={handleColorChange} colors={product.colors} />
        </div>
        <div className="price" >
          <Label>Preço:</Label>
          <span>{price}</span>
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