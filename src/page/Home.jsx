import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    var { currentUser } = useContext(AuthContext);
    return (
        <div>Hello {currentUser.last_name} {currentUser.first_name}</div>
    )
}

export default Home;