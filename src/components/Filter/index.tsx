import { useEffect, useState } from 'react'
import { HiFilter } from 'react-icons/hi'
import { FiX } from "react-icons/fi";
import { Container, SelectorContainer, FilterBySelector, FilterOption, FiltersEnabled, OpenFilters, CloseFilters } from './styles/styles'
import { loadColors, loadModels, loadPrices } from './helper/loadFilters'
import { activedFilters } from './helper/activedFilters'

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

interface FilterProps {
  handleSelectedFilters: (selectedFilters: Filter[]) => void;
  products: Product[];
}

type Filter = {
  type: string;
  value: string;
  active: boolean;
  background: string;
  price?: number;
}

export function Filter({ products, handleSelectedFilters }: FilterProps) {
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false)
  const [colors, setColors] = useState<Filter[]>([])
  const [models, setModels] = useState<Filter[]>([])
  const [prices, setPrices] = useState<Filter[]>([])
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([])
  const [filterBy, setFilterBy] = useState<String>("")
  const [filters, setFilters] = useState<Filter[]>([])

  const numberSelectedFilters = selectedFilters.length

  function handleFilterBy(filter: string) {
    setFilterBy(filter)

    switch (filter) {
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
        setFilters(colorsUpdated)
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
        setFilters(modelsUpdated)
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
        setFilters(pricesUpdated)
        break;
    }

    setSelectedFilters(activedFilters(colors, models, prices))
  }

  function handleRemoveFilters() {
    const updatedColors = colors.map((color) => {
      color.active = false
      return color
    })
    setColors(updatedColors)

    const updatedModels = models.map((model) => {
      model.active = false
      return model
    })
    setModels(updatedModels)

    const updatedPrices = prices.map((price) => {
      price.active = false
      return price
    })
    setPrices(updatedPrices)

    setSelectedFilters(activedFilters(colors, models, prices))
  }

  useEffect(() => {
    setColors(loadColors(products))
    setModels(loadModels(products))
    setPrices(loadPrices(products))
    setFilterBy("colors")
    setFilters(loadColors(products))
  }, [products])

  useEffect(() => {
    handleSelectedFilters(selectedFilters)
  }, [selectedFilters])

  return (
    <>
      <OpenFilters selectedFilters={numberSelectedFilters}>
        <button onClick={() => {setIsFilterOptionsOpen(true)}}>
          <HiFilter/>Filtrar
        </button>
      </OpenFilters>
      <Container isFilterOptionsOpen={isFilterOptionsOpen}>
        <CloseFilters onClick={() => {setIsFilterOptionsOpen(false)}} isFilterOptionsOpen={isFilterOptionsOpen} >
          <FiX />
        </CloseFilters>
        <SelectorContainer>
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
        </SelectorContainer>
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
        <FiltersEnabled>
          {selectedFilters.map((filter) => {
            return (
              <span key={filter.value} >{filter.value};</span>
            )
          })
          }
          {selectedFilters.length > 0 && <button onClick={handleRemoveFilters} >Limpar filtros</button>}
        </FiltersEnabled>
      </Container>
    </>
  )
}