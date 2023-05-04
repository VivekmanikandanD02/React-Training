import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState("2020");
  const getChangedYear = (year) => {
    setChangedYear(year);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === changedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onChangedYear={getChangedYear} selected={changedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
