import { useState } from "react";
import "./index.css";

export const CleanUp = () => {
  const [count, setCount] = useState(0);


  useEffect(( )=> {
  const timer=  setInterval(() => {
        setCount((prev) => prev + 1);
    },1000);
    return () =>clearInterval(Timer);
}, []);



  return (
    <div className="container">
      <div className="container">
        <p>My Subscriber on Youtube</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> RealTime Counter
        </h3>
      </div>
    </div>
  );
};
