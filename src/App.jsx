import Cart from "./page/Cart";
import HomePage from "./layout/HomePage";
import LoginPage from "./page/LoginPage";
import Menu from "./page/Menu";
import Register from "./page/Register";
import NotFound from "./page/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./layout/Profile";
import AddAdress from "./page/AddAdress";
import Order from "./page/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addAdress" element={<AddAdress />} />
          <Route path="/orders" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
    // <Home />
  );
}

export default App;
