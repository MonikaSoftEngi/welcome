import { createContext, use,useState } from "react";

export const ThemeContext = createContet();

export const ThemeProvider = ({ Children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return 
        setTheme((prevThem) => (prevTheme ==="dark" ? "Light" :"dark")
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{Childern}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
    const { theme, handleToggleTheme } = use(ThemeContext);
  return (
    <div className= {`p-4 h-lvh flex flex--col justify-center items-center 
         ${ theme === "dark" ? "bg-gray=800" : "bg-white"} 
         `}>

      <h1
       className = {`m-4 text-xl ${
        theme === "Light" ? "text-gray-800" : "text-white"
      }`}
      > 
       Dark Light Mode Website</h1>

      <p className = {`m-4 text-l ${
        theme === "Light" ? "text-gray-800" : "text-white"
      }`}> 
      Hello !! My React v19 Fans</p>

      <button onClick={handleToggleTheme}
      className="bg-blue-500  hover:bg-blue-600 text-white
      rounded-md mt-4 p-4">

     {theme === "dark" ? " Switch to Light mode" :" Switch to Light mode"}
     </button>
    </div>
  );
};
