import { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/InputGroup";
import ResultTable from "./Components/ResultTable";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);

  function handleInitInvestChange(event) {
    setInitialInvestment(event.target.value);
  }
  return (
    <>
      <Header />
      <section id="user-input">
        <Input
          labelValue1="Initial Investment"
          labelValue2="Annual Investment"
          handleChange={handleInitInvestChange}
          value={initialInvestment}
        />
        <Input labelValue1="Expected Return" labelValue2="Duration" />
      </section>
      <section>
        <ResultTable />
      </section>
    </>
  );
}

export default App;
