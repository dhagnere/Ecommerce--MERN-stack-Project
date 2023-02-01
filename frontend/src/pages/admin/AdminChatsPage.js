import AdminChatRoomPageComponent from '../../components/admin/AdminChatRoomComponent'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent'
import { Row, Col } from 'react-bootstrap'

const AdminChatsPage = () => {
  return (

      <Row className="m-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <AdminChatRoomPageComponent />
        </Col>
      </Row>

  )
}

export default AdminChatsPage
