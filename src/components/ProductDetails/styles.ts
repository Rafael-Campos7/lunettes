import styled, { css } from "styled-components"

interface PriceProps {
  discount: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 480px 1fr;
  grid-template-rows: 1fr;
  gap: 55px;
  width: 1260px;
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

export const Gallery = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
`
export const Label = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-200);
  text-transform: uppercase;
  margin-bottom: 8px;
`
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .code {
    display: block;
    font-size: 14px;
    text-transform: uppercase;
    color: var(--gray-200);
    margin-bottom: 25px;
  }

  & .colors {
    margin-bottom: 25px;
  }

  & .price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
  }

  & .amount {
    margin-bottom: 25px;
  }

  & .buttons {
    display: flex;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 8px;
      box-shadow: 1px 2px 8px rgba(0,0,0,0.5);
      padding: 10px 25px;
      width: 250px;
      height: 50px;
      color: #ffffff;
      font-size: 20px;
      transition: 0.3s;

      svg {
        font-size: 25px;
        margin-right: 10px;
      }
    }

    & .putInTheBag {
      background: #000000;

      &:hover {
        opacity: 0.5;
      }
    }
    
    & .buyNow {
      background: #25D366; 
      margin-left: 15px;
      
      &:hover {
        background: var(--gray-200);
      }
    }  
  }

`

export const Price = styled.div<PriceProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: "Roboto mono";
    font-size: 24px;
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