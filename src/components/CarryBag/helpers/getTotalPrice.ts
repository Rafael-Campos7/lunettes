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

export function getTotalPrice(products: Product[]) {
  const totalPrice = products.reduce((sum, product) => {
    if (product.discount > 0) {
      return sum + (product.price - ((product.discount / 100) * product.price)) * product.amount
    }

    return sum + (product.price * product.amount)
  }, 0)

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice)
}