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

export function filter(selectedFilters: Filter[], products: Product[]) {
  const filteredProducts = products.filter((product) => {
    const result = selectedFilters.reduce((acc, filter) => {
      switch (filter.type) {
        case "color":
          product.images.forEach((image) => {
           if (image.color.name === filter.value) {
            acc.productHasColorOrModel = true
           }
          }) 
          break;
        case "model":
          product.styles.forEach((style) => {
            if (style === filter.value ) {
              acc.productHasColorOrModel = true
            }
          }) 
          break;
        case "price": 
          if (product.price <= filter.price) {
            acc.atPriceLimit = "withinThePrice"
          } else {
            acc.atPriceLimit = "outOfPrice"
          }
      }
      return acc
    }, {
      productHasColorOrModel: false,
      atPriceLimit: "initial",
    })

    if (result.atPriceLimit === "outOfPrice") {
      return false
    } else if (result.atPriceLimit === "withinThePrice" || result.productHasColorOrModel) {
      return true
    }  
    return false
  })

  if (selectedFilters.length > 0) {
    return filteredProducts
  }

  return products
}