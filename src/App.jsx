// App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductDetail from "./components/ProductDetail";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
    return (
        <Provider store={store}>
            <>
                <header className='header'>
                    <div className="headerLogo">
                        <button className='logoBtn'>C</button>
                    </div>
                    <div className="headerLinks">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/product">Products</Link>
                        <Link to="/cart">Cart</Link>
                    </div>
                    <div className="headerMenu">
                        <NightlightIcon />
                        <ShoppingCartIcon />
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products/:productId" element={<ProductDetail />} />
                </Routes>
            </>
        </Provider>
    );
}

export default App;
