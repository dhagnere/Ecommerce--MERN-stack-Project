import { Form } from 'react-bootstrap'

const PriceFilterComponent = () => {
  return (
    <>
     
      <Form.Label>
        <span className="fw-bold">Prix inférieur à :</span> 500€
      </Form.Label>
      <Form.Range min={10} max={1000} step={10} />
    </>
  )
}

export default PriceFilterComponent