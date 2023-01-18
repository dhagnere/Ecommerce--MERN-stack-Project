
import { Row, Col, Table, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent'

const deleteHandler = () => {
  if(window.confirm("Etes vous sure ?")) alert ("Utilsateur supprimé")
}

const AdminUsersPage = () => {
  return (
    <Row className='m-5'>
      <Col md={2}>
        <AdminLinksComponent/>
      </Col>
      <Col md={10}>
        <h1>Mes commandes</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Editer/Effacer</th>
           
            </tr>
          </thead>
          <tbody>
            {['bi bi-check-lg text-success', 'bi bi-x-lg text-danger'].map((item, idx) => (
               <tr key={idx}>
              <td key={idx+1}>1</td>
              <td>Mark</td>
              <td>Twain</td>
                <td>Mark-twain@gmail.com €</td>
                <td>
                  <i className={item}></i>
                </td>
                <td>
                <LinkContainer to='/admin/edit-user'>
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


export default AdminUsersPage