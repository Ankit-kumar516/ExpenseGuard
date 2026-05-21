import { useState } from "react";
import { useExpenses } from "../hooks/useExpenses.js";

const ExpenseForm = () => {
    const { dispatch } = useExpenses();
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: crypto.randomUUID(),
            title,
            amount,
            category,
            date: new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
            }),
        };
        dispatch({ type: "ADD_EXPENSE", payload: expense });
        setTitle("");
        setAmount("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit} className="panel expense-form">
            <h3>Add New Expense</h3>
            <div className="expense-form-grid">
                <input
                    type="text"
                    placeholder="Expense Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;