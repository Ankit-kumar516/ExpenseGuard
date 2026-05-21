import {useExpenses} from "../hooks/useExpenses.js";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const {expenses} = useExpenses();
    return (
        <section className="panel expense-list">
            {expenses.length === 0 ? (
                <p className="empty-state">No expenses yet.</p>
            ) : (
                expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense} />
                ))
            )}
        </section>
    );
};

export default ExpenseList;