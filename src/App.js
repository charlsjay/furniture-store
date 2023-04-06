import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProductRoute/ProductRoute";
import { AuthProvider } from "./logic/context/AuthContext";
import { ShopProvider } from "./logic/context/ShopContext";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import MyAccount from "./Pages/MyAccout/MyAccout";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./Pages/SingleP/SingleProduct";



export default function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/my-account"
              element={
                <ProtectedRoute>
                  <MyAccount />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/product/:productSku"
              element={<SingleProduct />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </AuthProvider>
  );
}

