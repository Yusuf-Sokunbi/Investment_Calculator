
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:0,
});

const inputIsValid = userInput.duration >=1; 

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return{
          ...prevUserInput, 
          [inputIdentifier]: newValue
      };
     
  });
}
  return (
    <>
   <Header  />
   <UserInput userInput={userInput} onChange={handleChange}/>
   {!inputIsValid  && <p className="center">Please enter your Duration valid </p>}
   {inputIsValid && <Results input={userInput} />}
   </>
  )
}

export default App
