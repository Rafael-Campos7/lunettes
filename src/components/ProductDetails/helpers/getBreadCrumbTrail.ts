export function getBreadCrumbTrail(category: string, styles: string[]) {
  const trail = ["Home"]
  const subCategories = (styles.length > 1) ? "Multi Categorias" : styles[0]
  trail.push(category)
  trail.push(subCategories)

  return trail
}