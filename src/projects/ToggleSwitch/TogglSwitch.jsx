import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = usestate(false);

  return (
    <div className="toggle-switch">
      <div className="switch">
        <span className="Switch-state"> {isOn ? "On" :"off"}  </span>
      </div>
    </div>
  );
};
