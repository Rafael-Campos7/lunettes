import { keyframes } from "styled-components";

export const iconAnimation = keyframes`
  0%,
  100% {
    transform:translateX(0);transform-origin:50% 50%
  }
  15% {
    transform:translateX(-5px) rotate(-6deg)
  }
  30% {
    transform:translateX(12px) rotate(6deg)
  }
  45% {
    transform:translateX(-6px) rotate(-3.6deg)
  }
  60% {
    transform:translateX(6px) rotate(2.4deg)
  }
  75% {
    transform:translateX(-6px) rotate(-1.2deg)
  }
`