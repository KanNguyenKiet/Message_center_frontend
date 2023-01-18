import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);
    return (
        <div className='navbar'>
          <span className="logo">Fake Messenger</span>
          <div className="user">
            <img src={""} alt="" />
            <span>{currentUser.first_name + " " + currentUser.last_name}</span>
            <button onClick={()=>{}}>logout</button>
          </div>
        </div>
      )
}

export default Navbar;