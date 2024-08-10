import React, { useContext } from 'react'
import { initializeApp } from "firebase/app";
import './Login.css'
import { firebaseConfig } from '../components/fireBaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';



function Login() {
    const [user, setUser] = useContext(AuthContext)
    const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    function signInOnClick() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const email = user.email;
                const displayName = user.displayName
                const photo = user.photoURL
                const newUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photo,
                    error: ''
                }
                setUser(newUser);
                console.log(newUser);
                navigate(from, { replace: true });
            }).catch((error) => {
                // Handle Errors here.
                console.log(error)

                // ...
            });
    }

    return (
        <div className='login'>
            <h1>This is Login Page</h1>
            <button onClick={signInOnClick}>Sign In</button>
        </div>
    )
}

export default Login
