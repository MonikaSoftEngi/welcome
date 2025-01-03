import { useEffect } from "react";
import  Faq  from "../api/Faq.json";
import { useState } from "react";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);
  useEffect(() => {
    setData(Faq);
  }, []);
// handlebutton 
const handleButton = (id) => {
setActiveId((prevId) =>(prevId ?  false : id ));
};


  // console.log(data);=()
  return (
    <>
      <h1> The Accordion </h1>
      <ul className="Section-accordion">
        {data.map((curElem) => {
          return (
           <FAQ  key={curElem.id}
            curData={curElem}
            isActive={activeId === curElem.id}
            onToggle={()  => handleButton(curElem.id)}
/>
          );
        })}
      </ul>
    </>
  );
};
