
import { useMemo, useState } from "react";

const ExpensiveComponent =  () => {
     const sum = () => {
        console.log("Calculating sum...");
        let i = 0;
        for (i = 0 ; i <  1000000000; i++) {
            i = i + 1;
        }
            return i;
           };
           
           const total= useMemo(() => sum(), []); 
           
           
        //    const total = sum();

           return <p> sum:{total} </p>;
               };

               const MemoParentComponets = () => {
          const [count, setCount] = useState(0); 

         return (
            <div className=" p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center bg-black text-white">
           <ExpensiveComponent/>
           <button onClick={() =>  setCount(count + 1)}
           className="py=3 px-6 bg-cyan-400 rounded-sm"
         Re-rernder parent>
             </button>
          <p>Parent re-renders: {count}</p>
          </div>
         )};
         export default MemoParentComponent;