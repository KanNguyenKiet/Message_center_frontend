import React, { createContext, useEffect, useState } from "react";
import getUserInfo from "../module/user"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserInfo()
        .then((uesr) => {
            console.log(user);
            setUser(user);
        })

        return () => {
            // logout
        };
    });

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};
