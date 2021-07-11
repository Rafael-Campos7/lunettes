type Style = {
  name: string;
}

type Image = {
  id: string;
  color_name: string;
  background: string;
  xs: string;
  md: string;
  lg: string;
}

type Product = {
  id: string;
  name: string;
  styles: Style[];
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
  background: string;
  price?: number;
}

type MaxPrice = {
  type: string;
  value: string;
  price: number; 
  active: boolean;
  background: string;
}

export function loadColors(products: Product[]) {
  const productsColors = products.reduce((colors: Filter[], { images }) => {
    images.forEach((image) => {
      const alreadyExists = colors.find(color => color.value === image.color_name)
      if (alreadyExists || image.color_name == 'NOTCOLOR' ) {
        return;
      }

      const color = {
        type: "color",
        value: image.color_name,
        background: image.background,
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
      const alreadyExists = models.find(model => style.name === model.value)
      if (alreadyExists ) {
        return;
      }

      const model = {
        type: "model",
        value: style.name,
        active: false,
        background: "",
      }

      models.push(model)
    })

    return models
  }, [])

  return productsModels
}

export function loadPrices(products: Product[]){
  const productsPrices = products.reduce((maxPrices: MaxPrice[], { price }) => {
    const alreadyExists = maxPrices.find(maxPrice => maxPrice.price === price)
    if (alreadyExists) {
      return maxPrices;
    }
    const maxPrice = {
      type: "price",
      value: `Até R$ ${price}`,
      price: price, 
      active: false,
      background: "",
    }

    maxPrices.push(maxPrice)

    return maxPrices
  }, [])

  return productsPrices.sort((a, b) => a.price - b.price)
} 