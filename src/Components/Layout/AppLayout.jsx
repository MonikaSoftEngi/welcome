// import { Outlet ,useNavigation,} from "react-router-dom";
// import {Footer } from "./Footer";
// import { Header } from "./Header";
// import { Loading } from "./Loading";

import { Footer } from "../UI/Footers"

// const AppLayout = () => {
// const navigation = useNavigation();
//   console.log(navigation);

//   if (navigation.state ==="Loading") return <Loading />;

//     return (

//          <>
//     <Header />
//     <Outlet  />
//    <Footer />
//     </>
//     );
// };

//  export default AppLayout;
import { Outlet } from "react-router-dom";
import { Header } from "../UI/Headers"; 
// import { Footer } from "../UI/Footer";





export const AppLayout = () =>
{
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
     </>
  );
};