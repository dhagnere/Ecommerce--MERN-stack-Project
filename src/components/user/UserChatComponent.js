import '../../chats.css'
import Button from 'react-bootstrap/Button'

const UserChatComponent = () => {
  return (
    <>
      <input type='checkbox' id='check' />
      <label className='chat-btn' htmlFor='check'>
        <i className='bi bi-chat-dots comment'></i>
        <span className='position-absolute top-0 start-10 translate-middle p-2 bg-danger boder border-light rounded-circle'></span>
        <i className='bi bi-x-circle close'></i>
      </label>
      <div className='chat-wrapper'>
        <div className='chat-header'>
          <h6>Nous somme à votre écoute.</h6>
        </div>
        <div className='chat-form'>
          <div className='chat-msg'>
            {Array.from({ length: 20 }).map((_, id) => (
              <div>
                <p>
                  <b>Vous : </b> Bonjour le monde ceci est un test
                </p>
                <p className='bg-primary p-3 ms-4 text-light rounded-pill'>
                  <b>Support: Bienvenue au test ^^</b>
                </p>
              </div>
            ))}
          </div>
          <textarea
            id='clientChatMsg'
            className='form-control'
            placeholder='Entrez votre texte...'
          ></textarea>
          <Button className='btn btn-success btn-block'>Envoyer</Button>
        </div>
      </div>
    </>
  )
}

export default UserChatComponent
