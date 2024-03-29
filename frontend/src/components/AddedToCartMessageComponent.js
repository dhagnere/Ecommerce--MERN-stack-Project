import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/**
 * It's a React component that renders an alert message that can be dismissed.
 * @returns A component that renders an alert.
 */
const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true)
  return (
    <Alert
      show={show}
      variant='success'
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>L'article à été ajouté à votre panier.</Alert.Heading>
      <p>
        <Button variant='success'>Retour</Button>{" "}
        <Link to='/cartPage'>
          <Button variant='danger'>Voir le panier</Button>
        </Link>
      </p>
    </Alert>
  )
}

export default AddedToCartMessageComponent
