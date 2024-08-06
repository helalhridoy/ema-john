import React from 'react'
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom'
function Header(props) {
    return (

        <div>

            <img id='ema_logo' src={Logo} alt="" />
            <nav id="navContents">
                <div id='navList'>
                    <Link to="/">Shop</Link>
                    <Link to='/review'>Order Review</Link>
                    <Link to="/manage">Inventory Manage</Link>
                </div>
                <section id="search">
                    <input type="text" placeholder="Type Here to Search" />
                    <p style={{ fontSize: "30px", color: "yellow" }}> <i class="fa-solid fa-cart-shopping"></i></p>
                </section>
            </nav>
        </div>
    )
}

export default Header