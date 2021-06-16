import Slider, { Settings } from 'react-slick'
import { SliderContainer, DotsContainer, DotButton, ImageContainer } from './styles'

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
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const settings: Settings = {
    arrows: false,
    dots: true,
    dotsClass: "dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <DotsContainer>
        {dots}
      </DotsContainer>
    ),
    customPaging: i => (
      <DotButton productColor={images[i].color} />
    )
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {
          images.map((image, index) => {
            return (
              <ImageContainer
                key={image.id}
                isFirstImage={(index == 0)}
                imageHover={images[1].allImages.md}
              >
                <img src={image.allImages.md} alt="Óculos Lunettes" />
              </ImageContainer>
            )
          })
        }
      </Slider>
    </SliderContainer>
  )
}