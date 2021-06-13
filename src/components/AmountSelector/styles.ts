import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  width: 130px;
  height: 60px;
  border: 2px solid #000000;
  border-radius: 8px;

  span {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #000000;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 50%;
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #cccccc;
    }
  }
`