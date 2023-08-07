import { useState } from "react";
import styles from "./InvestmentForm.module.css";

const initialInput = {
  currentSavings: "",
  yearlySavings: "",
  expectedInterest: "",
  investmentDuration: "",
};
const InvestmentForm = (props) => {
  const [formValues, setFormValues] = useState(initialInput);
  const inputHandler = (event, field) => {
    console.log("InvestmentForm.js");
    console.log(event.target.value);
    console.log(event);
    const enteredValue = event.target.value;
    setFormValues((prevState) => ({
      ...prevState,
      [field]: enteredValue,
    }));
  };
  const submitHandler = (event) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    event.preventDefault();
    props.getTableData(formValues);
    // do something with yearlyData ...
  };
  const resetHandler = (userInput) => {
    setFormValues(initialInput);
  };

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formValues.currentSavings}
            onChange={(event) => inputHandler(event, "currentSavings")}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formValues.yearlySavings}
            onChange={(event) => inputHandler(event, "yearlySavings")}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formValues.expectedInterest}
            onChange={(event) => inputHandler(event, "expectedInterest")}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formValues.investmentDuration}
            onChange={(event) => inputHandler(event, "investmentDuration")}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
