import {usestate} from "react";
export const state = () => {
   
    // };
    // let [count, setcount]=usestate(0);
    // console.log(count);
    const [count, setcount]=usestate(0);
    const handleButtonClick = () => {
        setCount(() => count + 1);
    };
    return (
        <>
        <section className="main-div">  
       <h1>{count}</h1>
        <button onclick={handleButtonClick}>Increment</button>
        </section>
        </>
    ); // let value  = 0;
    // const handleBuuttonClick = () =>{
    //     value++;
    //     console.log(value);
};