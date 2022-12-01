import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  InputGroup,
} from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand href='/'>VOTRE MARQUE</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <InputGroup>
              <DropdownButton
                id='dropdown-basic-button'
                title='Toutes les catégories'
              >
                <Dropdown.Item>Electronique</Dropdown.Item>
                <Dropdown.Item>Livres</Dropdown.Item>
                <Dropdown.Item>jeux et jouets</Dropdown.Item>
              </DropdownButton>
              <Form.Control
                type='text'
                placeholder='Rechercher sur le site...'
              />
              <Button variant='warning'>
                <i className='bi bi-search text-dark'></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to='/admin/orders'>
              <Nav.Link>
                Admin
                <span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title='Exemple Client' id='collasible-nav-dropdown'>
              <NavDropdown.Item
                eventKey='/user/my-orders'
                as={Link}
                to='/user/my-orders'
              >
                Mes commandes
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='/user' as={Link} to='/user'>
                Mon profile
              </NavDropdown.Item>
              <NavDropdown.Item>Se Déconnecter</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to='/Login'>
              <Nav.Link>Se connecter</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Register'>
              <Nav.Link>S'enregistrer</Nav.Link>
            </LinkContainer>
            <Nav.Link href='#pricing'>
              <Badge pill bg='danger'>
                2
              </Badge>
              <i class='bi bi-cart-dash'></i>
              <span className='ms-1'></span>
              PANIER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderComponent
