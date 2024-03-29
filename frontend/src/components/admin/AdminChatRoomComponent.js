import { Toast, Button, Form } from 'react-bootstrap'
import { Fragment, useState } from 'react'

/**
 * It renders two toasts, each with a scrollable chat history and a form to submit a new message
 * @returns A React component.
 */
const AdminChatRoomComponent = () => {
  const [toast1, closeToast1] = useState(true)
  const close1 = () => closeToast1(false)
  const [toast2, closeToast2] = useState(true)
  const close2 = () => closeToast2(false)
  return (
    <>
      <Toast show={toast1} onClose={close1} className='ms-4 mb-5'>
        <Toast.Header>
          <strong className='me-auto'>Chat avec Mr X</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: '500px', overflow: 'auto' }}>
            {Array.from({ length: 30 }).map((_, idx) => (
              <Fragment key={idx}>
                <p className='bg-primary p-3 ms-4 text-light rounded-pill'>
                  <b>User wrote:</b> Hello, world! This is a chat message.
                </p>
                <p>
                  <b>Admin wrote:</b> Hello, world! This is a chat message.
                </p>
              </Fragment>
            ))}
          </div>

          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Liasser un message</Form.Label>
              <Form.Control as='textarea' rows={2} />
            </Form.Group>
            <Button variant='success' type='submit'>
              Submit
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
      <Toast show={toast2} onClose={close2} className='ms-4 mb-5'>
        <Toast.Header>
          <strong className='me-auto'>Chat avec Mme Y</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: '500px', overflow: 'auto' }}>
            {Array.from({ length: 30 }).map((_, idx) => (
              <Fragment key={idx}>
                <p className='bg-primary p-3 ms-4 text-light rounded-pill'>
                  <b>User wrote:</b> Hello, world! This is a chat message.
                </p>
                <p>
                  <b>Admin wrote:</b> Hello, world! This is a chat message.
                </p>
              </Fragment>
            ))}
          </div>

          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Laisser un message</Form.Label>
              <Form.Control as='textarea' rows={2} />
            </Form.Group>
            <Button variant='success' type='submit'>
              Submit
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  )
}

export default AdminChatRoomComponent
