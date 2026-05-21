import {useExpenses} from "../hooks/useExpenses.js";
import { useState } from "react";

const ExpenseItem = ({expense}) => {
    const {dispatch} = useExpenses();
    const [isEditing, setIsEditing] = useState(false);
    const [draftTitle, setDraftTitle] = useState(expense.title);
    const [draftAmount, setDraftAmount] = useState(expense.amount);
    const [draftCategory, setDraftCategory] = useState(expense.category || "");

    const removeExpense = () => {
        dispatch({type: "DELETE_EXPENSE", payload: expense.id});
    };

    const saveExpense = () => {
        dispatch({
            type: "UPDATE_EXPENSE",
            payload: {
                id: expense.id,
                updates: {
                    title: draftTitle,
                    amount: draftAmount,
                    category: draftCategory,
                },
            },
        });
        setIsEditing(false);
    };

    return (
        <article className="expense-item">
            {isEditing ? (
                <div className="expense-edit-grid">
                    <input value={draftTitle} onChange={(e) => setDraftTitle(e.target.value)} />
                    <input value={draftAmount} onChange={(e) => setDraftAmount(e.target.value)} type="number" />
                    <input value={draftCategory} onChange={(e) => setDraftCategory(e.target.value)} />
                    <div className="expense-edit-actions">
                        <button type="button" onClick={saveExpense}>Save</button>
                        <button type="button" className="secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="expense-copy">
                        <h4>{expense.title}</h4>
                        <p>{expense.category} · {expense.date}</p>
                    </div>
                    <div className="expense-actions">
                        <strong>Rs.{Number(expense.amount).toFixed(2)}</strong>
                        <button type="button" className="secondary" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button type="button" aria-label={`Delete ${expense.title}`} onClick={removeExpense}>
                            Delete
                        </button>
                    </div>
                </>
            )}
        </article>
    );
};

export default ExpenseItem;