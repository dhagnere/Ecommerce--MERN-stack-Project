import { Form } from 'react-bootstrap'

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label='Default select example'>
      <option>Ouvrir le menu de sélection</option>
      <option value='1'>Un</option>
      <option value='2'>Deux</option>
      <option value='3'>Trois</option>
    </Form.Select>
  )
}

export default SortOptionsComponent
