import styled, { css } from 'styled-components'
import { logoAnimation, iconIn, iconOut, slideInTop } from './animations'

interface ContentContainerProps {
  isMenuOpen: boolean;
}

interface HeaderProps {
  smallMenu: boolean;
  openMenu: boolean;
}

interface ContainerProps {
  openMenu: boolean;
}

interface BagIconContainerProps {
  bagLength: number;
  openMenu: boolean;
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

export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: ${props => props.smallMenu === true ? '8px 30px' : '20px 30px'};
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
    ${props => props.openMenu 
      ? css`
        animation: ${iconIn} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both;
    ` : css`
        animation: ${iconOut} 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
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

  @media screen and (max-width: 720px) {
    padding: 8px 15px;

    & .logo-lunettes {
      width: ${props => props.smallMenu === true ? '45px' : '120px'};
      height: ${props => props.smallMenu === true ? '45px' : '53px'};
    }

    button {
      height: 25px;
      width: 25px;
    }
  }
`

export const ContentContainer = styled.div<ContentContainerProps>`
  display: ${({ isMenuOpen }) => isMenuOpen ? "flex": "none"};
  flex-flow: column nowrap;
  width: 99%;
  padding: 0px 30px 28vh;
  overflow-y: auto;
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

  @media screen and (max-width: 720px) {
    padding: 0px 10px 28vh;
  }
`

export const BagIconContainer = styled.div<BagIconContainerProps>`
  ${({ bagLength, openMenu}) => bagLength > 0 && !openMenu && css`
    &::before {
      content: "${bagLength}";
      position: absolute;
      top: 22px;
      left: -4px;
      font-size: 10px;
      font-weight: bold;
      width: 5px;
      height: 5px;
      padding: 5px;
      margin: 0px auto;
      line-height: 5px; 
      border-radius: 50%;
      background: #ffffff;
      z-index: 100;
    } 
  `}
`