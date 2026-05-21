import {useExpenses} from "../hooks/useExpenses.js";

const BalanceCard = () => {
    const {expenses} = useExpenses();
    const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

    return (
        <section className="balance-card">
            <p className="balance-label">Total Expenses</p>
            <h2>Rs.{total.toFixed(2)}</h2>
        </section>
    );
};

export default BalanceCard;