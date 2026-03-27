import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Smart Expense Tracker</h1>
      <p>My first React project is running locally 🚀</p>
      <br />
      <ExpenseItem title="Food" amount={10.99} date="27 Mar 2026" />
      <ExpenseItem title="Transport" amount={5.5} date="27 Mar 2026" />
      <ExpenseItem title="Entertainment" amount={20.0} date="26 Mar 2026" />
    </div>
  );
}

export default App;
