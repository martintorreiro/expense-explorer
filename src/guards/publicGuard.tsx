import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { useContext } from "react"

export const PublicGuard = () => {
    const {token} = useContext(AuthContext)
    return token?<Navigate replace to='/'/>:<Outlet/>;
}