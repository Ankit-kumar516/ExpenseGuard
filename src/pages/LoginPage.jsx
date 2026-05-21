import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const {dispatch} = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch({type: "LOGIN", payload: {username}});
        navigate("/", { replace: true });
    };

    return (
        <main className="auth-screen">
            <section className="auth-card">
                <p className="auth-kicker">ExpenseGuard</p>
                <h1>Welcome Back</h1>
                <p className="auth-copy">Sign in to manage your expenses.</p>
                <form onSubmit={handleLogin} className="auth-form">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <button type="submit">Access Dashboard</button>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;