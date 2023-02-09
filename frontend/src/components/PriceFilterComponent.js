import { Form } from 'react-bootstrap'

/**
 * It returns a Form.Label and a Form.Range.
 * @returns A React component
 */
const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className='fw-bold'>Prix inférieur à :</span> 500€
      </Form.Label>
      <Form.Range min={10} max={1000} step={10} />
    </>
  )
}

export default PriceFilterComponent
