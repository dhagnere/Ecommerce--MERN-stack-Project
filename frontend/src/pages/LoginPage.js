import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
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
    <>
      <Container>
        <Row className='mt-5 justify-content-md-center'>
          <Col md={6}>
            <h1>Connexion</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className='mb-3'>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Veuillez renseigner votre Email :</Form.Label>
                  <Form.Control
                    required
                    type='email'
                    placeholder='Renseigner votre email ici.'
                    name='email'
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Veuillez choisir une mot de passe :</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder='Choix de votre mot de passe.'
                    name='password'
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicCheckox'>
                  <Form.Check
                    label='Rester connecter'
                    type='checkbox'
                    name='doNotLogout'
                  />
                </Form.Group>

                <Row clasName='pb-2'>
                  <Col>
                    Vous ne possédez pas de compte ?
                    <Link to={'/register'}> Créer un compte </Link>
                  </Col>
                </Row>
              </Row>
              <Button  variant="primary" type='submit'>
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
               Se connecter
              </Button>
              <Alert show={true} variant='danger'>
                Mauvais identifiants ou mot de passe
              </Alert>
            
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPage
