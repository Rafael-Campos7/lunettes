import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider, { Settings } from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { SliderContainer, NextArrow, PrevArrow} from './styles'

export function Carousel() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 6,
    pauseOnHover: true, 
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        }
      },
    ],
  };

  return (
    <SliderContainer>
        <Slider 
          {...settings}
          nextArrow={ <NextArrow><BiChevronRight /></NextArrow> }
          prevArrow={ <PrevArrow><BiChevronLeft /></PrevArrow> }
        > 
          <div>
            <img src="./assets/images/slider-images/boy.png" />
          </div>
          <div>
            <img src="./assets/images/slider-images/dog.png" />
          </div>
          <div>
            <img src="./assets/images/slider-images/girls.png" />
          </div>
          <div>
            <img src="./assets/images/slider-images/man.png" />
          </div>
          <div>
            <img src="./assets/images/slider-images/boy.png" />
          </div>
          <div>
            <img src="./assets/images/slider-images/dog.png" />
          </div>
          <div>
            <img src="./assets/images/slider-images/girls.png" />
          </div>
          <div>
            <img src="./assets/images/slider-images/man.png" />
          </div>
        </Slider>
      </SliderContainer>  
  )
}