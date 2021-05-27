import { useEffect, useState } from "react";
import { Container, MenuContent } from "./styles";

export function Menu() {
  const [smallMenu, setsmallMenu] = useState(false) 

  function handleScrollMove() {
    const offSet = window.pageYOffset

    if (offSet > 100) {
      setsmallMenu(true)
    } else {
      setsmallMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollMove) 
    
    return () => {
      window.removeEventListener('scroll', handleScrollMove)
    }
  },[]) 

  return (
    <Container>
      <MenuContent smallMenu={smallMenu} >
        <button type="button">
          <img src="./assets/images/menu-icon.svg" alt="Ícone do menu" />
        </button>
        <img src={`./assets/images/${ smallMenu ? 'logotipo-negativo.png' : 'logo-lunettes.svg'}`} alt="Logo Lunettes" />
        <button type="button">
          <img src="./assets/images/bag.svg" alt="Ícone da sacola" />
        </button>
      </MenuContent>
    </Container>
  )
}