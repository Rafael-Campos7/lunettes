import { useState, useEffect } from 'react'
import { useBag } from '../../hooks/useBag'
import { RiShoppingCartLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'
import { BagHeader, Buttons, Container, Total } from './styles/styles'
import { Product } from './Product'
import { getTotalPrice } from './helpers/getTotalPrice'

interface CarryBagProps {
  handleCloseMenu: (content: string) => void;
}

export function CarryBag({ handleCloseMenu }: CarryBagProps) {
  const { bag } = useBag()
  const [total, setTotal] = useState(getTotalPrice(bag))

  useEffect(() => {
    setTotal(getTotalPrice(bag))
  }, [bag])

  return (
    <Container>
      <h2>Sacola</h2>
      <BagHeader>
        <h3>Produto</h3>
        <h3>Quantidade</h3>
        <h3>Preço</h3>
      </BagHeader>
      <div>
        {bag.map((product, index) => <Product key={product.id} product={product} animationDelay={index} />)}
      </div>
      <Total>
        <span>Total</span>
        <div>
          <strong>{total}</strong>
        </div>
      </Total>
      <Buttons>
        <button 
          className="continueButton" 
          onClick={() => {handleCloseMenu("bag")}}
        > <RiShoppingCartLine />Continuar reservando</button>
        <button 
          className="finishButton" 
        > <ImWhatsapp />Finalizar reserva</button>
      </Buttons>
    </Container>
  )
}