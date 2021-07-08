type Style = {
  name: string;
}

export function getBreadCrumbTrail(category: string, styles: Style[]) {
  const trail = ["Home"]
  const subCategories = (styles.length > 1) ? "Multi Categorias" : styles[0].name
  trail.push(category)
  trail.push(subCategories)

  return trail
}