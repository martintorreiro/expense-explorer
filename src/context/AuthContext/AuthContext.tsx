import { getUserInfoService } from '@/service/getUserInfoService';
import { createContext, useEffect, useState } from 'react';

export interface AuthContextProps {
    children: JSX.Element | JSX.Element[];
}

export interface User {
    name: string;
    avatar: string | null;
    id: number;
}

export interface AuthContext {
    loginStorage: Function;
    logout: Function;
    user: User | null;
    token: string | null;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

const AuthProviderComponent = ({ children }: AuthContextProps) => {
    const [token, setToken] = useState<string | null>(
        JSON.parse(localStorage.getItem('token') || 'null')
    );

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));

        if (token) {
            getUserInfo(token);
        } else {
            setUser(null);
        }
    }, [token]);

    const getUserInfo = async (token: string) => {
        try {
            const userInfo = await getUserInfoService(token);
            setUser(userInfo);
        } catch (err) {
            setToken(null);
        }
    };

    const logout = () => {
        setToken(null);
    };

    const loginStorage = (token: string) => {
        setToken(token);
    };

    return (
        <AuthContext.Provider value={{ logout, loginStorage, user, token }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviderComponent;
