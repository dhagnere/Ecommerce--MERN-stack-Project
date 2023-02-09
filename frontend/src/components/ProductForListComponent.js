import { Card, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Rating } from 'react-simple-star-rating'

/**
 * It renders a card with a picture and some text
 * @returns A React component.
 */
const ProductForListComponent = ({ images, idx }) => {
  return (
    <Card style={{ marginTop: '30px', marginBottom: '50px' }}>
      <Row>
        <Col lg={5}>
          <Card.Img
            variant='top' crossOrigin='annymous'
            src={'/images/' + images[idx] + '-category.png'}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name Lorem</Card.Title>
            <Card.Text>
            Product Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni ipsa ducimus architecto explicabo id
              accusantium nihil exercitationem autem porro esse..
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (1)
            </Card.Text>
            <Card.Text className='h4'>
              123€{' '}
              <LinkContainer to='/product-details'>
                <Button variant='danger'>Voir le produit </Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ProductForListComponent
