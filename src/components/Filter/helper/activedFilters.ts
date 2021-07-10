type Filter = {
  type: string;
  value: string;
  active: boolean;
  background: string;
  price?: number;
}

export function activedFilters(colors: Filter[], models: Filter[], prices: Filter[]) {
  const allFilters = colors.concat(models, prices)

  const selectedFilters = allFilters.reduce((selecFilters: Filter[], filter) => {
    if(filter.active === true) {
      selecFilters.push(filter)
    }

    return selecFilters    
  }, [])

  return selectedFilters  
}