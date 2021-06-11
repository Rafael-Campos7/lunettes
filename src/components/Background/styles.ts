import styled from "styled-components";

export const BackgroundContainer = styled.div`
  margin-bottom: 50px;
  width: 100%;
  height: 200px;
  background: url("./assets/images/listingPage-background.jpg") left -40px / cover no-repeat;

  @media screen and (max-width: 720px) {
    background: #0F0F0F;
    height: 70px;
  }
`