import { eyeGlasses, sunGlasses } from '../glasses'
import { Container, GlassLink } from './styles/styles'

export function NavigationList() {
  return (
    <Container>
      <div className="buttonContainer">
        <button type="button" >Home</button>
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
    </Container>
  )
}