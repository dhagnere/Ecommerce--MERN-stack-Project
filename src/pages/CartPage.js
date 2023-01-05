import { Row, Col, Button, Container, Alert, ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CartItemComponent from '../components/CartItemComponent'

const CartPage = () => {
  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col md={8}>
          <h1>Panier.</h1>
          <ListGroup variant='flush'>
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
          <Alert variant='info'>Votre panier est vide</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Sous-Total (2 produits)</h3>
              <hr></hr>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                Prix: <span className='wt-bold'> 300€</span>
              </h4>
              <hr></hr>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to='/user/cart-details/'>
                <Button type='button'>Procéder au paiement.</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage
