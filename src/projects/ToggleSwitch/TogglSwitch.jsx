import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = usestate(false);

  const handleToggleSwitch = () => {
    setIson(!isOn);
  };
const checkIson =ison ? "on" : "off";
const toggleBGColor = {backgroundcolor:isOn ? "#4caf50" : "#f44336"}
  return (
    <div className="toggle-switch"  
    style ={toggleBGColor}  
    onClick={handleToglleSwitch}>
      <div className= {`switch ${checkIson}`}>
        <span className="Switch-state"> {checkIson} </span>
      </div>
    </div>
  );
};
