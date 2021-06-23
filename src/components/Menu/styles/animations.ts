import { keyframes } from "styled-components";

export const logoAnimation = keyframes`
  \ 50%,
  \ 100% {
    opacity: 1;
  }
  \ 25%,
  \ 75% {
    opacity: 0;
  }

`

export const iconIn = keyframes`
  \ 0% {
    -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
    opacity: 0;
  }
  \ 100% {
    -webkit-transform: translateZ(0);
      transform: translateZ(0);
    opacity: 1;
  }
`

export const iconOut = keyframes`
  \ 0% {
    -webkit-transform: scale(1);
      transform: scale(1);
    opacity: 1;
  }
  \ 100% {
    -webkit-transform: scale(0);
      transform: scale(0);
    opacity: 1;
  }
`

export const slideInTop = keyframes`
  \ 0% {
    -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
    opacity: 0;
  }
  \ 100% {
    -webkit-transform: translateY(0);
      transform: translateY(0);
    opacity: 1;
  }  
`