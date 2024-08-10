import React, { useContext } from 'react'
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom'
import { AuthContext } from '../App';
import { getAuth, signOut } from "firebase/auth";


function Header(props) {
    const [user, setUser] = useContext(AuthContext)
    function userSignOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
            const newUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: ''
            }
            setUser(newUser)
        }).catch((error) => {
            // An error happened.
        });

    }

    return (

        <div>
            <img id='ema_logo' src={Logo} alt="" />
            <nav id="navContents">
                <div id='navList'>
                    <Link to="/">Shop</Link>
                    <Link to='/rv'>Order Review</Link>
                    <Link to="/manage">Inventory Manage</Link>
                    <div id="login">

                        {user.isSignedIn ? <img src={user.photo} alt="" /> : ""}

                        {user.isSignedIn ? <p>{user.name}</p> : ""}
                        {user.isSignedIn ? <button onClick={userSignOut}> Logout </button> : <Link to="/login"> Login</Link>}
                    </div>
                </div>
                <section id="search">
                    <input type="text" placeholder="Type Here to Search" />
                    <p style={{ fontSize: "30px", color: "yellow" }}> <i className="fa-solid fa-cart-shopping"></i></p>
                </section>

            </nav>
        </div>
    )
}

export default Header