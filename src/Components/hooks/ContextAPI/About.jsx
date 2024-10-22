// import{ useContext} from "react";
 import { use } from ".";
import { BioContext } from "." ;
 export const About = ()=>{
//  const {MyName, MyAge} = useBioContext();
   //   const {MyName , MyAge} = useContext(BioContext);
   // const {MyName , MyAge} = use(BioContext);
     
   const newHook = true;
    MyName, MyAge;
   
   if(newHook) {
     ( {MyName , MyAge} = use(BioContext));
     
   }
   return(
     <section  className ={`p-4 h-Lvh font-display taracking-wider flex
        flex-col justify-center items-center bg-gray-900 text-white`}>
     
     <h1>
        Hello Context API (About). My name is {MyName}. I am {Myage}  yrs old
        </h1>;
     </section>
    );
    };
