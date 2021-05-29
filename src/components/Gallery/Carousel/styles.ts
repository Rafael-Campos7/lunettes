import styled from "styled-components";

export const SliderContainer = styled.div`
  background-color: #ffffff;
  margin-top: 4px;
  position: relative;
  
  & img {
    width: 100%;
  }

`

export const NextArrow = styled.div`
  ::before {
    content: "";
  }

  transition: all 0.2s;
  position: absolute;
  display: flex !important;
  justify-content: center;
  align-items: center;
  right: 0px;
  width: 20%;
  height: 101%;
  margin-top: -2px;
  height: 101%;
  z-index: 1;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
  
  svg {
    transition: all 0.2s;
    color: white;
    width: 70px;
    height: 70px;
  }

  &:hover svg{
      opacity: 0.5;
      margin-left: 50px;
    }

`

export const PrevArrow = styled.div`
  ::before {
    content: "";
  }

  position: absolute;
  display: flex !important;
  justify-content: center;
  align-items: center;
  left: 0px;
  width: 20%;
  height: 101%;
  margin-top: -2px;
  z-index: 1;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);

  svg {
    transition: all 0.2s;
    color: white;
    width: 70px;
    height: 70px;
  }

  &:hover svg {
    opacity: 0.5;
    margin-right: 50px;
  }
`