import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from 'react-bootstrap'
import AddedToCartMessageComponent from '../components/AddedToCartMessageComponent'
import { Rating } from 'react-simple-star-rating'

const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className='mt-5'>
        <Col md={4}>
          <Image fluid src='/images/games-category.png' />
          <Image fluid src='/images/monitors-category.png' />
          <Image fluid src='/images/tablets-category.png' />
          <Image fluid src='/images/games-category.png' />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h1>Nom du produit.</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} />
                  (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Prix : <span className='fw-bold'>245 € </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  velit tortor, aliquet sit amet rhoncus nec, facilisis ac leo.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Mauris vel viverra ex, eu
                  aliquet mi. Nullam ut gravida elit.{' '}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status : En stock.</ListGroup.Item>
                <ListGroup.Item>
                  Prix : <span className='fw-bold'> 245 €</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantité :
                  <Form.Select size='lg' aria-label='Default select example'>
                    <option>1</option>
                    <option value='1'>2</option>
                    <option value='2'>3</option>
                    <option value='3'>4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant='danger'>Ajouter au panier</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className='mt-5'>
              <h5>AVIS CLIENTS</h5>
              <ListGroup variant='flush'>
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    John Doe <br />
                    <Rating readonly size={20} initialValue={4}></Rating>
                    <br />
                    12/12/2022 <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce velit tortor, aliquet sit amet rhoncus nec, facilisis
                    ac leo.
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant='danger'>
            Vous devez vous connecter pour laisser un avis.
          </Alert>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Votre avis est important :</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
            <Form.Select aria-label='Default select example'>
              <option>Notation sur le produit</option>
              <option value='5'>5 (très bon)</option>
              <option value='4'>4 (bon)</option>
              <option value='3'>3 (moyen)</option>
              <option value='2'>2 (mauvais)</option>
              <option value='1'>1 (très mauvais)</option>
             
            </Form.Select>
            <Button className="mb-3 mt-3"variant='primary'>Envoi</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailsPage
