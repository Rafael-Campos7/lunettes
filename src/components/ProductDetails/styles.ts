import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 480px 1fr;
  grid-template-rows: 1fr;
  gap: 55px;
  width: 1260px;
`
export const Gallery = styled.div`
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
    margin-bottom: 25px;

    span {
      font-size: 24px;
      font-weight: 700;
      color: #000000;
    }
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