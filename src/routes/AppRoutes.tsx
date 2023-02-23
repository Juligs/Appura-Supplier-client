import { Routes, Route } from "react-router-dom";
import MarketPlacePage from "../pages/MarketPlacePage/MarketPlacePage";
import BussinesHomePage from "../pages/BussinesHomePage/BussinesHomePage";
import CreateBusinessPage from "../pages/CreateBusinessPage/CreateBusinessPage";
import SignupPage from "../pages/SignupPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/marketPlace" element={<MarketPlacePage />} />
      <Route
        path="/marketplace/details/:business_id"
        element={<BussinesHomePage />}
      />
      <Route
        path="/:business_id/products/details/:product_id"
        element={<p>Aqui detalles de un producto</p>}
      />
      <Route
        path="/signup"
        element={<SignupPage />}
      />
      <Route path="/profile/:user_id" element={<p>Profile</p>} />
      <Route path="/cart" element={<p>Shopping Cart</p>} />
      <Route path="/messages" element={<p>Messages</p>} />
      <Route path="/newBusiness" element={<CreateBusinessPage />} />
      <Route path="/myshops/shop1" element={<p>Shop 1</p>} />
      <Route path="/myshops/shop2" element={<p>Shop 2</p>} />
      <Route path="/myshops/shop3" element={<p>Shop 3</p>} />
      <Route path="/settings" element={<p>Settings</p>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<p>404</p>} />
    </Routes>
  );
};
export default AppRoutes;
