import {usestate} from "react";
export const state = () => {
   const[users, setusers]= usestate()
    // };
    // let [count, setcount]=usestate(0);
    // console.log(count);
    const [count, setcount]=usestate(0);
    console.log("parent component rendered");
    const handleButtonClick = () => {
        setCount(() => count + 1);
    };
    return (
        <>
        <div className="main-div">  
       <h1>{count}</h1>
        <button onclick={handleButtonClick}>Increment</button>
        </div>
        <ChildComponent count={count}/>
        </>
    ); // let value  = 0;
    // const handleBuuttonClick = () =>{
    //     value++;
    //     console.log(value);
};
// function ChildComponent({count}) {
//     console.log("child component rendered");
//     return(
//      <div className="main-div">
//        <h2>child component - {count}</h2>
//         </div>
//     ); 
// };
