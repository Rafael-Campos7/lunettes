import { BiChevronRight } from "react-icons/bi";
import { Container } from './styles'

interface BreadCrumbProps {
  title: string;
  trail: string[];
}

export function BreadCrumb({ title, trail }: BreadCrumbProps) {
  return (
    <Container>
      <div>
      {trail.map((path, index) => {
        return (
          <div key={path[0]}>
            <span>{path}</span>
            {(index !== trail.length - 1) && <BiChevronRight />}
          </div>
          )
        })}
      </div> 
      <h2>{title}</h2>
        
    </Container>
  )      
}