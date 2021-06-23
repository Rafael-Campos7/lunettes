import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const buttonIconMove = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-10px) rotate(-6deg);
    transform: translateX(-10px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(10px) rotate(6deg);
    transform: translateX(10px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-10px) rotate(-3.6deg);
    transform: translateX(-10px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(7px) rotate(2.4deg);
    transform: translateX(7px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
`