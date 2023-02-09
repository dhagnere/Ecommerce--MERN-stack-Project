import { Outlet } from 'react-router-dom'
import UserChatComponent from './UserChatComponent'

/**
 * It returns a UserChatComponent and an Outlet.
 * @returns A React component that renders the UserChatComponent and the Outlet component.
 */
const RoutesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  )
}

export default RoutesWithUserChatComponent
