import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css";
/* import { useState } from "react"; */

const ExpenseItem = (props) => {
  /* const [title, setTitle] = useState(props.title); */
  /*  const clickHandler = () => {
    setTitle("updated");
  }; */
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/*  <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
