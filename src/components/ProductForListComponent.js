import { Card, Button } from 'react-bootstrap'
import LinkContainer from 'bootstrap'
import {RatingView} from 'react-simple-star-rating'


const ProductForListComponent = () => {

  return (
    <Card style={{ width: '18rem' }} className="mt-2 mb-2">
      <Card.Img variant="top" src="../images/games-category.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )

}

export default ProductForListComponent