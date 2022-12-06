import { Form } from 'react-bootstrap'

const RatingFilterComponent = () => {
  return (
    <Form>
      <Form.Check type={'checkbox'} id={`default`} label={`5 étoiles`} />
      <Form.Check type={'checkbox'} id={`default`} label={`4 étoiles`} />
      <Form.Check type={'checkbox'} id={`default`} label={`3 étoiles`} />
      <Form.Check type={'checkbox'} id={`default`} label={`2 étoiles`} />
      <Form.Check type={'checkbox'} id={`default`} label={`1 étoiles`} />
    </Form>
  )
}

export default RatingFilterComponent
