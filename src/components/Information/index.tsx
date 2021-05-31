import { Container } from "./styles";

export function Information() {
  return(
    <Container>
      <h3>Como Funciona</h3>
      <a href="https://youtu.be/QCZlSUfjDVk" target="_blank" >assistir video explicativo</a>
      <div className="container">
        <div>
          <img src="./assets/images/heart-icon.svg" alt="Ícone de Coração" />
          <h4>Sacola</h4>
          <p>Coloque na sacola os óculos que queira reservar;</p>
        </div>
        <div>
          <img src="./assets/images/whatsapp-icon.svg" alt="Logo do WhatsApp" />
          <h4>Avise a Lunettes</h4>
          <p>Finalize o pedido e vamos conversar no WhatsApp;</p>
        </div>
        <div>
          <img src="./assets/images/calendar-icon.svg" alt="Ícone de calendário" />
          <h4>Agende</h4>
          <p>Agendaremos uma chamada de vídeo para apresentar os óculos;</p>  
        </div>  
      </div>
    </Container>
  )
}