import { Row, Col, Container, Image , ListGroup,Form, Button, Alert} from 'react-bootstrap'
import AddedToCartMessageComponent from '../components/AddedToCartMessageComponent'
import {Rating} from "react-simple-star-rating"


const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedToCartMessageComponent/>
       <Row className='mt-5'>
        <Col md={4}>
          <Image fluid src="/images/games-category.png" />
          <Image fluid src="/images/monitors-category.png" />
          <Image fluid src="/images/tablets-category.png" />
          <Image fluid src="/images/games-category.png" />
        </Col>
      <Col md={8}>
        <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>LOREM IPSUM</ListGroup.Item>
                <ListGroup.Item><Rating readonly size={20} initialValue={4} /></ListGroup.Item>
                <ListGroup.Item>Blah BLah</ListGroup.Item>
                <ListGroup.Item>Blah BLah</ListGroup.Item>
              </ListGroup>
            </Col>

          <Col md={4}><ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Danger</Button>
                </ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup></Col>
        </Row>
        <Row>
          <Col className="mt-5">
              <h5>AVIS CLIENTS</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Vous devez vous connecter pour laisser un avis</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Addresse Mail</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Votre avis est important :</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Veuillez selectionner une option</option>
              <option value="1">Option-1</option>
              <option value="2">Option-2</option>
              <option value="3">Option-3</option>
            </Form.Select>
            <Button variant="primary">Primary</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailsPage
