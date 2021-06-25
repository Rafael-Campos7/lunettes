import { useState, useEffect } from "react";
import { useBag } from "../../hooks/useBag";
import { findProduct } from '../../util/findProduct'
import { ReactNode } from "react";
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { Container } from "./styles";

interface ProductButtonProps {
  children: ReactNode;
  action: () => void; 
  productId: string;
}

export function ProductButton({ children, action, productId }: ProductButtonProps) {
  const { bag } = useBag()
  const [isProductInTheBag, setIsProductInTheBag] = useState(findProduct(bag, productId))
  
  useEffect(() => {
    setIsProductInTheBag(findProduct(bag, productId))
  }, [bag])

  return (
    <Container isProductInTheBag={isProductInTheBag} onClick={action} >
      {isProductInTheBag 
        ? <><FaHeart /> Na sacola </>
        : <><FiHeart /> {children} </>} 
    </Container>
  )
}