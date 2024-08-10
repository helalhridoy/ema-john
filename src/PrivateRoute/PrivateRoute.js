import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../App'


const PrivateRoute = ({ children, ...rest }) => {

    const location = useLocation();
    const [user, setUser] = useContext(AuthContext)
    return (

        !user.isSignedIn
            ?
            <Navigate to="/login" state={{ from: location }} replace />
            :
            children

    );
};

export default PrivateRoute
