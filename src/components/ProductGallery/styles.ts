import styled, { css } from "styled-components";

interface DotsContainerProps {
  isColorDots: boolean;
}

interface DotButtonProps {
  productColor: {
    colorName: string;
    background: string;
  };
}

interface ImageContainerProps {
  isFirstImage: boolean;
  imageHover?: string;
}

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  cursor: grab;

  &:hover ::before {
    opacity: 1;
  }

  ${props => props.isFirstImage && css`
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${props.imageHover}) center center / cover;
      opacity: 0;
      transition: opacity 0.5s;
    }
  `}

  img {
    width: 100%;
    height: 100%;
  }

`

export const DotsContainer = styled.div<DotsContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  position: relative;
  bottom: 0px;
  
  li {
    display: inline-block;
    cursor: pointer;
    margin-left: 3px;
  }
  
  .slick-active div {
    ${props => props.isColorDots && css`
      ::after {
        content: "";
        position: absolute;
        top: -3px;
        left: -3px;
        width: 26px;
        height: 26px;
        border: 2px solid #000000;
        border-radius: 3px;
    }
    `}
    ${props => !(props.isColorDots) && css`
      background: #000000;
    `}
  }
`
export const Dot = styled.div`
  margin-left: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #cccccc;
  background: var(--gray-100);
`

export const ColorDot = styled.div<DotButtonProps>`
  display: ${props => props.productColor.colorName === "NOTCOLOR" ? "none" : "block"};
  background: ${props => props.productColor.background.length > 7 
    ? `url(${props.productColor.background}) center center / cover`
    : props.productColor.background
  };
  border-radius: 3px;
  width: 24px;
  height: 24px;
  position: relative;

  &:hover {
    ::before {
      content: "${props => props.productColor.colorName}";
      position: absolute;
      top: 30px;
      left: -45px;
      width: 120px;
      padding: 5px 0px;
      color: #ffffff;
      text-align: center;
      font-size: 12px;
      background: #000000;
      border-radius: 3px;
    }

    ::after {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      width: 26px;
      height: 26px;
      border: 2px solid #000000;
      border-radius: 3px;
    }
  }
` 