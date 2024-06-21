import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import InputBoard from "./components/InputBoard";
import ResultBoard from "./components/ResultBoard";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInvest = userInput.duration >= 1;

  function handelChanges(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <InputBoard handelChanges={handelChanges} userInput={userInput} />
      {!validInvest && (
        <p className="center">Please enter a valid investment duration</p>
      )}
      {validInvest && <ResultBoard input={userInput} />}
    </>
  );
}

export default App;
