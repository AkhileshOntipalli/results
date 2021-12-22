import React, { useState } from 'react';
import axios from 'axios';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const Login = () => {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        let obj = {};
        obj.email = email;
        obj.mobile = mobile;
        obj.password = password;
        axios.post(`http://inline4studios.com:8086/api/v1/motoyaar/partners/login`, obj)
            .then((resp) => {
                if (resp.status === 200) {
                    localStorage.setItem('user', JSON.stringify(resp.data.data));
                    history.push('/home');
                }
            });
    }

    const handleInput = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        if(name ==="email"){
            setEmail(event.target.value);
            setMobile(event.target.value);
        }
        else if(name==="password"){
            setPassword(event.target.password);
        }
        else{
            alert('Invalid name');
        }
    }
    return (
        <div id="container">
            <form>
                <label for="email"  >Email or password:</label>
                <input type="email" name="email" id="select" style=" margin-left:120px;float:centre; position:relative;"
                    onInput={handleInput}></input>
                <label for="email"  >Email or password:</label>
                <input type="password" name="password" id="select" style=" margin-left:120px;float:centre; position:relative;"
                    onInput={handleInput}></input>
            </form>
            <button type="submit" onSubmit={handleLogin}>Login</button>
        </div>

    )
};
export default Login;