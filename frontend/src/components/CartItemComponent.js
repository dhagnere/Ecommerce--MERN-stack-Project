import { ListGroup, Row, Col, Image, Form, Button } from 'react-bootstrap'
/**
 * It returns a ListGroup.Item with a Row inside, which contains a Col with an Image, a Col with text,
 * a Col with text, a Col with a Form.Select, and a Col with a Button
 * @returns A React component.
 */
const CartItemComponent = () => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image crossOrigin = "anonymous" src='/images/games-category.png' fluid />
          </Col>
          <Col md={2}>
            Logotech serie <br />
            Souris Gaming
          </Col>
          <Col md={2}>
            <b> 89€</b>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type='button'
              variant=' secondary'
              onClick={() => window.confirm('Etes vous sure ?')}
            >
              <i className='bi bi-trash'></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <br/>
    </>
  )
}

export default CartItemComponent
