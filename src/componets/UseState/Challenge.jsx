import "../Hooks.css";
const CounterChallenge = () => {
    const [count,setCount]= useState(0);
    const [setp,setstep] = useState(0);
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
      <h1>UseState Chalenge</h1>
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
        <button onClick={HandelIncrement} disabled={count > 100}
            >Increment</button>
        <button onClick={HandelDecrement} disabled={count < 0}>
            Decrement</button>
        <button onClick={handelReset}>Reset</button>
      </div>
    </div>
  );
};

export default counterChallenge;