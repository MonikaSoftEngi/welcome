// import { ReactUseEffect } from "./compnents/hooks/UseEffect";
import { useEffect,useState } from 'react';

import { useEffect } from 'react';
import './index.css';

 export const ReactUseEffect = () => {
    const [count, setCount] =useState(0);
    
    useEffect(() => {
        setInterval(()=> {
       const updateData = new Date();
       setDate(updateDate.toLocaleTimeSreing());
    },1000);
    }, []);
   

    return (
    //     <div>
    //         <h1>Hello, useEffect!</h1>
    //     </div>
    <div className ="container effect-container">
        <h1>useEffect Hook</h1>
        <p>Count:{count}</p>
        <button onClick={()  => setCount(count + 1)}>Increment</button>
    </div>
    );
};