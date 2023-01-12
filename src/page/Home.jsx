import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    var currentUser = useContext(AuthContext);
    return (
        <div>{currentUser.name}</div>
    )
}

export default Home;