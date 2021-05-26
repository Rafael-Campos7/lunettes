import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Menu() {
  const [menu, setMenu] = useState("") 

  function handleScrollMove() {
     const offSet = window.pageYOffset

    if (offSet > 100) {
      setMenu("true") 
      console.log(menu, offSet);
    } else {
      setMenu("false")
      console.log(menu);
      
    }
    ;
    
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollMove) 
    
    return () => {
      window.removeEventListener('scroll', handleScrollMove)
    }
  },[]) 

  return (
    <Container>
      <div>
        <button type="button">
          <img src="./assets/images/menu-icon.svg" alt="Ícone do menu" />
        </button>
        <img src="./assets/images/logo-lunettes.svg" alt="Logo Lunettes" />
        <button type="button">
          <img src="./assets/images/cart-icon.svg" alt="Ícone da sacola" />
        </button>
      </div>
    </Container>
  )
}