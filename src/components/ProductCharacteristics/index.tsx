import { Container } from './styles'
import { parseDetails } from './helpers/parseDetails'

type Details = {
  accessories: string;
  bridge: string;
  front: string;
  hast: string;
  height: string;
  lens: string;
  material: string;
  size: string;
  warranty: string;
}

interface ProductCharacteristicsProps {
  details: Details;
}

export function ProductCharacteristics({ details }: ProductCharacteristicsProps) {
  const formattedDetails = parseDetails(details)
  
  return (
    <Container>
      <h3>Detalhes</h3>
      <table>
        <tbody>
        {formattedDetails.map((detail) => {
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