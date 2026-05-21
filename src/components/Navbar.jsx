import { useAuth } from "../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const {dispatch} = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({type: "LOGOUT"});
        navigate("/login", { replace: true });
    };

    return (
        <nav className="navbar">
            <div className="brand-mark">
                <span>Track</span>
                <strong>Spend</strong>
            </div>
            <button className="ghost-button" onClick={logout}>Logout</button>
        </nav>
    );
};

export default Navbar;