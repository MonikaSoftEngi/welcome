import{ useContext} from "react";
 import { BioContext } from ".";

 export const About = ()=>{
 const {MyName, MyAge} = useContext(BioContext);
    
    return(
     <section  className ={`p-4 h-Lvh font-display taracking-wider flex
        flex-col justify-center items-center bg-gray-900 text-white`}>
     
     <h1>
        Hello Context API (About). My name is {MyName}. I am {Myage}  yrs old
        </h1>;
     </section>
    );
    };
