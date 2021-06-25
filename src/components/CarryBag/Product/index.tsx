import { useCallback, useState } from 'react'
import { useBag } from '../../../hooks/useBag'
import { AmountSelector } from '../../AmountSelector'
import { BsTrash } from 'react-icons/bs'
import { Container, ProductContainer, AmountContainer, Price, ColorBox } from './styles'
import { formatPrices } from '../../../util/formatPrices'

type Prices = {
  price: string;
  discountedPrice: string;
}

type Product = {
  id: string;
  name: string;
  price: number;
  discount: number;
  code: string;
  amount: number;
  image: string;
  color: {
    name: string;
    background: string;
  };
}

interface ProductProps {
  product: Product;
  animationDelay: number;
}

export function Product({ product, animationDelay }: ProductProps) {
  const [prices, setPrices] = useState<Prices>(formatPrices(1, product.price, product.discount))
  const { removeProduct, updateProductAmount } = useBag()

  const handleAmountChange = useCallback((amount: number) => {
    setPrices(formatPrices(amount, product.price, product.discount))
    updateProductAmount(product.id, amount)
  }, [product])

  const handleRemoveProduct = useCallback(() => {
    removeProduct(product.id)
  }, [product])

  return (
    <Container animationDelay={animationDelay} >
      <ProductContainer>
        <img src={product.image} alt="óculos Lunettes" />
        <div>
          <div>
            <h4>{product.name}</h4>
            <span>{product.code}</span>
          </div>
          <div>
            <ColorBox background={product.color.background} />
            <span>{product.color.name}</span>
          </div>
        </div>
      </ProductContainer>
      <AmountContainer>
        <AmountSelector 
          initialValue={product.amount} 
          onChangeAmount={handleAmountChange} 
          color="#ffffff" 
        />
        <button onClick={handleRemoveProduct} >Remover</button>
      </AmountContainer>
      
      <Price>
        <div>
          {product.discount > 0 && <span>{prices.price}</span>}
          <strong>{product.discount > 0 ? prices.discountedPrice : prices.price}</strong>
        </div>
        <button onClick={handleRemoveProduct} > <BsTrash />Tirar da lista</button>
      </Price>
    </Container>
  )
}