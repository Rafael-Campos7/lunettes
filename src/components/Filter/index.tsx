import { useEffect, useState } from 'react'
import { Container, FilterBySelector, FilterOption } from './styles'

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

interface FilterProps {
  updateListing: (filteredProducts: Product[]) => void;
  products: Product[];
}

type Filter = {
  type: string;
  value: string;
  active: boolean;
  background?: string;
  price?: number;
}

export function Filter({ products, updateListing }: FilterProps) {
  const [colors, setColors] = useState<Filter[]>([])
  const [models, setModels] = useState<Filter[]>([])
  const [prices, setPrices] = useState<Filter[]>([])
  const [filterBy, setFilterBy] = useState<String>("colors")
  const [filters, setFilters] = useState<Filter[]>([])

  function loadFilters() {
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

    const producsPrices = products.reduce((maxPrices: Filter[], { price }) => {
      const alreadyExists = maxPrices.find(maxPrice => maxPrice.price === price)
      if (alreadyExists) {
        return prices;
      }
      const maxPrice = {
        type: "price",
        value: `Até R$ ${price}`,
        price: price, 
        active: false,
      }

      maxPrices.push(maxPrice)

      return prices
    }, [])
    
    setColors(productsColors)
    setModels(productsModels)
    setPrices(producsPrices)
  }

  function handleFilterBy (filterBy: string) {
    setFilterBy(filterBy)

    switch (filterBy) {
      case "colors": 
        setFilters(colors)
        break;
      case "models": 
        setFilters(models)
        break; 
      case "prices": 
        setFilters(prices)
        break; 
    }
  } 

  function handleActivateFilter(type: string, value: string) {
    switch (type) {
      case "color": 
        const colorsUpdated = colors.map(color => {
          if (color.value === value) {
            color.active ? color.active = false : color.active = true
            return color
          }
          return color
        })  
        setColors(colorsUpdated)
      break;
      case "model": 
        const modelsUpdated = models.map(model => {
          if (model.value === value) {
            model.active ? model.active = false : model.active = true
            return model
          }
          return model
        })  
        setModels(modelsUpdated)
      break; 
      case "price": 
        const pricesUpdated = prices.map(price => {
          if (price.value === value) {
            price.active ? price.active = false : price.active = true
            return price
          }
          return price
        })  
        setPrices(pricesUpdated)
      break; 
    }
  } 

  useEffect(() => {
    loadFilters()
    handleFilterBy("models")
  }, [])


  return (
    <Container>
      <div>
        <FilterBySelector
          type="button"
          onClick={() => handleFilterBy("colors")}
          active={filterBy === "colors"}
        >Cores
        </FilterBySelector>
        <FilterBySelector
          type="button"
          onClick={() => handleFilterBy("models")}
          active={filterBy === "models"}
        >Modelos
        </FilterBySelector>
        <FilterBySelector
          type="button"
          onClick={() => handleFilterBy("prices")}
          active={filterBy === "prices"}
        >Preços
        </FilterBySelector>
      </div>
      <ul>
        {filters.map(filter => {
          return (
            <li key={filter.value}>
              <FilterOption 
                background={filter.background} 
                active={filter.active} 
                onClick={() => { handleActivateFilter(filter.type, filter.value) }}
              > {filter.value}</FilterOption>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}