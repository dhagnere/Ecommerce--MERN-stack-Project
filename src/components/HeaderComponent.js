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
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='navbar-header'
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand href='/'>
            <img
              src='images/logo_transparent.png'
              crossOrigin='anonymous'
              height='80'
              alt='logo'
            />
          </Navbar.Brand>
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
                <Dropdown.Item>Photographie</Dropdown.Item>
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
              <Nav.Link>Connexion</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Register'>
              <Nav.Link>Enregistrement</Nav.Link>
            </LinkContainer>
            <Nav.Link href='/cart'>
              <Badge pill bg='danger'>
                2
              </Badge>
              <i className='bi bi-cart-dash'></i>
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
