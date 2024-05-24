import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { useContext } from "react"

export const AuthGuard = () => {
    const {token} = useContext(AuthContext)
    return token?<Outlet/>:<Navigate replace to='/'/>;
}