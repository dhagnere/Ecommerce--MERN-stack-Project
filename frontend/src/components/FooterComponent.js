import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className='bg-dark text-white text-center py-5 mt-5'>
          <Col>Copyright &copy; Dhagnere</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponent
