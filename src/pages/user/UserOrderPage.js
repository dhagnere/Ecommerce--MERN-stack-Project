import { Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserOrdersPage = () => {
  return (
    <Row className='m-5'>
      <Col md={12}>
        <h1>Mes commandes</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Utilisateur</th>
              <th>Date</th>
              <th>Total</th>
              <th>Livrée</th>
              <th>Détails de la commande</th>
            </tr>
          </thead>
          <tbody>
            {['bi bi-check-lg text-success', 'bi bi-x-lg text-danger'].map((item, idx) => (
               <tr key={idx}>
              <td key={idx+1}>1</td>
              <td>Mark Twain</td>
              <td>04/01/2023</td>
              <td>254 €</td>
              <td>
                <i className={item}></i>
              </td>
              <td>
                <Link to='/user/order-details'>Accéder aux détails</Link>
              </td>
            </tr>
            ))}
           
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default UserOrdersPage
