import "./App.css";
import { useState } from "react";
import logo from "./assets/img/Vector.png";

function App() {
  const [calcul, setCalcul] = useState(0);
  const incrButton = () => {
    const newCalc = calcul + 1;
    setCalcul(newCalc);
  };
  const decrButton = () => {
    const newCalc = calcul - 1;
    setCalcul(newCalc);
  };
  const resetState = () =>{
    const newCalc = 0;
    setCalcul(newCalc)
  }
  return (
    <div className="body">
      <div className="img">
        <img src={logo} alt="calculatrice" /> <span> React Counter </span>
      </div>
      <div className="calc">
        <div className="line">
          <button className="decr" onClick={decrButton}
          style={{color : calcul <= 0 ? "white" : "black"}}
          >-</button>
          <div className="screen">
            <p>{calcul}</p>
            </div>
          <button className="incr" onClick={incrButton}
           style={{color : calcul >= 10 ? "white" : "black"}}
          >+</button>
        </div>
        <div>
          <button className="reset" onClick={resetState}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
