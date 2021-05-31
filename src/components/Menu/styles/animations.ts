import { keyframes } from "styled-components";

export const glassInAnimation = keyframes`
  \ 0% {
    -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
    opacity: 0;
  }
  \ 100% {
    -webkit-transform: translateX(0);
      transform: translateX(0);
    opacity: 1;
  }
`

export const glassIconAnimation = keyframes`
  \ 100% {
    -webkit-transform:translateX(0);
    transform:translateX(0);
    -webkit-transform-origin:50% 50%;
    transform-origin:50% 50%;
  }
  \ 15% {
    -webkit-transform:translateX(-12px) rotate(-6deg);
    transform:translateX(-12px) rotate(-6deg);
  }
  \ 30% {
    -webkit-transform:translateX(23px) rotate(6deg);
    transform:translateX(23px) rotate(6deg);
  }
  \ 45% {
    -webkit-transform:translateX(-13px) rotate(-3.6deg);
    transform:translateX(-13px) rotate(-3.6deg);
  }
  \ 60% {
    -webkit-transform:translateX(15px) rotate(2.4deg);
    transform:translateX(15px) rotate(2.4deg);
  }
  \ 75% {
    -webkit-transform:translateX(-12px) rotate(-1.2deg);
    transform:translateX(-12px) rotate(-1.2deg);
  }
`

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

export const textAnimation = keyframes`
  \ 0% {
    opacity: 0;
  }
  \ 100% {
    opacity: 1;
  }
`