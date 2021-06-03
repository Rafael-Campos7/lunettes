import styled from "styled-components";

export const BackgroundContainer = styled.div`
  margin-bottom: 50px;
  width: 100%;
  height: 200px;
  background: url("./assets/images/listingPage-background.jpg") left -40px / cover no-repeat;
`

export const Container = styled.section`

`
export const CategoryName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--gray-200);

    svg {
      width: 20px; 
      height: 20px;
      margin: 0px 3px;
    }
  }  

  h2 {
    margin: 5px 0px;
    font-size: 42px;
    font-family: 'Monument';
    text-transform: uppercase;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  width: 1260px;
`