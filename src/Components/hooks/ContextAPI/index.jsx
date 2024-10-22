// import {createContext} from "react";
import { createContext, use } from "react";
//  1st stap
export const BioContext = createContext();

// 2nd step

 export const BioProvider = ( { children}) => {
    const MyName = "monika";
    const MyAge = 30;
    console.log(children);

    return (
    <BioContext.Provider value ={{myName, MyAge}}>
 {children}

 </BioContext.Provider>
    );
};


// custom hook
const useBioContext =() => {
    const context = useContext(BioContext);
   
   if (context === undefind) {
    throw new Erroe("Componets must be wrapped with BioProvider");
   }
   
    return context;
};