import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'

import { useState } from 'react'

/**
 * The function is a form that allows the user to update his profile.
 * @returns A React component.
 */
const UserProfilePage = () => {
  const onChange = () => {
    const password = document.querySelector('input[name=password]')
    const confirm = document.querySelector('input[name=confirmPassword')
    if (confirm.value === password.value) {
      confirm.setCustomValidity('')
    } else {
      confirm.setCustomValidity('Les mots de passes ne sont pas identiques...')
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
            <h1>Profil utilisateur</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className='mb-3'>
                <Form.Group className='mb-3' controlId='formBasicName'>
                  <Form.Label>Votre prénom :</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    defaultValue='Prénom'
                    name='name'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Veuillez svp entrer un prénom !
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicLastName'>
                  <Form.Label>Votre nom :</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    defaultValue='Nom'
                    name='firstName'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Veuillez svp entrer votre Nom !
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Votre adresse Email :</Form.Label>
                  <Form.Control
                    disabled
                    value="Si vous désirez changer d'email, annulez votre compte et créez en un nouveau."
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPhone'>
                  <Form.Label>Votre numéro de téléphone :</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Entrer votre numéro de téléphone'
                    defaultValue=''
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicAdress'>
                  <Form.Label>Votre adresse :</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Entrez votre le numéro et le nom de votre rue.'
                    defaultValue=''
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicCountry'>
                  <Form.Label>Pays :</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Votre pays de résidence'
                    defaultValue=''
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicZip'>
                  <Form.Label>Votre code postal :</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Entrez votre code postal.'
                    defaultValue=''
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicCity'>
                  <Form.Label>Votre ville :</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Entrez le nom de votre ville'
                    defaultValue=''
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicState'>
                  <Form.Label>Votre région :</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Entrez le nom de votre région.'
                    defaultValue=''
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Veuillez choisir un mot de passe :</Form.Label>
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
              </Row>
              
              <Button vaiant='primry' type='submit'>
                Mettre à jour{' '}
              </Button>
              <Alert show={true} variant='danger'>
                Un utilisateur est déja enregistré avec cet email
              </Alert>
              <Alert show={true} variant='info'>
                Utilisateur mis à jour !
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserProfilePage
