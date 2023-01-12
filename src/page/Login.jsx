import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER_SERVICE_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [err, setErr] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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

        // Check user input 
        if (username === '') {
            setMessage('Please enter username!');
            setLoading(false);
            return;
        }
        if (password === '') {
            setMessage('Please enter password');
            setLoading(false);
            return;
        }

        try {
            var resp = await axios.post(USER_SERVICE_URL + "/login", {
                "username": username,
                "password": password
            });
            if (!resp['data']['is_success']) {
                setMessage("Username or password is incorrect!");
            } else {
                sessionStorage.setItem("_session", resp['data']['session_key']);
                console.log(sessionStorage.getItem('_session'));
                navigate('/');
            }
        } catch(err) {
            setErr(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={handleUsernameChange}/>
                <input type="password" placeholder="Password" onChange={handlePasswordChange}/>
                <button disabled={loading}>Sign in</button>
                {message && <span>{message}</span>}
                {loading && <span align="center">Loading...</span>}
                {err && <span align="center">Login failed</span>}
                </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login;