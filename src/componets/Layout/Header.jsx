import { NavLink } from "react-router-dom";

export const Header = () => {
    const getNavLinkStyle = ({isActive}) => {
         return{
                color: isActive ? "green" : "black",
            };
          };
    
  return (
    <>
      <header className="section-navbar">
        <section className="top_text">
          <div className="head container">
            <div className="head-txt">
              <p>Get Thapa Membership,30-day return or refund guarantea.</p>
            </div>
            <div className="sing-in-up">
              <NavLink to="#">SIGN IN</NavLink>
              <NavLink to="#">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>ThapaFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-bar">
                <NavLink to="/" className={({isActive})=> 
                    
                        isActive ? "nav-Link active-Link": "nav-Link"
                    }
                    >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about"
                 style={({isActive}) =>{
                  return{
                      color: isActive ? "red" : "black",
                  };
                }}
                >
                    about</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="movie" className="nav-link" 
                 style={({isActive}) =>{
                  return{
                      color: isActive ? "red" : "black",
                  };
                }}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item"
              style={getNaviLinkStyle}
              >

                <NavLink to="contact" className="nav-link">
                  contact
                </NavLink>
              </li>
             </ul>
           </nav>
        </div>
      </header>
    </>
  );
};
