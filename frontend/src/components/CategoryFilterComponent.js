import { Form } from 'react-bootstrap'

/**
 * It returns a React fragment containing a span and a form. The form contains 5 checkboxes
 * @returns A React component.
 */
const CategoryFilterComponent = () => {
  return (
    <>
      <span className='fw-bold'>Catégories</span>
      <Form>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx}>
            <Form.Check type='checkbox' id={`check-api2-${idx}`}>
              <Form.Check.Input type='checkbox' isValid />
              <Form.Check.Label style={{ cursor: 'pointer' }}>
                Catégorie -{idx}
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  )
}

export default CategoryFilterComponent
