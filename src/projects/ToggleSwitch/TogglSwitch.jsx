import {useState} from "react";

import "./ToggleSwitch.css";
import {IoIosSwitch} from "react-icond/io";
import {piUserSwitchFill} from "react-icons/pi";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = usestate(false);

  const handleToggleSwitch = () => {
    setIson(!isOn);
  };
const checkIson =ison ? "on" : "off";
const toggleBGColor = {backgroundcolor:isOn ? "#4caf50" : "#f44336"}
  return (
    <>
    <h1  style={{ color:"#000", textAlign:"center"
      
    }}>
      Toggle Switch  {" "}
      <IoIosSwitch style={{ color:"red", textAlign:"center"}}   />
      <piUserSwitchFill/>
      </h1>
    <div className="toggle-switch"  
    style ={toggleBGColor}  
    onClick={handleToglleSwitch}>
      <div className= {`switch ${checkIson}`}>
        <span className="Switch-state"> {checkIson} </span>
      </div>
    </div>
    </>
  );
};
