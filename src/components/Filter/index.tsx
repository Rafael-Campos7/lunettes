import { useState } from 'react'
import { Container, FilterBySelector, FilterOption } from './styles'
import { dataColors,  dataPrices, dataModels} from './data'

interface Filters {
  type: string;
  value: string;
  active: boolean;
  background?: string;
}

export function Filter() {
  const [colors, setColors] = useState<Filters[]>(dataColors)
  const [models, setModels] = useState<Filters[]>(dataModels)
  const [prices, setPrices] = useState<Filters[]>(dataPrices)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filterBy, setFilterBy] = useState<String>("colors")
  const [filters, setFilters] = useState<Filters[]>(colors)

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

  function handleAddFilter(type: string, value: string) {
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
                onClick={() => { handleAddFilter(filter.type, filter.value) }}
              > {filter.value}</FilterOption>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}