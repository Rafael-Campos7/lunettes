import { useEffect, useState } from "react";
import { Container, GlassLink, Header, Content } from "./styles/styles";

import { eyeGlasses, sunGlasses } from './glasses'

interface MenuProps {
  toggleTheme(): void;
}

export function Menu({ toggleTheme }: MenuProps) {
  const [openMenu, setOpenMenu] = useState(false)
  const [smallMenu, setSmallMenu] = useState(false)

  function handleMenu() {
    if (openMenu) {
      setOpenMenu(false)
      toggleTheme()
    } else {
      setOpenMenu(true)
      toggleTheme()
    }
  }

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

  return (
    <Container openMenu={openMenu} >
      <Header smallMenu={smallMenu} openMenu={openMenu} >
        <button type="button" onClick={handleMenu} >
          <img className="closeIcon" src="./assets/images/close.svg" alt="Ícone fechar menu" />
          <img className="hamburgerIcon" src="./assets/images/menu-icon.svg" alt="Ícone abrir menu" />
        </button>
        <img className="logo-lunettes" src={`./assets/images/${smallMenu ? 'logotipo-negativo.png' : 'logo-lunettes.svg'}`} alt="Logo Lunettes" />
        <button type="button">
          <img className="bagIcon" src="./assets/images/bag.svg" alt="Ícone da sacola" />
        </button>
      </Header>

      {openMenu &&
        <Content>
          <div className="buttonContainer">
            <a type="button" onClick={handleMenu} href="#">Home</a>
          </div>
          <div className="glassesContainer" >
            <h2><a href="/">Óculos de Grau</a></h2>
            <nav>
              <ul>
                {eyeGlasses.map(glass => {
                  return (
                    <GlassLink key={glass.id} delay={glass.id}>
                      <img src={glass.image_path} />
                      <span>{glass.title}</span>
                    </GlassLink>
                  )
                })}
              </ul>
            </nav>
          </div>
          <div className="glassesContainer" >
            <h2><a href="/">Óculos Solar</a></h2>
            <nav>
              <ul>
              {sunGlasses.map(glass => {
                  return (
                    <GlassLink key={glass.id} delay={glass.id}>
                      <img src={glass.image_path} />
                      <span>{glass.title}</span>
                    </GlassLink>
                  )
                })}
              </ul>
            </nav>
          </div>
        </Content>
      }
    </Container>
  )
}