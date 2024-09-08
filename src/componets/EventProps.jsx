  export const EventProps = () => {
   const HandleWelcome = (user)=> {
    alert(`Hey,${user}`);
   };
   
   const HandleHover = ()=> {
    alert(`Hey Thanks for hovering me`);
   };
    return(<>
    <WelcomeUser 
    oncilick={()=> HandleWelcomeUser("monika")}
        onMouseEnter={HandelHover}
         />
     </>
     );
  };
  const WelcomeUser = (props) => {
    const handlereeting = () => {
        console.log(`He User,Welcome`);
        Props.onClick;
    }
    return (
        <>
        <button onclick={props.onclick}>click </button>
        <button onMouseEnter={props.omMouseEnter}>Hover me</button>
        <button onclick={handelGreeting}> Greeting</button>
        </>
    )
  }