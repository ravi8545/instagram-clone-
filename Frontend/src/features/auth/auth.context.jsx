import { createContext, useState } from "react";
import { login, register } from "./services/auth.api";

// 1️⃣ Create Context
export const AuthContext = createContext();

// 2️⃣ Create Provider Component
export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (username, password) => {
        setLoading(true);
        try {
            const response = await login(username, password);
            setUser(response.username);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (username, email, password) => {
        setLoading(true);
        try {
            const response = await register(username, email, password);
            setUser(response.user);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider 
            value={{ user, loading, handleLogin, handleRegister }}
        >
            {children}
        </AuthContext.Provider>
    );
}