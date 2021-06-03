import Slider, { Settings } from 'react-slick'
import { FiHeart } from "react-icons/fi";
import { Container, Name, Id, Price, Details, SliderContainer, DotsContainer, DotButton, ImageContainer, DiscountStamp } from './styles'

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

type Product = {
  id: string;
  name: string;
  price: string;
  discountedPrice: string;
  images: Image[];
  code: string;
  isNewCollection: boolean;
  discount: number;
}

interface ProductProps {
  product: Product;
}

export function Product({ product }: ProductProps) {
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
      <DotButton productColor={product.images[i].color} />
    )
  };

  return (
    <Container>
      {product.discount > 0 && <DiscountStamp>{product.discount}% <span>OFF</span></DiscountStamp>}
      <SliderContainer>
        <Slider {...settings}>
          {
            product.images.map((image, index) => {
              return (
                <ImageContainer 
                  key={image.id} 
                  isFirstImage={(index == 0)}
                  imageHover={product.images[1].allImages.md} 
                >
                  <img src={image.allImages.md} alt="Óculos Lunettes" />
                </ImageContainer>
              )
            })
          }
        </Slider>
      </SliderContainer>
      <Name>
        {product.name}
        {(product.isNewCollection && <span>Nova coleção</span>)}
      </Name>
      <Id>
        {product.code}
      </Id>
      <Price discount={product.discount > 0}>
        <h3 className="priceWithoutDiscount">{product.price}</h3>
        {(product.discount > 0) && <h3 className="priceWithDiscount" >{ product.discountedPrice }</h3>}
      </Price>
      <Details>
        <FiHeart />
        <span>Ver mais</span>
      </Details>
    </Container>
  )
}