// import React from "react";
// import ReactDom from "React-dom/client";
// import { App } from "./App.jsx";
// import profile from "./componets/profile.jsx";
// import "./index.css"

// ReactDom.createRoot(document.getElementById("root")).render(
//     <React.Strictmode>
//         {App}
        {/* <Practices/> */}
//         </React.Strictmode>
// );


import { StrictMode} from "react";
import  {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
        <StrictMode>
                <App />
        </StrictMode>
);


