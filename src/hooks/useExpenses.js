import { useContext } from "react";
import { ExpenseStateContext, ExpenseDispatchContext } from "../context/ExpenseContext.jsx";

export const useExpenses = () => {
    const state = useContext(ExpenseStateContext);
    const dispatch = useContext(ExpenseDispatchContext);
    return {
        expenses: state,
        dispatch,
    };
};