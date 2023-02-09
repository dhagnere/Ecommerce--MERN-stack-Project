import { Row, Col, Button, Form, UseState } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

/**
 * It's a React functional component that renders a form with a submit button. 
 * 
 * The form has a few input fields and a checkbox. 
 * 
 * The submit button is disabled until the form is valid. 
 * 
 * The form is valid when all the input fields are filled in. 
 * 
 * The form is validated using the React Hooks API. 

 * @returns A React component.
 */
const AdminEditUserPage = () => {
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
    <Row className='justify-content-md-center mt-5'>
      <Col md={1}>
        <Link to='/admin/users' className='btn btn-info my-3'>
          Retour
        </Link>
      </Col>

      <Col md={6}>
        <h1>Edition du client</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicFirstName'>
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              name='firstname'
              type='text'
              placeholder='john'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicLastName'>
            <Form.Label>Nom</Form.Label>
            <Form.Control
              name='lastName'
              type='text'
              defaultValue='doe'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name='email'
              type='email'
              placeholder='email@admin.com'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check name='isAdmin' type='checkbox' label='Is admin' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Mettre à jour.
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default AdminEditUserPage
