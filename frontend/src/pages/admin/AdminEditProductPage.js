import {
  Container,
  Row,
  Col,
  Button,
  Form,
  CloseButton,
  Table,
  Alert,
  Image,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const onHover = {
  cursor: "pointer",
  position: "absolute",
  left: "5px",
  top: "-10px",
  transform:"scale(2.5)"
 
}

const AdminEditProductPage = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  

  return (
    <Container>
      <Row className='justify-content-md-center mt-5'>
        <Col md={1}>
          <Link to='/admin/products'>
            <Button variant='primary' className='btn btn-info my-3'>
              Retour
            </Button>
          </Link>
        </Col>
        <Col md={6}>
          <h1>Editer un article</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>Nom du produit</Form.Label>
              <Form.Control
                name='name'
                required
                type='text'
                defaultValue='Panasonic'
              ></Form.Control>
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='exempleForm.ControTextarea1'
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name='description'
                required
                as='textarea'
                rows={3}
                defaultValue="Description de l'article"
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicCount'>
              <Form.Label>Quantité en stock</Form.Label>
              <Form.Control
                name='count'
                required
                type='number'
                defaultValue='2'
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPrice'>
              <Form.Label>Prix</Form.Label>
              <Form.Control
                name='name'
                required
                type='text'
                defaultValue='80€'
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicCategory'>
              <Form.Label>Catégorie{'  '}</Form.Label>
              <Form.Select
                required
                name='category'
                aria-label='Default select exemple'
              >
                <option value=''>Choix de la catégorie</option>
                <option value='1'>TV</option>
                <option value='2'>Photo</option>
                <option value='3'>Vidéo</option>
              </Form.Select>
            </Form.Group>

            <Row className='mt-5'>
              <Col md={6}>
                <Form.Group className='mb-3' controlId='formBasicAttributes'>
                  <Form.Label>Choisir un attribut et sa valeur.</Form.Label>

                  <Form.Select
                    name='atrrKey'
                    aria-label='Default select example'
                  >
                    <option>Choix d'un attribut</option>
                    <option value='rouge'>Couleur</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className='mb-3' controlId='formBasicAttributes'>
                  <Form.Label>Valeur de l'attribut.</Form.Label>

                  <Form.Select
                    name='atrrVal'
                    aria-label='Default select example'
                  >
                    <option>Choix de la valeur</option>
                    <option value='rouge'>Couleur</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attribut</th>
                    <th>Valeur</th>
                    <th>Effacer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attr key</td>
                    <td>attr value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
              <Col md={6} >
                <Form.Group className='mb-3' controlId='formBasicNewAttribute'>
                  <Form.Label>Creer un nouvel attribut</Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder='en premier choisir ou créer une categorie'
                    name='newAttrValue'
                    type='text'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className='mb-3'
                  controlId='formBasicNewAttributeValue'
                >
                  <Form.Label>Attribuer une valeur</Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder='en premier choisir ou créer une categorie'
                    required={true}
                    name='newAttrValue'
                    type='text'
                  />
                </Form.Group>
              </Col>
            </Row>

            <Alert variant='primary'>
              Après choisi un attribut et sa valeur, sélectionner le champ et
              appuyer sur entrée.
            </Alert>

            <Form.Group controlId='formFileMultiple' className='mb-3'>
              <Form.Label>Images</Form.Label>
              <Row>
                <Col style={{position:"relative"}} xs={3}>
                  <Image crossOrigin='annymous' src='/images/monitors-category.png' fluid />
                  <i style={onHover} className="bi bi-x text-danger"></i>
                </Col>
                <Col style={{position:"relative"}} xs={3}>
                  <Image crossOrigin='annymous' src='/images/monitors-category.png' fluid />
                  <i style={onHover} className="bi bi-x text-danger"></i>
                </Col>
             
              </Row>

              <Form.Control required type='file' multiple />
            </Form.Group>

            <Button variant='primary' type='submit'>
              METTRE A JOUR
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminEditProductPage
