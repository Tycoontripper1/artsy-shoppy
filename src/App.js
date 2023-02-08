import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { ContextProvider } from "./Context";
import { ProductItem } from "./pages/productItem/ProductItem";
import ProductPage from "./pages/marketplace/Marketplace";
import { Cart } from "./pages/cart/Cart";
import Auctions from "./pages/auctions/Auctions";
import Livebid from "./pages/livebid/Livbid";
import { Drop } from "./pages/drop/Drop";
import { PaymentCheckout } from "./pages/cart/PaymentCheckout";
function App() {
  return (
    <ContextProvider>
         <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<ProductPage />} />
        <Route path='/marketplace/:productId' element={<ProductItem />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='/auctions' element={<Auctions />} />
        <Route path='/drop' element={<Drop />} />
        <Route path='/checkout' element={<PaymentCheckout />} />
        <Route path="/live-bid/:productId" element={<Livebid />} />
      </Routes>
    </ContextProvider>
    
  );
}

export default App;

