import {createContext} from "react";
//  1st stap
export const BioContext = createContext();

// 2nd step

 export const BioProvider = ( { children}) => {
    const MyName = "monika";
    const MyAge = 30;
    console.log(children);

    return (
    <BioContext.Provider value ={{myName:myName, MyAge:MyAge}}>
        {children}
        </BioContext.Provider>
    );
};


