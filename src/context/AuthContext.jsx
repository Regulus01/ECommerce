import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userTokens) => {
        if(userTokens){
            setUser(userTokens);
            localStorage.setItem('user', JSON.stringify(userTokens));
        }
        else {
            setUser(null);
            localStorage.removeItem('user');
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user');
    }

    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}