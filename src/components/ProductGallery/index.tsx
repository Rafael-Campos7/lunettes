import { useEffect } from 'react';
import { useRef } from 'react';
import Slider, { Settings } from 'react-slick'
import { SliderContainer, DotsContainer, Dot, ColorDot, ImageContainer } from './styles'

type Image = {
  id: string;
  color_name: string;
  background: string;
  xs: string;
  md: string;
  lg: string;
}

interface ProductGalleryProps {
  images: Image[];
  colorDots: boolean;
  selectedIndex?: number;
}

export function ProductGallery({ images, colorDots, selectedIndex = 0 }: ProductGalleryProps) {
  const sliderRef = useRef<Slider>(null)
  
  useEffect(() => {
     sliderRef.current?.slickGoTo(selectedIndex)

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
        return <ColorDot 
          productColor={{
            colorName: images[i].color_name,
            background: images[i].background
          }} 
        />
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
                imageHover={images[1].lg}
              >
                <img src={image.lg} alt="Óculos Lunettes" />
              </ImageContainer>
            )
          })
        }
      </Slider>
    </SliderContainer>
  )
}