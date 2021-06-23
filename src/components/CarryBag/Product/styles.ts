import styled, { keyframes } from "styled-components";

interface ContainerProps {
  animationDelay: number;
}

interface ColorBoxProps {
  background: string;
}

const slideIn = keyframes`
  0% {
    -webkit-transform: translateX(-110px);
    transform: translateX(-110px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 160px;
  align-items: center;
  width: 90%;
  -webkit-animation: ${slideIn} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.${({ animationDelay }) => animationDelay}s both;
	animation: ${slideIn} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.${({ animationDelay }) => animationDelay}s both;

  strong {
    font-size: 24px;
    color: #ffffff;
  }
`

export const ProductContainer = styled.div`
  display: flex;

  img {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    border-radius: 4px;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #ffffff;
    text-transform: uppercase;

    div {
      h4 {
        font-size: 24px;
        font-weight: bold;
      }
      
      span {
        font-size: 14px;
        color: var(--gray-200);
      }
    }

    & div:last-child {
      display: flex;
      align-items: center;
      flex-direction: row; 
    }
  }
`
export const ColorBox = styled.div<ColorBoxProps>`
  width: 25px;
  height: 25px;
  background: ${({ background }) => background};
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  margin-right: 10px;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span {
      font-size: 14px;
      color: var(--gray-200);
      text-decoration: 1px line-through;
    }
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    color: var(--gray-100);
    font-size: 14px;
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }

    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
`