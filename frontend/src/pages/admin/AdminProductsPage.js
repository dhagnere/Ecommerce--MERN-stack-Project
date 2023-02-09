import { Row, Col, Table, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent'

/**
 * If the user clicks "OK" in the confirm dialog, then an alert dialog is shown.
 */
const deleteHandler = () => {
  if(window.confirm("Etes vous sure ?")) alert ("Produit suprimé")
}

/**
 * It returns a row with two columns, the first one is a component that contains a list of links, the
 * second one is a table with a list of products
 * @returns A React component
 */
const AdminProductsPage = () => {
  return (
    <Row className='m-5'>
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Liste des produits{' '}
          <LinkContainer to='/admin/create-new-product'>
            <Button variant='primary' size='lg'>
              Créer un nouveau produit
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom du produit</th>
              <th>Prix</th>
              <th>Catégorie</th>
              <th>Editer/Annuler</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Panasonic', price: '250€', category: 'TV' },
              { name: 'Sony PS5', price: '550€', category: 'Console' },
              { name: 'Fuji film', price: '220€', category: 'Photo' },
            ].map((item, idx) => (
              <tr key={idx}>
                <td key={idx + 1}>1</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to='/admin/edit-product'>
                    <Button className='btn-sm'>
                      <i className='bi bi-pencil-square'></i>
                    </Button>
                  </LinkContainer>
                  {' / '}
                  <Button variant='danger' className='btn-sm'>
                    <i className='bi bi-x-circle' onClick={deleteHandler}></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default AdminProductsPage
