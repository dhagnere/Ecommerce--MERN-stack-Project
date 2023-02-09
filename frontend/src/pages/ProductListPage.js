import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap'

import SortOptionsComponent from '../components/SortOptionsComponent'
import PriceFilterComponent from '../components/PriceFilterComponent'
import RatingFilterComponent from '../components/RatingFilterComponent'
import CategoryFilterComponent from '../components/CategoryFilterComponent'
import AttributesFilterComponent from '../components/AttributesFilterComponent'
import ProductForListComponent from '../components/ProductForListComponent'
import PaginationComponent from '../components/PaginationComponent'
/**
 * It renders a container with a row, which contains two columns, the first one contains a list group
 * with a sort options component, a filter title, a price filter component, a rating filter component,
 * a category filter component, an attributes filter component and two buttons, the second column
 * contains a product for list component and a pagination component
 * @returns A component that renders a container with a row and two columns. The first column contains
 * a list group with a sort options component, a price filter component, a rating filter component, a
 * category filter component, an attributes filter component, and two buttons. The second column
 * contains five product for list components and a pagination component.
 */
const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item className='mb-3 mt-3'>
              {<SortOptionsComponent />}
            </ListGroup.Item>
            FILTRER : <br />
            <ListGroup.Item>{<PriceFilterComponent />}</ListGroup.Item>
            <ListGroup.Item>{<RatingFilterComponent />}</ListGroup.Item>
            <ListGroup.Item>{<CategoryFilterComponent />}</ListGroup.Item>
            <ListGroup.Item>{<AttributesFilterComponent />}</ListGroup.Item>
            <ListGroup.Item>
              <Button variant='primary'>Filter</Button>
              <Button variant='danger'>Reset filters</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <ProductForListComponent
              key={idx}
              images={['games', 'monitors', 'tablets', 'games', 'monitors']}
              idx={idx}
            />
          ))}

          {<PaginationComponent />}
        </Col>
      </Row>
    </Container>
  )
}

export default ProductListPage
