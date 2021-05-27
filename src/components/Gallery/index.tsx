import { Carousel } from "./Carousel";
import { Section, Container } from './styles'

export function Gallery() {
  return (
    <Container>
      <Section>
        <h3>#LunettesByLari</h3>
        <p>Poste sua foto usando a hashtag e faça parte da nossa galeria.</p>
      </Section>
      <Carousel />
    </Container>
  )
}