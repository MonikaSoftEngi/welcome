 import{ useContext} from "react";
 import { BioContext } from ".";

 export const Home = ()=>{
 const {MyName, MyAge} = useContext(BioContext);
    
    return <h1>Hello Context API. My name is {MyName}. I am {Myage}  yrs old</h1>;
 };
 
