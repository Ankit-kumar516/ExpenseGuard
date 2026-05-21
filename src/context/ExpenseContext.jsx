/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useEffect } from "react";
import { expenseReducer } from "./reducers/expenseReducer.js";

export const ExpenseStateContext = createContext();
export const ExpenseDispatchContext = createContext();

const initialExpenseState = JSON.parse(localStorage.getItem("expenses")) || [];

export const ExpenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expenseReducer, initialExpenseState);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(state));
    }, [state]);

    return (
        <ExpenseStateContext.Provider value={state}>
            <ExpenseDispatchContext.Provider value={dispatch}>
                {children}
            </ExpenseDispatchContext.Provider>
        </ExpenseStateContext.Provider>
    );
};