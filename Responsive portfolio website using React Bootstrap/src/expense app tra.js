import "./App.css";

import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (title === "" || amount === "") return;

    setExpenses([
      ...expenses,
      { title: title, amount: Number(amount) }
    ]);

    setTitle("");
    setAmount("");
  };

  return (
    <div className="app-container">
      <h2>Expense Tracker 💰</h2>

      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.title} — ₹{exp.amount}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;



