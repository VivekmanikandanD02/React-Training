import { useState } from "react";

import InvestmentForm from "./components/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable";
import Header from "./components/Header";

function App() {
  const [receivedTableData, setReceivedTableData] = useState([]);
  const [receivedCurrentSavings, setReceivedCurrentSavings] = useState(0);
  const tableDataHandler = (formValues) => {
    console.log("App.js");
    console.log(formValues);
    const yearlyData = []; // per-year results

    let currentSavings = +formValues["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +formValues["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +formValues["expectedInterest"] / 100;
    const duration = +formValues["investmentDuration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        yearlyContribution: yearlyContribution,
      });
    }

    setReceivedTableData(yearlyData);
  };
  const fallBackContent = receivedTableData.length === 0 && (
    <p style={{ textAlign: "center" }}>No data found.</p>
  );

  return (
    <div>
      <Header />
      <InvestmentForm getTableData={tableDataHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {fallBackContent}
      {receivedTableData && (
        <InvestmentTable
          sendTableData={receivedTableData}
          initialInvestment={receivedCurrentSavings}
        />
      )}
    </div>
  );
}

export default App;
