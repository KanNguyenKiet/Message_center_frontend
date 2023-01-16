import React, { createContext, useEffect, useState } from "react";
import getUserInfo from "../module/user"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        getUserInfo()
        .then((user) => {
            setCurrentUser(user);
        });

        return () => {
            // logout
        };
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
