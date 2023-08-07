import styles from "./InvestmentTable.module.css";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const InvestmentTable = (props) => {
  const INITIAL_INVESTMENT = props.initialInvestment;
  const tableRows = props.sendTableData.map((data, i) => (
    <tr key={i}>
      <td>{data.year}</td>
      <td>{formatter.format(data.savingsEndOfYear)}</td>
      <td>{formatter.format(data.yearlyInterest)}</td>
      <td>
        {formatter.format(
          data.savingsEndOfYear -
            INITIAL_INVESTMENT -
            data.yearlyContribution * data.year
        )}
      </td>
      <td>
        {formatter.format(
          INITIAL_INVESTMENT + data.yearlyContribution * data.year
        )}
      </td>
    </tr>
  ));

  return (
    <>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
};

export default InvestmentTable;
