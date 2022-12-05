import "../../chats.css"

const UserChatComponent = () => {
  return (
    <>
      <input type='checkbox' id='check' />
      <label className='chat-btn' htmlFor='check'>
        <i className='bi bi-chat-dots comment'></i>
        <i className='bi bi-x-circle close'></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Nous somme à votre écoute.</h6>
        </div>
      </div>
    </>
  )
}

export default UserChatComponent
