interface Product {
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

export function findProduct(products: Product[], productId: string) {
  const productExists = products.find((product) => product.id === productId)
  if (productExists) {
    return true
  }

  return false
}