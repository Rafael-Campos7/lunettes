import { Container } from './styles'

type Detail = {
  name: string;
  value: string;
}

interface ProductCharacteristicsProps {
  details: Detail[];
}

export function ProductCharacteristics({ details }: ProductCharacteristicsProps) {
  return (
    <Container>
      <h3>Detalhes</h3>
      <table>
        <tbody>
        {details.map((detail) => {
          return (
            <tr key={detail.name} >
              <td>{detail.name}</td>
              <td>{detail.value}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </Container>
  )
}