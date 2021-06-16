export function formatPrice(amount: number, price: number, discount: number) {
  const newPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price * amount)

  const newDiscountedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format((price - ((discount / 100) * price)) * amount)

  return {
    price: newPrice,
    discountedPrice: newDiscountedPrice,
  }
}