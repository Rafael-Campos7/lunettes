import { useEffect } from 'react';
import { useRef } from 'react';
import Slider, { Settings } from 'react-slick'
import { SliderContainer, DotsContainer, Dot, ColorDot, ImageContainer } from './styles'

type Image = {
  id: string;
  url: string;
  color: {
    name: string;
    background: string;
  };
  allImages: {
    xs: string;
    md: string;
    lg: string;
  };
}

interface ProductGalleryProps {
  images: Image[];
  colorDots: boolean;
  selectedIndex?: number;
}

export function ProductGallery({ images, colorDots, selectedIndex }: ProductGalleryProps) {
  const sliderRef = useRef(null)
  
  useEffect(() => {
    sliderRef.current.slickGoTo(selectedIndex)
    
  }, [selectedIndex])

  const settings: Settings = {
    arrows: false,
    dots: true,
    dotsClass: "dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <DotsContainer isColorDots={colorDots} >
        {dots}
      </DotsContainer>
    ),
    customPaging: (i) => {
      if (colorDots) {
        return <ColorDot productColor={images[i].color} />
      } else {
        return <Dot />
      }   
    }
  };

  return (
    <SliderContainer>
      <Slider ref={sliderRef} {...settings}>
        {
          images.map((image, index) => {
            return (
              <ImageContainer
                key={image.id}
                isFirstImage={(index == 0)}
                imageHover={images[1].allImages.lg}
              >
                <img src={image.allImages.lg} alt="Óculos Lunettes" />
              </ImageContainer>
            )
          })
        }
      </Slider>
    </SliderContainer>
  )
}