import styled from "styled-components";

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: -1;

  div {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
    background: url("/assets/images/background-image.jpg") center center / cover;
  }
`