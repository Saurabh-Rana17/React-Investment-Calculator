import { useState } from "react";
import Header from "./Components/Header";
import ResultTable from "./Components/ResultTable";
import UserInput from "./Components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initInvest, setInitInvest] = useState(15000);
  const [annInvest, setAnnInvest] = useState(1200);
  const [expReturn, setExpReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  let result;

  function handleChange(event) {
    if (event.target.id === "Initial Investment") {
      setInitInvest(event.target.value);
    }
    if (event.target.id === "Annual Investment") {
      setAnnInvest(event.target.value);
    }
    if (event.target.id === "Expected Return") {
      setExpReturn(event.target.value);
    }
    if (event.target.id === "Duration") {
      setDuration(event.target.value);
    }
  }
  if (initInvest && annInvest && expReturn && duration) {
    result = calculateInvestmentResults({
      initialInvestment: initInvest,
      annualInvestment: annInvest,
      expectedReturn: expReturn,
      duration,
    });
  }
  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            value={initInvest}
            handleChange={handleChange}
            labelValue="Initial Investment"
          />
          <UserInput
            value={annInvest}
            handleChange={handleChange}
            labelValue="Annual Investment"
          />
        </div>
        <div className="input-group">
          <UserInput
            value={expReturn}
            handleChange={handleChange}
            labelValue="Expected Return"
          />
          <UserInput
            value={duration}
            handleChange={handleChange}
            labelValue="Duration"
          />
        </div>
      </section>
      <ResultTable resultArr={result} />
    </>
  );
}

export default App;
