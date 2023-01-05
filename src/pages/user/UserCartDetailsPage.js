import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from 'react-bootstrap'
import CartItemComponent from '../../components/CartItemComponent'

const UserCartDetailsPage = () => {
  return (
    <>
      <Container fluid>
        <Row className='mt-4'>
          <h1> Détails de votre panier.</h1>
          <Col md={8}>
            <br />
            <Row>
              <Col md={6}>
                <h2>Livraison </h2>
                <b>Nom :</b> John Doe <br />
                <b>Adresse :</b> 123 rue qui tourne 59140 Dunkerque <br />
                <b>Téléphone :</b> 888 777 666 55
              </Col>

              <Col md={6}>
                <h2>Méthode de paiement </h2>
                <Form.Select>
                  <option value='pp'>Paypal</option>
                  <option value='cod'>Paiement espèces</option>
                </Form.Select>
              </Col>

              <Row>
                <Col>
                  <Alert className='mt-3' variant='danger'>
                    Livraison non éffectuée.
                  </Alert>
                </Col>

                <Col>
                  <Alert className='mt-3' variant='success'>
                    Payée le 05/01/2023.
                  </Alert>
                </Col>
              </Row>
            </Row>
            <br />

            <h2>Liste des articles</h2>
            <ListGroup variant='flush'>
              {Array.from({ length: 3 }).map((item, idx) => (
                <CartItemComponent key={idx} />
              ))}
            </ListGroup>
          </Col>

          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Résumé de la commande</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Prix total (Taxes incluses):{' '}
                <span className='fw-bold'>297€</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Livraison: <span className='fw-bold'>Comprise</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Taxes: <span className='fw-bold'>Comprises</span>
              </ListGroup.Item>
              <ListGroup.Item className='text-danger'>
                Prix total: <span className='fw-bold'>297€</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className='d-grid gap-2'>
                  <Button size='lg' variant='danger' type='button'>
                    Paiement
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserCartDetailsPage
