import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";  
import { USER_SERVICE_URL } from "../config";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFirstNameChange = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        e.preventDefault();
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    }

    const handleUsernameChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post(USER_SERVICE_URL + "/user", {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phone": phone,
                "userName": username,
                "password": password,
            });
        } catch(err) {
            setErr(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Fake Messenger</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="First name" onChange={handleFirstNameChange}/>
                    <input required type="text" placeholder="Last name" onChange={handleLastNameChange}/>
                    <input required type="email" placeholder="Email" onChange={handleEmailChange}/>
                    <input type="tel" placeholder="Phone number" onChange={handlePhoneChange}/>
                    <input required type="text" placeholder="Username" onChange={handleUsernameChange}/>
                    <input required type="password" placeholder="Password" onChange={handlePasswordChange}/>
                    <button disabled={loading}>Sign up</button>
                    {loading && <span align="center">Loading...</span>}
                    {err && <span align="center" class="text-warning">Register failed</span>}
                </form>
                <p>
                    You do have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;