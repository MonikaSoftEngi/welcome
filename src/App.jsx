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
import "./components/Ev.css";
import { Liftingstate} from "./components/Liftingstate";
export const App = () => {
  return (
    <section className="container">

  <Liftingstate/>
    </section>
  )
}