import { Nav, Navbar } from 'react-bootstrap'
import { Link, LinkContainer } from 'react-router-bootstrap'

/**
 * It returns a Navbar component with a Nav component inside of it
 * @returns A Navbar component with a Nav component inside.
 */
const AdminLinksComponent = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Nav className='flex-column'>
        <LinkContainer to='/admin/orders'>
          <Nav.Link>Commandes</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/admin/products'>
          <Nav.Link>Produits</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/admin/users'>
          <Nav.Link>Liste des clients</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/admin/chats'>
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/admin/analytics'>
          <Nav.Link>Analyse</Nav.Link>
        </LinkContainer>
        <Nav.Link>Déconnexion</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default AdminLinksComponent
