import { Outlet , useNavigation} from "react-router-dom";
import {Footer } from "./Footer";
import { Header } from "./Header";

const AppLayout = () => {

 const    navigation = useNavigation();
  console.log(navigation);

  if (navigation.state ==="Loading") return <Loading />;

    return (
         <>
    <Header />
    <Outlet  />
    <Footer />
    </>
    );
};

export default AppLayout;