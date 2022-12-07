import { Form } from 'react-bootstrap'

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label='Default select example'>
      <option>FILTRER PAR</option>
      <option value='price_1'>Prix : Croissant</option>
      <option value='price_-1'>Prix : Décroissant</option>
      <option value='ratting_-1'>Notes des Clients</option>
      <option value='name_1'>Nom A-Z</option>
      <option value='name_-1'>Nom : Z-A</option>
    </Form.Select>
  )
}

export default SortOptionsComponent
