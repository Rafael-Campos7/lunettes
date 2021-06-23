import { useState, useEffect } from 'react'
import { Container } from './styles'

interface AmountSelectorProps {
  onChangeAmount: (amount: number) => void;
  color: string;
  initialValue: number;
}

export function AmountSelector({ onChangeAmount, color, initialValue }: AmountSelectorProps) {
  const [amount, setAmount] = useState(initialValue)

  useEffect(() => {
    onChangeAmount(amount)
  }, [amount])

  return (
    <Container color={ color } >
      <button onClick={() => setAmount((amount) => amount > 1 ? amount - 1 : amount)} >-</button>
      <span>{amount}</span>
      <button onClick={() => setAmount((amount) => amount + 1)} >+</button>
    </Container>
  )
}