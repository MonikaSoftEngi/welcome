import { useCallback, useState } from "react";

const Button = memo(({ OnClick, children }) => {
  console.log(`Rendring button: ${children}`);
  return (
    <button
      className={`text-back mb-4 py-2 px-5 ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {childern}
    </button>
  );
});
export default function UseCallback() {
  const [count, setCount] = useState(0);

 

 const increment= useCallback(() => {
    console.log("increment inside");
     setCount((prevCount) => prevCount + 1);
 },[]);

const decrement = useCallback(() => {
    console.log("decrement inside");
    setCount((prevCount) => prevCount - 1);
},[]);
     
     return (
      <div className="p-4 h-lvh font-display tracking-wider  flex flex-col justify-center items-center text-white">
        <h1 className="mb-4">Count:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
     );
  };


  