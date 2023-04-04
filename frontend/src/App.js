import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent'

//public pages aviable
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductListPage from './pages/ProductListPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent'

//protected user pages:
import UserCartDetailsPage from './pages/user/UserCartDetailsPage'
import UserOrderDetails from './pages/user/UserOrderDetailsPage'
import UserOrdersPage from './pages/user/UserOrderPage'
import UserProfilePage from './pages/user/UserProfilePage'

//protected admin pages:
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage'
import AdminChatsPage from './pages/admin/AdminChatsPage'
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage'
import AdminEditProductPage from './pages/admin/AdminEditProductPage'
import AdminEditUserPage from './pages/admin/AdminEditUserPage'
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import AdminUsersPage from './pages/admin/AdminUsersPage'

//utils
import ScrollToTop from './utils/ScrollToTop'

/* A function that returns a function. */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/*public routes aviable*/}
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/product-details' element={<ProductDetailsPage />} />
          <Route path='/product-details/:id' element={<ProductDetailsPage />} />
          <Route path='/product-list' element={<ProductListPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element="La page n'existe pas ! erreur: 404" />
        </Route>

        {/*user protected routes*/}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path='/user' element={<UserProfilePage />} />
          <Route path='/user/my-orders' element={<UserOrdersPage />} />
          <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
          <Route path='/user/order-details' element={<UserOrderDetails />} />
        </Route>

        {/*admin protected routes*/}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path='/admin/analytics' element={<AdminAnalyticsPage />} />
          <Route path='/admin/chats' element={<AdminChatsPage />} />
          <Route
            path='/admin/create-new-product'
            element={<AdminCreateProductPage />}
          />
          <Route
            path='/admin/edit-product'
            element={<AdminEditProductPage />}
          />
          <Route path='/admin/edit-user' element={<AdminEditUserPage />} />
          <Route
            path='/admin/orders-details'
            element={<AdminOrderDetailsPage />}
          />
          <Route path='/admin/orders' element={<AdminOrdersPage />} />
          <Route path='/admin/products' element={<AdminProductsPage />} />
          <Route path='/admin/users' element={<AdminUsersPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
