import styled, { css } from "styled-components";
import { moveColor } from './animations'

interface ColorProps {
  active: boolean;
  background: string,
}

export const Container = styled.div`
  display: flex;

  & button:not(:first-child) {
    margin-left: 15px;
  }

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    & button:not(:first-child) {
    margin-left: 0px;
  }
  }
`

export const Color = styled.button<ColorProps>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--gray-200);
  border: none;
  cursor: pointer;
  background: transparent;
  transition: 0.2s;
  ${props => props.active && css`
    color: #000000;
    font-weight: bold;
  `}

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  &::after {
    content: "";
    position: absolute;
    left: -3px;
    width: 27px;
    height: 27px;
    border-radius: 3px;
    transition: 0.2s;
    border: 2px solid ${props => props.active ? "#000000" : "transparent"};
  }

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 25px;
    height: 25px;
    box-sizing: border-box;
    border-radius: 3px;
    background: ${props => (props.background.length > 7)
    ? `url(${props.background}) center center / cover`
    : props.background
   };
    ${props => props.active && css`
      -webkit-animation: ${moveColor} 0.9s both;
	    animation: ${moveColor} 0.8s both;
    `}
  }

  &:hover {
    color: #000000;
    ::after {
      border: 2px solid #000000;
    }
  }
`