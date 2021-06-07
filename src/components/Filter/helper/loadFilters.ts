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
  styles: string[];
  price: number;
  formattedPrice: string;
  discountedPrice: string;
  images: Image[];
  code: string;
  isNewCollection: boolean;
  discount: number; 
}

type Filter = {
  type: string;
  value: string;
  active: boolean;
  background?: string;
  price?: number;
}

export function loadColors(products: Product[]) {
  const productsColors = products.reduce((colors: Filter[], { images }) => {
    images.forEach((image) => {
      const alreadyExists = colors.find(color => color.value === image.color.name)
      if (alreadyExists || image.color.name == 'NOTCOLOR' ) {
        return;
      }

      const color = {
        type: "color",
        value: image.color.name,
        background: image.color.background,
        active: false,
      }

      colors.push(color)
    })

    return colors
  }, [])

  return productsColors
}

export function loadModels(products: Product[]) {
  const productsModels = products.reduce((models: Filter[], { styles }) => {
    styles.forEach((style) => {
      const alreadyExists = models.find(model => style === model.value)
      if (alreadyExists ) {
        return;
      }

      const model = {
        type: "model",
        value: style,
        active: false,
      }

      models.push(model)
    })

    return models
  }, [])

  return productsModels
}

export function loadPrices(products: Product[]){
  const productsPrices = products.reduce((maxPrices: Filter[], { price }) => {
    const alreadyExists = maxPrices.find(maxPrice => maxPrice.price === price)
    if (alreadyExists) {
      return maxPrices;
    }
    const maxPrice = {
      type: "price",
      value: `Até R$ ${price}`,
      price: price, 
      active: false,
    }

    maxPrices.push(maxPrice)

    return maxPrices
  }, [])

  return productsPrices.reverse()
} 