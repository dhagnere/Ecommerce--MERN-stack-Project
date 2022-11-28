import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element="page not exist 404" />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;


