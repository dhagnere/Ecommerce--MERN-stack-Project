import { Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent'

const AdminOrdersPage = () => {
  return (
    <Row className='m-5'>
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>Mes commandes</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Utilisateur</th>
              <th>Date</th>
              <th>Total</th>
              <th>Livrée</th>
              <th>Méthode de paiement</th>
              <th>Détails de la commande</th>
            </tr>
          </thead>
          <tbody>
            {['bi bi-check-lg text-success', 'bi bi-x-lg text-danger'].map(
              (item, idx) => (
                <tr key={idx}>
                  <td key={idx + 1}>1</td>
                  <td>Mark Twain</td>
                  <td>04/01/2023</td>
                  <td>254 €</td>

                  <td>
                    <i className={item}></i>
                  </td>
                  <td>Paypal</td>
                  <td>
                    <Link to='/admin/orders-details'>Accéder aux détails</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default AdminOrdersPage
