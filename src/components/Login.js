import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getRequestToken } from '../API';
import { userContext } from '../App';
import Spinner from './Spinner';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(userContext);
    const history = useNavigate();

    const handleClick = async () => {
        setLoading(true);
        try {
            const res = await getRequestToken(username, password);
            setUser({ "sessionId": res.session_id, username });
            history('/');
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    return (
        <div className="login-page">
            {loading && <Spinner />}
            {error && <p style={{ color: "red", fontSize: "16px", marginBottom: "20px" }}>Sorry, Login failed. Try again.</p>}
            {!loading &&
                <>
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="username">User name:</label>
                        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleClick}>Login</button>
                </>
            }
        </div>
    )
}

export default Login