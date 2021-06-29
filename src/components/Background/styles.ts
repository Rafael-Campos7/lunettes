import styled from "styled-components";

interface BackgroundContainerProps {
  height: string; 
}  

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  margin-bottom: 50px;
  width: 100%;
  height: ${props => props.height};
  background: url("/assets/images/listingPage-background.jpg") left -60px / cover no-repeat;

  @media screen and (max-width: 720px) {
    background: #0F0F0F;
    height: 70px;
  }
`