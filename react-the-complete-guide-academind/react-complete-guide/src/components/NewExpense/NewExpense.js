import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const addExpenseHandler = () => {
    setShowExpenseForm(true);
  };
  const cancelExpenseFormHandler = (cancelled) => {
    setShowExpenseForm(!cancelled);
  };
  const addExpenseButton = (
    <div className="new-expense__section">
      <button onClick={addExpenseHandler}>Add New Expense</button>
    </div>
  );
  return (
    <div className="new-expense">
      {!showExpenseForm && addExpenseButton}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          expenseFormCancelled={cancelExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
