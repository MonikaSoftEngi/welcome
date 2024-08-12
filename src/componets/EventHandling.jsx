import "./Ev.css";
export const EventHandling = () => {
    // function handleButtonClick(){
    //     alert("Hey i am onClick Event");
    // }
    const handelButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey i am onClick Event");
    };
    const Handlewelcomeuser = (User)=> {
        console.log(`"Hey ${user},Welcome"`);
    }
    return (
        <>
        {/* function componets with named function */}
        <button onClick={handelButtonCick}>click me</button>
        <br/>
        <button onClick={(event) =>handelButtonCick(event)}>click me 2</button>
        <br/>
        {/* inline event handlers */}
        <button onClick={(event)=>console.log(event)}>Inline function</button>
        <br/>
        {/* function componets with inline arrow function */}
        <button onClick={() =>alert("Hey I am event function")}>Inline Arr fun
        </button>
        {/* passing argument to event handlers */}
        {/* <button onClick ={handelWelcomeUser("Monika")}>Click me</button> */}
        <button onClick ={() =>handelWelcomeUser("Aarohi")}>Click me</button>
        </>
    );
};











