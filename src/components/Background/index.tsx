import { BackgroundContainer } from './styles'

interface BackgroundProps {
  height: string;
}

export function Background({ height }: BackgroundProps) {
  return (
    <BackgroundContainer height={height} />
  )
}