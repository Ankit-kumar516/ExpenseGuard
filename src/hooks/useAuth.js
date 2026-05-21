import { useContext } from "react";
import { AuthStateContext, AuthDispatchContext } from "../context/AuthContext.jsx";

export const useAuth = () => {
    const state = useContext(AuthStateContext);
    const dispatch = useContext(AuthDispatchContext);

    return {
        ...state,
        dispatch,
    };
};