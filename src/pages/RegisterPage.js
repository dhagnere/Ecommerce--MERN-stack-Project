import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const onChange = () => {
    const password = document.querySelector('input[name=password]')
    const confirm = document.querySelector('input[name=confirmPassword')
    if (confirm.value === password.value) {
      confirm.setCustomValidity("")

    } else {
      confirm.setCustomValidity("Les mots de passes ne sont pas identiques...")
    }
  }
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
            <h1>Enregistrement</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className='mb-3'>
                <Form.Group className='mb-3' controlId='formBasicName'>
                  <Form.Label>Veuillez renseigner votre nom :</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Renseigner votre nom ici.'
                    name='name'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Veuillez svp entrer un nom !
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicLastName'>
                  <Form.Label>Veuillez renseigner votre prénom :</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Renseigner votre prénom ici.'
                    name='firstName'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Veuillez svp entrer votre prénom !
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Veuillez renseigner votre Email :</Form.Label>
                  <Form.Control
                    required
                    type='email'
                    placeholder='Renseigner votre email ici.'
                    name='email'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Veuillez svp entrer votre email !
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Veuillez choisir une mot de passe :</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder='Choix de votre mot de passe.'
                    name='password'
                    minLength={6}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Veuillez svp entrer un mot de passe valide !
                  </Form.Control.Feedback>
                  <Form.Text className='text-muted'>
                    Le mot de passe doit comporter au minimum 6 caractères.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='formBasicPasswordRepeat'
                >
                  <Form.Label>Veuillez répéter votre mot de passe :</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder='Votre mot de passe.'
                    name='confirmPassword'
                    minLength={6}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Les mots de passe ne correspondent pas !
                  </Form.Control.Feedback>
                </Form.Group>
                <Row clasName='pb-2'>
                  <Col>
                    Avez vous déja un compte ?
                    <Link to={'/login'}> Se connecter </Link>
                  </Col>
                </Row>
              </Row>
              <Button type='submit'>
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
                Enregistrer
              </Button>
              <Alert show={true} variant='danger'>
                Un utilisateur est déja enregistré avec cet email
              </Alert>
              <Alert show={true} variant='info'>
                Utilisateur crée !
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RegisterPage
