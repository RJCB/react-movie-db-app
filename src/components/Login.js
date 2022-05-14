import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        return null;
    }

    return (
        <div className="login-page">
            <h1>Login</h1>
            <div>
                <label for="username">User name:</label>
                <input type="text" name="username" value={userName} onClick={(e) => setUserName(e.target.value)} />
            </div>

            <div>
                <label for="password">Password:</label>
                <input type="password" name="password" value={password} onClick={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login