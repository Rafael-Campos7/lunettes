import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { eyeGlasses, sunGlasses } from './glasses'
import { Container, GlassLink } from './styles/styles'

interface NavigationListProps {
  handleCloseMenu: (content: string) => void;
}

export function NavigationList({ handleCloseMenu } :NavigationListProps) {
  const router = useRouter()

  const handleOnClick = useCallback((href) => {
    handleCloseMenu("navigation")
    router.push(href)
  }, [router, handleCloseMenu])

  return (
    <Container>
      <div className="buttonContainer">
        <button type="button" onClick={() => {handleOnClick("/")}}>Home</button>
      </div>
      <div className="glassesContainer" >
        <button onClick={() => {handleOnClick("/listagem/Grau")}} >Óculos de Grau</button>
        <nav>
          <ul>
            {eyeGlasses.map(glass => {
              return (
                <GlassLink 
                  onClick={() => {handleOnClick(`/listagem/Grau/${glass.title}`)}}
                  key={glass.id} 
                  delay={glass.id}
                >
                  <img src={glass.image_path} />
                  <span>{glass.title}</span>
                </GlassLink>
              )
            })}
          </ul>
        </nav>
      </div>
      <div className="glassesContainer" >
        <button onClick={() => {handleOnClick("/listagem/Solar")}} >Óculos Solar</button>
        <nav>
          <ul>
            {sunGlasses.map(glass => {
              return (
                <GlassLink 
                  onClick={() => {handleOnClick(`/listagem/Solar/${glass.title}`)}}
                  key={glass.id} 
                  delay={glass.id} 
                >
                  <img src={glass.image_path} />
                  <span>{glass.title}</span>
                </GlassLink>
              )
            })}
          </ul>
        </nav>
      </div>
    </Container>
  )
}