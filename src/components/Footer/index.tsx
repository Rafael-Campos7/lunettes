import Link from 'next/link'
import { Container } from "./styles/styles";

export function Footer() {
  return (
    <Container>
      <div className="content">
        <nav><img src="/assets/images/logo-lunettes.svg" alt="Logo Lunettes" className="logoLunnetes" /></nav>
        <nav>
          <h4>Solar</h4>
          <ul>
            <li><Link href="/listagem/Solar/Aviador"><a>Aviador</a></Link></li>
            <li><Link href="/listagem/Solar/Quadrado"><a>Quadrado</a></Link></li>
            <li><Link href="/listagem/Solar/Vintage"><a>Vintage</a></Link></li>
            <li><Link href="/listagem/Solar/Espelhado"><a>Espelhado</a></Link></li>
            <li><Link href="/listagem/Solar/Gatinho"><a>Gatinho</a></Link></li>
          </ul>
        </nav>
        <nav>
          <h4>Grau</h4>
          <ul>
            <li><Link href="/listagem/Grau/Aviador"><a>Aviador</a></Link></li>
            <li><Link href="/listagem/Grau/Quadrado"><a>Quadrado</a></Link></li>
            <li><Link href="/listagem/Grau/Vintage"><a>Vintage</a></Link></li>
            <li><Link href="/listagem/Grau/Redondo"><a>Redondo</a></Link></li>
            <li><Link href="/listagem/Grau/Gatinho"><a>Gatinho</a></Link></li>
            <li><Link href="/listagem/Grau/Oval"><a>Oval</a></Link></li>
            <li><Link href="/listagem/Grau/Retangular"><a>Retangular</a></Link></li>
          </ul>
        </nav>
        <div className="addressContainer">
          <div>
            <h4>Contato</h4>
            <address>
              <p>Rua Nilza, 480 - São Paulo | 03651-120</p>
              <p><span>CNPJ:</span> 20.050.347/0001-56</p>
              <p><span>Whatsapp:</span> <a href="https://wa.me/5511974523425?text=Ol%C3%A1%20Lunettes,%20estou%20vindo%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es." target="_blank">(11) 97452-3425</a></p>
              <p><span>E-mail:</span><a> contato@lunettes.com.br</a></p>
            </address>
          </div>
          <div className="social-networks">
            <h4>Redes Sociais</h4>
            <a href="https://wa.me/5511974523425?text=Ol%C3%A1%20Lunettes,%20estou%20vindo%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es." target="_blank"><img src="/assets/images/white-whatsapp-icon.svg" alt="Ícone do WhatsApp" /></a>
            <a href="https://www.instagram.com/lunettesbylari/" target="_blank"><img src="/assets/images/instagram-icon.svg" alt="Ícone do Instagram" /></a>
            <a href="https://www.facebook.com/lunettesbylari/" target="_blank"><img src="/assets/images/facebook-icon.svg" alt="Ícone do Facebook" /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>© 2020 Lunettes by Lari | Todos os direitos reservados.</span>
      </div>
    </Container>
  )
}