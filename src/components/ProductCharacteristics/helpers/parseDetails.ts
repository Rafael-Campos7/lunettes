type Details = {
  [key:string]: string;
}

export function parseDetails(details: Details) {
  let detailsParsed = []
  const properties: Details = {
    accessories: "Acessórios",
    bridge: "Medida da Ponte do Nariz",
    front: "Medida da Frente",
    hast: "Medida da Haste",
    height: "Medida da Altura",
    lens: "Lente",
    material: "Material do Óculos",
    size: "Tamanho",
    warranty: "Garantia",
  }
  
  for (const property in details) {
   detailsParsed.push({
     name: properties[property],
     value: details[property],
   }) 
  }

  return detailsParsed
}