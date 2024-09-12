import {usestate} from "react";

export const Liftingstate = () => {

    const [inputvalue,setInputvalue] = useState("");

    return (
        <>
        <Inputcomponents inputvalue = {inputvalue}setInputvalue={setInputvalue}  />
        <Displaycomponents inputvalue = {inputvalue}/>
        </>
    );
};
const InputComponents = ({inputvalue,setinputvalue}) => {
    
    return(
        <>
        <input 
        type = "text"
        placeholder="enter your name" 
        value={inputvalue}
         onChange ={(e) => setInputvalue(e.target.value)}
         >
        </input>
        </>
    );
};


const Displaycomponents = ({inputvalue}) => {
    return <p>The current input value is : {inputvalue}</p>;
};


