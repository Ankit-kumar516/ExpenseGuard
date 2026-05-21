import { createContext, useReducer } from "react";

import { authReducer, authInitailState } from "./reducers/authReducer.js";
export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, authInitailState);
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};
