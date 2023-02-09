import { Button , Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

/**
 * It returns a card with a title and a button
 * @returns A React component.
 */
const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    'images/tablets-category.png',
    'images/monitors-category.png',
    'images/games-category.png',
    'images/tablets-category.png',
    'images/tablets-category.png',
    'images/tablets-category.png',
    'images/tablets-category.png',
  ]
  return (
    <Card>
      <Card.Img crossOrigin='anonymous' variant='top' src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to='/product-list'>
          <Button variant='primary'>Voir la catégorie</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

export default CategoryCardComponent
