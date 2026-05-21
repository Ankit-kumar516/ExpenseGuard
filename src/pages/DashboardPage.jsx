import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import { useAuth } from "../hooks/useAuth.js";

const DashboardPage = () => {
    const { user } = useAuth();
    return (
        <div className="app-shell">
            <Navbar />
            <main className="dashboard">
                <section className="dashboard-intro">
                    <p className="eyebrow">Expense tracker</p>
                    <h1>Welcome, {user?.username}!</h1>
                </section>
                <BalanceCard />
                <ExpenseForm />
                <ExpenseList />
            </main>
        </div>
    );
};

export default DashboardPage;