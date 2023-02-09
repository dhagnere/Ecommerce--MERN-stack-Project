import AdminChatRoomPageComponent from '../../components/admin/AdminChatRoomComponent'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent'
import { Row, Col } from 'react-bootstrap'

/**
 * It returns a row with two columns. The first column has a component called AdminLinksComponent and
 * the second column has a component called AdminChatRoomPageComponent.
 * @returns A function that returns a JSX element.
 */
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

/* Exporting the function `AdminChatsPage` so that it can be imported into another file. */
export default AdminChatsPage
