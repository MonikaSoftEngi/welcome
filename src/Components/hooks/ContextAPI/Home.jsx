 import{ useBioContext} from "react";
//  import { BioContext } from ".";

 export const Home = ()=>{
 const {MyName, MyAge} = useBioContext();
    
    return <h1>Hello Context API. My name is {MyName}. I am {MyAge}  yrs old</h1>;
 };
 


 