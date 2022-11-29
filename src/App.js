import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductListPage from './pages/ProductListPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent'
import UserCartDetailsPage from './pages/user/UserCartDetailsPage'
import UserOrderDetails from './pages/user/UserOrderDetailsPage'
import UserOrdersPage from './pages/user/UserOrderPage'
import UserProfilePage from './pages/user/UserProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cartPage' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product-details' element={<ProductDetailsPage />} />
        <Route path='/product-details/:id' element={<ProductDetailsPage />} />
        <Route path='/product-list' element={<ProductListPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element='page not exist 404' />
        /**Protected Routes */
        <Route element={<ProtectedRoutesComponent />}>
          <Route path='/user' element={<UserProfilePage />} />
          <Route path='/user/my-orders' element={<UserOrdersPage />} />
          <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
          <Route path='/user/order-details' element={<UserOrderDetails />} />
        </Route>
        /**end of protected Routes */
      </Routes>
    </BrowserRouter>
  )
}

export default App
