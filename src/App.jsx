// import React from "react";
// export const App = () => {
//   return <h1>Hello, Thapa Technical.</h1>;
// }

// console.log(React.createElement("h1", null, "Hello,Thapa Technical."));

// export const App = () =>
// {
//   return(
//     <div>
//       <div>
//       <img src="om/wp-content/uploads/2024/02/kim-soo-hyun-kim-ji-won-queen-of-tears-1-696x442.jpg"
//       alt="Queen of Tears"
//       width="40%" hight="40%"/>
//       </div>
// <h2>Name: Queen of Tears</h2>
// <h3>Rating:8.2</h3>
// <p>sumamry:Baek Hyun-woo and hong hae-in navigate a tense relationship,
//      both at home at a work. but upon deciding his future,
//     hun-woo pas a visitto his family.
//     </p>
//     </div>
//   );
// };

// import {Fregment} from "react";
// export const App = () => {
//   return(

//      <Fragment>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       </Fragment>
//   );
// };
// const NetflixSeries = () =>
//   {
//     return(
//       <div>
//         <div>
//         <img src="om/wp-content/uploads/2024/02/kim-soo-hyun-kim-ji-won-queen-of-tears-1-696x442.jpg"
//         alt="Queen of Tears"
//         width="40%" hight="40%"/>
//         </div>
//   <h2>Name: Queen of Tears</h2>
//   <h3>Rating:8.2</h3>
//   <p>sumamry:Baek Hyun-woo and hong hae-in navigate a tense relationship,
//        both at home at a work. but upon deciding his future,
//       hun-woo pas a visitto his family.
//       </p>
//       </div>
//     );
//   };

// export const App = ()  => {
//   retuen (
//     <>
//     <NetflixSeries />
//     <NetflixSeries />
//     <NetflixSeries />
//     <NetflixSeries />
//     <NetflixSeries />
//     </>
//   );
// };

// const NetflixSeries = () => {
// const name = "Queen of Tears";
// const rating = "8.2";
// const summary =
// "Baek Hyun-woo and hong hae-in navigate a tense relationship,";
//       //  both at home at a work. but upon deciding his future,
//       // hun-woo pas a visitto his family.";
//       let age = 1;
//       const returnGanre  = () => {
//         const genre = "RomCom";
//         return genre;

//       };
//       if(age < 18){
//         return (
//           <div>
//             <div>
//               <img src ="om/wp-content/uploads/2024/02/kim-soo-hyun-kim-ji-won-queen-of-tears-1-696x442.jpg"
//               alt="Queen of Tears" width="40%"hight="40%" />
//             </div>
//             <h2>Name: {name} </h2>
//             <h3>Rating: {5 + 3.2}</h3>
//             <p>Sumamry: {Summary}</p>
//             <button>not available</button>
//           </div>
//         );
//         };

// return (
//   <div>
//     <div>
//       <img src ="om/wp-content/uploads/2024/02/kim-soo-hyun-kim-ji-won-queen-of-tears-1-696x442.jpg"
//       alt="Queen of Tears" width="40%"hight="40%" />
//     </div>
//     <h2>Name: {name} </h2>
//     <h3>Rating: {5 + 3.2}</h3>
//     <p>Sumamry: {Summary}</p>
//     <button>{age > 18 ? "watch now" :"not Available"} </button>
//   </div>
// );
// };

// import NetfllixSeries from "./components/NetflixSeries";
// export const App = ()  => {
//   return(
// <div>
//   <NetflixSeries />
//   <NetflixSeries />
//   <NetflixSeries />
//   <NetflixSeries />
//   <NetflixSeries />
// </div>
//   );
// };

// export default NetflixSeries;

// import
//   NetflixSeries, { Footer ,Header }

// from "./components/NetflixSeries";
// export const App = () =>{
//   return (
//     <>
//       <Header/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <NetflixSeries/>
//       <Footer/>
//     </>
//   );
// };

// import  NetflixSeries from "./components/NetflixSeries";
// import "./componets/Netflix.css";
// import "./componets/Netflix.module.css";
// import {EventHandling} from "./components/EventHandling";
// import "./components/Ev.css";

// export const App = () => {
// return (
//     <Section className="container">
// {/* <h1 className="card-heading">List of Best Netflix series</h1>
// <NetflixSeries/>; */}
//   <EventHandling/>
//   <Eventprops/>
//   </Section>
// );
// };

// ******react state

//

// import { Derivedstate} from "./components/Derivedstate";
// import "./components/Ev.css";
// import { ToggleSwitch } from "./project/ToggleSwitch/ToggleSwitch";
// export const App = () => {
//   return (

//       <ToggleSwitch />
//     </section>
//   );
// };

// import "./components/Ev.css"
// import CounterCallenge from "./components/hooks/useState/Challenge";
// export  const App  = () => {
// return  <counterChallenge />;
// };

// import ControlledForm from "./components/hooks/useState/Controlled";

// export const App = () =>
// {

// };

// import { RegistrationForm } from "./componets/UseState/Registration";
// export const App = () => {
//   return <RegistrationFormReact />;
// };

// import { ContactForm } from "./components/hooks/useState/ContactForm";

// export const App = () => {

//     return <ContactForm/>;
// };



// import { ReactUseEffect } from "./components/hooks/useState/UseEffect";

// export const App = () => {

//     return <ReactUseEffect 
//     />;
// };



// import {CleanUp } from "./components/hooks/useEffect/Cleanup";

// export const App = () => {

//     return <Cleanup />;
// };
// export const App = () => {
//     return < Pokemon/>;

// };


// import {ForewordRefs } from "./componets/hooks/ useRef/ForewordRefs";
 
// export const App = () => {
//     return <ForewordRefs/>;
//  }

import {ParentComponent } from "./componets/hooks/ ParentComponent";
 
export const App = () => {
    return <ParentComponent/>;

}

