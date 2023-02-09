import Pagination from 'react-bootstrap/Pagination'

/**
 * It returns a Pagination component with a bunch of Pagination.Item components inside of it.
 * @returns A React component
 */
const PaginationComponent = () => {
  return (
<Pagination>

      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
     

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
   
    </Pagination>
  )
}





export default PaginationComponent