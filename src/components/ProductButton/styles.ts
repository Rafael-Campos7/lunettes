import styled, { css, keyframes } from "styled-components";

interface ContainerProps {
  isProductInTheBag: boolean;
}

const PulsateAnimation = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0,0,0,0.5);
  padding: 10px 25px;
  background: ${({ isProductInTheBag }) => isProductInTheBag ? "#EF1F5F" : "#000000"};
  color: #ffffff;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    background: var(--gray-200);
  }

  svg {
    font-size: 25px;
    margin-right: 10px;
    ${({ isProductInTheBag }) => isProductInTheBag && css`
      -webkit-animation: ${PulsateAnimation} 0.5s ease-in-out infinite both;
	    animation: ${PulsateAnimation} 0.5s ease-in-out infinite both;
    `}
  }
`