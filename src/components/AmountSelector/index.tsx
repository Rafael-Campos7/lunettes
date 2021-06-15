import { useState, useEffect } from 'react'
import { Container } from './styles'

interface AmountSelectorProps {
  onChangeAmount: (amount: number) => void;
}

export function AmountSelector({ onChangeAmount }: AmountSelectorProps) {
  const [amount, setAmount] = useState(1)

  useEffect(() => {
    onChangeAmount(amount)
  }, [amount])

  return (
    <Container>
      <button onClick={() => setAmount((amount) => amount > 1 ? amount - 1 : amount)} >-</button>
      <span>{amount}</span>
      <button onClick={() => setAmount((amount) => amount + 1)} >+</button>
    </Container>
  )
}