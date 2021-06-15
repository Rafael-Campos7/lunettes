import { useEffect, useState } from 'react'
import { Container, Color } from './styles/style'

type Color = {
  name: string;
  background: string;
}

interface ColorSelectorProps {
  onColorChange: (colorName: string) => void;
  colors: Color[];
}

export function ColorSelector({ colors, onColorChange }: ColorSelectorProps) {
  const [colorSelected, setColorSelected] = useState(colors[0].name)

  useEffect(() => {
    onColorChange(colorSelected)
  }, [colorSelected])

  return (
    <Container>
      {colors.map((color) => {
        return (
          <Color 
            key={color.name}
            onClick={() => { setColorSelected(color.name) }}
            background={color.background} 
            active={color.name === colorSelected} 
          >
            {color.name}
          </Color>
        )
      })}
    </Container>
  )
}