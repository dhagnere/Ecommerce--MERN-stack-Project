import { Form } from 'react-bootstrap'

/**
 * It takes an array of objects, and for each object, it maps over the values of the object and creates
 * a checkbox for each value
 * @returns An array of objects.
 */
const AttributesFilterComponent = () => {
  return (
    <>
      {[
        { color: ['red', 'blue', 'green'] },
        { ram: ['1 TB', '2 TB', '4 TB'] },
      ].map((item, idx) => (
        <div key={idx} className='mb-3'>
          <Form.Label>
            <b>{Object.keys(item)}</b>
          </Form.Label>
          {item[Object.keys(item)].map((i, idx) => (
            <Form.Check
              key='idx'
              type='checkbox'
              id='default-checkbox'
              label={i}
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default AttributesFilterComponent
