import { Form } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { Fragment } from 'react'

const RatingFilterComponent = () => {
  return (
    <>
      <span className='fw-bold'>Notes des Clients</span>

      {Array.from({ length: 5 }).map((_, idx) => (
        <Fragment key={idx}>
        <Form.Check type='checkbox' id={`chec-api-${idx}`}>
          <Form.Check.Input type='checkbox' isValid />
          <Form.Check.Label style={{ cursor: 'pointer' }}>
            {<Rating readonly size={20} initialValue={5 - idx} />}
          </Form.Check.Label>
          </Form.Check>
        </Fragment>
      ))}
    </>
  )
}

export default RatingFilterComponent
