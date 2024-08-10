
import Shop from './Shop/Shop';
import Rv from './Rv/Rv';
import Manage from './Manage/Manage';
import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const AuthContext = createContext(null);
export const ProductContext = createContext();
function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    error: ''
  });
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);
  const [priceSummery, setpriceSummery] = useState([
    {
      price: 0.0,
      shipping: 0.0,
      total: 0.0,
      tax: 0.0,
      grandTotal: 0.0
    }
  ])
  const router = (

    <ProductContext.Provider value={[cartList, setCartList, products, setProducts, priceSummery, setpriceSummery]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Shop /></>} />
          <Route path="/rv" element={<PrivateRoute>
            <><Header /><Rv /></>
          </PrivateRoute>} />
          <Route path="/manage" element={<><Header /><Manage /></>} />
          <Route path="/login" element={<><Header /> <Login /> </>} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );


  return (
    <div className="App">
      <AuthContext.Provider value={[user, setUser]}>
        {router}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
