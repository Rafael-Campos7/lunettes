import styled, { css } from 'styled-components'
import { logoAnimation, glassIconAnimation, glassInAnimation, iconIn, iconOut, slideInTop, textAnimation } from './animations'

interface ContentProps {
  smallMenu: boolean;
  openMenu: boolean;
}

interface ContainerProps {
  openMenu: boolean;
}

interface GlassLinkProps {
  delay: number;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 100%;
  z-index: 999;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    background: #000000;
    z-index: -1;
    height: 0vh;

    ${props => {
    if (props.openMenu) {
      return css`
          height: 100vh;
          transition: height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        `
    } else {
      return css`
          height: 0vh;
          transition: height 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
        `
    }
  }}
  }
`

export const Header = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: ${props => props.smallMenu === true ? '5px 30px' : '20px 30px'};
  ${props => (props.openMenu || props.smallMenu) && css`background: #0f0f0f;`}
  ${props => props.openMenu && css`border-bottom: 1px solid #1e1e1e;`}
  ${props => props.smallMenu && css`
    -webkit-animation: ${slideInTop} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${slideInTop} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  `}

  & .logo-lunettes {
    width: ${props => props.smallMenu === true ? '50px' : '200px'};
    height: ${props => props.smallMenu === true ? '50px' : '89px'};
    ${props => props.openMenu && css`animation: 0.5s ease 0.5s 1 normal both running ${logoAnimation};`};
  }

  button {
    position: relative;
    background: transparent;
    border: none;
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  & .closeIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    ${props => !props.openMenu 
      ? css`
        animation: ${iconOut} 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    ` : css`
        animation: ${iconIn} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both;
    `}
  }

  & .hamburgerIcon, .bagIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    ${props => props.openMenu 
      ? css`
        -webkit-animation: ${iconOut} 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: ${iconOut} 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    ` : css`
        -webkit-animation: ${iconIn} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both;
        animation: ${iconIn} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both;
    `}
  }
`

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 99%;
  padding: 0px 30px 20vh;
  overflow-y: scroll;
  height: 100vh;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-200);
  }

  &::-webkit-scrollbar-track {
    background: #222222;
  }

  & .buttonContainer {
    margin-bottom: 50px;
    animation: ${textAnimation} 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;

    a {
      font-size: 32px;
      text-transform: uppercase;
      font-family: "Monument";
      color: #ffffff;
      background: none;
      border: none;
      cursor: pointer;  
      

      &:hover {
        opacity: 0.5;
      }
    }  
   
  }

  & .glassesContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    h2 {
      font-family: "Monument";
      font-size: 32px;
      color: #ffffff;
      text-transform: uppercase;
      animation: ${textAnimation} 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;

      a:hover {
        opacity: 0.5;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      width: 80%;
    }  
  }
`

export const GlassLink = styled.li<GlassLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-basis: 20%;
  margin-top: 30px;
  cursor: pointer;
  animation: ${glassInAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.${props => props.delay}s both;
  -webkit-animation: ${glassInAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.${props => props.delay}s both;

  &:hover img {
    -webkit-animation: 0.9s ease 0s 1 normal both running ${glassIconAnimation};
    animation: 0.9s ease 0s 1 normal both running ${glassIconAnimation};  
  }

  &:hover span {
    color: #000000;
          
    &::before {
      width: 100%;
    }
  }

  span {
    display: block;
    width: 150px;
    margin-top: 20px;
    color: var(--gray-200);
    font-size: 14px;
    text-align: center;
    position: relative;
    z-index: 5;

    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 0px;
      background: #ffffff;
      width: 0%;
      height: 20px;
      transition: all 0.2s linear 0s;
      z-index: -1;
    }  
  }
`