import styled, { css } from "styled-components"

interface FilterSelectorProps {
  active: boolean;
}

interface FilterOptionProps {
  background?: string;
  active: boolean;
  onClick(): void;
}

export const Container = styled.div`
  margin: 10px 0 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  align-items: flex-start;
  justify-items: center;

  ul {
    list-style: none;
    display: grid;
    gap: 10px;
    width: 60%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: flex-start;
  }
`
export const FilterBySelector = styled.button<FilterSelectorProps>`
  position: relative;
  font-size: 16px;
  text-transform: uppercase;
  color: var(--gray-200);
  background-color: var(--gray-100);
  border: none;
  width: 180px;
  height: 70px;
  transition: all 0.2s;

  & :not(:first-child){
    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 25%;
      width: 1px;
      height: 35px;
      opacity: 0.5;
      background: var(--gray-200);
    }  
  }

  ${props => props.active && css`
    background-color: #eeeeee;
    color: #000000;
  `}

  &:hover {
    color: #000000;
    background: #eeeeee;
  }
`

export const FilterOption = styled.button<FilterOptionProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 30px;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--gray-200);
  border: none;
  cursor: pointer;
  background: transparent;
  ${props => props.active && css`
    color: #000000;
    font-weight: bold;
  `}

  &::after {
    content: "";
    position: absolute;
    left: -43px;
    width: 35px;
    height: 35px;
    box-sizing: border-box;
    border: 2px solid var(--gray-200);
    border-radius: 5px;
    ${props => props.background && css`
      border: 2px solid var(--gray-100);
    `} 
    ${props => props.active && css`
      border: 3px solid #000000;
    `} 
  }

  &::before {
    content: "";
    position: absolute;
    left: -38px;
    width: 25px;
    height: 25px;
    box-sizing: border-box;
    border-radius: 5px;
    background: ${props => (props.background?.length > 7 )
    ? `url(${props.background}) center center / cover`
    : props.background
  };
    ${props => (props.active && !props.background) && css`
      background: #000000;
    `}
  }

  &:hover {
    color: #000000;
    ::after {
      border: 3px solid #000000;
    }
  }
`

export const FiltersEnabled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  span {
    margin-left: 5px;
    color: var(--gray-200);
    font-size: 12px;
    text-transform: uppercase;
  }

  button {
    border: none;
    background: transparent;
    margin-left: 10px;
    color: #2840BF;
    font-size: 12px;
    text-decoration: underline;
    transition: 0.2s;

    &:hover {
      color: #ef1f5f;
    }
  }
`