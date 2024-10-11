import { useReducer } from "react";

export const Reducer = () => {

    const reducer = (state,action ) => {
      console.log(state,action);
    };
//  const [count, setCount] = useState(0);
 const [count, dispatch] =useReducer(reducer,0);
  console.log(useReducer(reducer,0));

  if(action.type  === "INCREMENT"){
    return state + 1 ;
}

if(action.type  === "DRCREMENT"){
    return state - 1;
}

    return (
       <div className="p-4 h-lvh flex flex-col justify-center
       items-center">
    <h1>{count}</h1>
        <button onClick={() => dispatch({type: "INCREMENT" })}>Incerment</button>
    <button  onClick={() => dispatch({type: "DECREMENT" })}>Decrement</button>
    </div>
    );
};
