import "./Ev.css";
export const EventHandling = () => {
    function handleButtonClick(){
        alert("Hey i am onClick Event");
    }
    return (
        <>
        <button onClick={handelButtonCick}>click me</button>
        </>
    );
};