import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const login = async (inputs) => {
        console.log(inputs);
        const res = await axios.post("/api/login", inputs);
        console.log(res.data);
        setCurrentUser(res.data.userinfo);
    };
    const logout = async () => {
        await axios.get("/api/logout");
        setCurrentUser(null);
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};







