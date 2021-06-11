import styled, { css } from "styled-components"
import { closeIcon, filtersAnimation } from './animations'

interface OpenFilterProps {
  selectedFilters: number;
}

interface CloseFilterProps {
  isFilterOptionsOpen: boolean;
}

interface ContainerProps {
  isFilterOptionsOpen: boolean;
}

interface FilterSelectorProps {
  active: boolean;
}

interface FilterOptionProps {
  background?: string;
  active: boolean;
  onClick(): void;
}

export const Container = styled.div<ContainerProps>`
  margin: 10px auto 50px auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  align-items: flex-start;
  justify-items: center;
  
  ul {
    list-style: none;
    display: grid;
    gap: 18px 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;

    button {
      width: 210px;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
    ${props => props.isFilterOptionsOpen && css`
      display: grid;
      position: fixed;
      top: -10px;
      width: 100%;
      padding: 70px 5px 10px 5px;
      height: 100vh;
      overflow: auto;
      z-index: 999;
      background: #ffffff;
      animation: ${filtersAnimation} 1.1s both;

      ul {
        grid-template-columns: 1fr;
        width: 90%;
      }
  `}
  }
`

export const OpenFilters = styled.div<OpenFilterProps>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  
  button {
    display: none;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: var(--gray-200);
    font-size: 14px;
    border: 1px solid var(--gray-200);
    padding: 10px 20px;
    margin: 0px 30px 30px 0px;
    cursor: pointer;
    position: relative;

    ${props => props.selectedFilters > 0 && css`
      ::before {  
        content: "${props.selectedFilters}";
        color: #ffffff;
        font-size: 10px;
        line-height: 15px;
        text-align: center;
        position: absolute;
        top: -7px;
        left: -7px;
        padding: 1px;
        width: 15px;
        height: 15px;
        background: #000000;
        border-radius: 15px;
      }
    `}

    @media screen and (max-width: 900px) {
      display: flex;
    }
  }
`
export const CloseFilters = styled.button<CloseFilterProps>`
  display: none;

  @media screen and (max-width: 900px) {
    ${props => props.isFilterOptionsOpen && css`
    display: flex;
    position: absolute;
    top: 15px;
    right: 20px;
    background: transparent;
    border: none;
    color: #000000;
    font-size: 40px;
    animation: ${closeIcon} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
  `}
  }
`

export const SelectorContainer = styled.div`
  @media screen and (max-width: 900px) {
    width: 90%;

    button {
      width: 33.33%;
      height: 50px;
      font-size: 14px;

      & :not(:first-child){
        ::before {
          height: 25px;
        }  
      }
    }
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
  align-items: center;
  padding-left: 40px;
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

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  &::after {
    content: "";
    position: absolute;
    left: -10px;
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
    left: -5px;
    width: 25px;
    height: 25px;
    box-sizing: border-box;
    border-radius: 5px;
    background: ${props => (props.background?.length > 7)
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