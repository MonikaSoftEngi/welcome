  export const EventProps = () => {
   const HandleWelcome = (user)=> {
    alert(`Hey,${user}`);
   };
   
   const HandleHover = ()=> {
    alert(`Hey Thanks for hovering me`);
   };
    return(
    <>
    <WelcomeUser 
    onClick={() => HandleWelcomeUser("monika")}
        onMouseEnter={handleHover}
         />
     </>
     );
  };
  const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreeting = () => {
        console.log(`Hey User,Welcome`);
        onClick;
    }

    return (
        <>
        <button onClick={onClick}>Click </button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    );
  };