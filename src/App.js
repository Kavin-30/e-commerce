import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shops } from "./pages/Shops";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import { ShopCategorys } from "./pages/ShopCategorys"
import {LoginandSignup} from "./pages/LoginandSignup"
import { Footer } from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import hand_craft from './components/Assets/banner_kids.png'
import { Loginhere } from "./pages/Loginhere";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shops />}/>
          <Route path='/mens' element={<ShopCategorys banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategorys banner={women_banner} category="women"/>}/>
          <Route path='/handcrafts' element={<ShopCategorys banner={hand_craft} category="handcraft"/>}/>
          <Route path="product" element={<Products/>}>
          <Route path=':productId' element={<Products/>}></Route>
          </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginandSignup/>}/>
        <Route path="/loginhere" element={<Loginhere/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
