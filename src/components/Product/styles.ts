import styled, { css } from "styled-components";

interface PriceProps {
  discount: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 360px;

  @media screen and (max-width: 1300px) {
    width: 320px;
  }
`
export const DiscountStamp = styled.h4`
  position: absolute;
  top: 15px;
  left: 15px;
  background: #EF1F5F;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 4;
  font-size: 24px;
  line-height: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 14px;
    line-height: 14px;
  }
`

export const Name = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto mono";
  font-weight: 300;
  font-size: 24px;

  span {
    margin-left: 10px;
    padding: 3px 10px;
    border-radius: 4px 0px;
    color: #ffffff;
    background: #25D366;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }
`

export const Id = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  color: var(--gray-200);
`

export const Price = styled.div<PriceProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: "Roboto mono";
    font-size: 24px;
    margin: 15px 0px;
  }

  & .priceWithoutDiscount {
    ${props => props.discount && css`
    text-decoration: 1px line-through;
  `}}
  
  & .priceWithDiscount { 
    margin-left: 15px;
    color: #EF1F5F;
  }
`

export const Details = styled.button`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 2px #000000;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }

  span {  
    margin-left: 10px;
    font-size: 20px;
    color: #ffffff;
  }

  svg {
    color: #ffffff;
    width: 30px;
    height: 30px;
  }
`