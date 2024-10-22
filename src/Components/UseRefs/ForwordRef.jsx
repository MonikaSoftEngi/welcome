import { foreword, useId,useRef } from "react";

export const ForewordRefs = () =>{
 const username =useRef(null);
 const password =useRef(null);

   const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value,passord.current.value);
 
   };
   
    return (
        <form onSubmit={handleForSubmit}>
        <BeforeReact19Input label="username" ref={username}/>
        <BeforeReact19Input label="password" ref={username}/>
        <button>Submit</button>
        </form>
    );
};

// I need to create beforeReact19Input
// const BeforeReact19Input = ForewordRef( (preos,ref) => {
//  const id = useId();
//  return (
//     <div>
//         <label htmlFor={id}>{props.label}</label>
//         <input type="text" ref={ref} />
//     </div>
//  );
// });
// after reactvrs 19
const BeforeReact19Input =  ({label,ref}) => {
    const id = useId();
    return (
       <div>
           <label htmlFor={id}>{label}</label>
           <input type="text" ref={ref} />
       </div>
    );
   };
   