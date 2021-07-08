import { useEffect, useCallback, useState } from "react";
import { useBag } from "../../hooks/useBag";
import { CarryBag } from '../CarryBag'
import { NavigationList } from "./NavigationList";
import { Container, Header, ContentContainer, BagIconContainer } from "./styles/styles";

interface MenuProps {
  toggleTheme(): void;
}

export function Menu({ toggleTheme }: MenuProps) {
  const { bag } = useBag()
  const [menuContent, setMenuContent] = useState("")
  const [openMenu, setOpenMenu] = useState(false)
  const [smallMenu, setSmallMenu] = useState(false)

  const handleMenu = useCallback((content: string) => {
    switch (content) {
      case "bag":  
        if (bag.length === 0) { 
          setOpenMenu(false)
          openMenu && toggleTheme()
          break;
        } 
        setMenuContent(content)
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
        toggleTheme()    
      break;
      case "navigation":  
        setMenuContent(content)
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
        toggleTheme()
      break;
    }
  }, [bag, openMenu])

  function handleScrollMove() {
    const offSet = window.pageYOffset

    if (offSet > 100) {
      setSmallMenu(true)
    } else {
      setSmallMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollMove)

    return () => {
      window.removeEventListener('scroll', handleScrollMove)
    }
  }, [])

  useEffect(() => {
    handleMenu("bag")
  }, [bag.length])

  return (
    <Container openMenu={openMenu} >
      <Header smallMenu={smallMenu} openMenu={openMenu} >
        <button type="button" onClick={() => {handleMenu("navigation")}} >
          {menuContent === "navigation" && <img className="closeIcon" src="/assets/images/close.svg" alt="Ícone fechar menu" />}
          <img className="hamburgerIcon" src="/assets/images/menu-icon.svg" alt="Ícone abrir menu" />
        </button>
        <img className="logo-lunettes" src={`/assets/images/${smallMenu ? 'logotipo-negativo.png' : 'logo-lunettes.svg'}`} alt="Logo Lunettes" />
        <button type="button" onClick={() => {handleMenu("bag")}}>
          {menuContent === "bag" && <img className="closeIcon" src="/assets/images/close.svg" alt="Ícone fechar menu" />}
          <BagIconContainer bagLength={bag.length} openMenu={openMenu} >
            <img src="/assets/images/bag.svg" alt="Ícone da sacola" className="bagIcon"/>  
          </BagIconContainer>   
        </button>
      </Header>
      <ContentContainer isMenuOpen={openMenu} >
        {openMenu && (menuContent === "navigation" ? <NavigationList handleCloseMenu={handleMenu} /> : <CarryBag handleCloseMenu={handleMenu} />)}
      </ContentContainer>
    </Container>
  )
}