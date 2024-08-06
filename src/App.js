
import Shop from './Shop/Shop';
import Rv from './Rv/Rv';
import Manage from './Manage/Manage';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /> <Shop products={products} setProducts={setProducts} priceSummery={priceSummery} setpriceSummery={setpriceSummery} /></>
    },
    {
      path: "/review",
      element: <><Header /><Rv products={products} setProducts={setProducts} priceSummery={priceSummery} setpriceSummery={setpriceSummery} /></>
    },
    {
      path: "/manage",
      element: <><Header /><Manage products={products} setProducts={setProducts} priceSummery={priceSummery} setpriceSummery={setpriceSummery} /></>
    }
  ]
  )

  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
