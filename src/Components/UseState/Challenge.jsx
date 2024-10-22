import { useState } from "react";
import "../Hooks.css";
const CounterChallenge = () => {
    const [count,setCount]= useState(0);
    const [step,setstep] = useState(0);
    const handleIncrement = () => {
        setCount(count + step);
    };

    const handleDecrement = () => {
        setCount(count - step);
    };
    
    const handelReset = () => {
        setCount(0);
    }

  return (
    <div className="container state-container">
      <h1>UseState Challenge</h1>
      <p>
        Count:<span>{count}</span>
      </p>
      <div>

        <table>
          step:
          <input type="number" value={step} onChange={(e)=> setstep(Number(e. target.value))} />
        </table>
      </div>
      <div className="grid-three-cols">
        <button onClick={HandleIncrement} disabled={count > 100}
            >Increment</button>
        <button onClick={HandleDecrement} disabled={count < 0}>
            Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default counterChallenge;