import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { ContextProvider } from "./Context";
import { ProductItem } from "./pages/productItem/ProductItem";
import ProductPage from "./pages/marketplace/Marketplace";

function App() {
  return (
    <ContextProvider>
         <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<ProductPage />} />
        <Route path='/marketplace/:productId' element={<ProductItem />} />
      </Routes>
    </ContextProvider>
    
  );
}

export default App;

