import { useEffect } from "react";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

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

interface BagContextData {
  bag: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  updateProductAmount: (productId: string, amount: number) => void;
}

interface BagProviderProps {
  children: ReactNode;
}

const BagContext = createContext<BagContextData>({} as BagContextData)

export function BagProvider({ children }: BagProviderProps) {
  const [bag, setBag] = useState<Product[]>([])

  const addProduct = useCallback((product: Product) => {
    setBag(oldBag => {
      localStorage.setItem('@Lunettes:bag', JSON.stringify([...oldBag, product]))
      return [...oldBag, product]
    })
  }, [])

  const removeProduct = useCallback((productId) => {
    const updatedBag = bag.filter((product) => {
      if (product.id === productId) {
        return false;
      }
      return true;
    })

    setBag(updatedBag)
    localStorage.setItem('@Lunettes:bag', JSON.stringify(updatedBag))
  }, [bag])

 const updateProductAmount = useCallback((productId, amount) => {
    const updatedBag = bag.map((product) => {
      if (product.id === productId) {
        product.amount = amount
        return product
      }

      return product
    })

    setBag(updatedBag)
    localStorage.setItem('@Lunettes:bag', JSON.stringify(updatedBag))
  }, [bag])

  useEffect(() => {
    const storagedBag = localStorage.getItem('@Lunettes:bag')

    if (storagedBag) {
      setBag(JSON.parse(storagedBag))
    }
  }, []) 

  return (
    <BagContext.Provider 
      value={{bag, addProduct, removeProduct, updateProductAmount}}
    >
      {children}
    </BagContext.Provider>
  )
}

export function useBag(): BagContextData {
  const context = useContext(BagContext);

  return context;
}