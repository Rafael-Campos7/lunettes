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
  font-weight: 300;
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
    left: -49px;
    width: 29px;
    height: 29px;
    border: 2px solid var(--gray-200);
    box-sizing: border-box;
    transition: border 0.4s;
    ${props => props.background && css`
      border: 2px solid var(--gray-100);
      border-radius: 0px 3px;
    `} 
    ${props => props.active && css`
      border: 2px solid #000000;
    `} 
  }

  &::before {
    content: "";
    position: absolute;
    left: -45px;
    width: 21px;
    height: 21px;
    box-sizing: border-box;
    border-radius: 3px;
    ${props => props.background && css`
      background: ${props.background};
    `};
    ${props => (props.active && !props.background) && css`
      background: #000000;
    `}
  }

  &:hover {
    color: #000000;
    ::after {
      border: 2px solid #000000;
      border-radius: 0px 3px;
    }
  }
`