
import { NavLink } from "react-router-dom";
export const Home = () => {
    return(

<main>
    <section className="section-hero">
<div className="container grid grid-two--cols">
    <div className= "section-hero--container">
        <p className="hero-subheading">
            Explore the Latest in Movie Industries
        </p>
        <h1 className="hero-heading">
            UnLimited Movie, TVs Shows, & More.
        </h1>
        <p className="hero-para">
            Discover the Top Best Movies and Dreams with a catchy subtitle
             Like Your Ultimeate Guide to Must--Watch Content.
        </p>
        <div className="hero-btn">
            <NavLink to="/movie" className="btn">
           Explor Now
            </NavLink>
        </div>
       </div>
       <div className="section-hero-image">
        <img
        src="./movies.png"
        alt="movies poster"
        width="150"
        height="150"
        />

       </div>
</div>
<div className="custom-shape-divider-bottom--1696038172">
    <svg
    data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 1200 120"
preserveAspectRatio="none">
    <path
    d="M0,0V46.29c47.79,22.2,103.9,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.c438.
    64,32.43,512.34,3.67,583,72.05c69.27,18,138.3,24,88,209.4,13.08,36.15-66,69.85-17.86
    104.4-29.34c989.49,25,1113-14.29,1200,52.470Z"
    opacity=".25"
    className="shape-fill"></path>
     <path
    d="M0,0V46.29c47.79,22.2,103.9,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.c438.
    64,32.43,512.34,3.67,583,72.05c69.27,18,138.3,24,88,209.4,13.08,36.15-66,69.85-17.86
    104.4-29.34c989.49,25,1113-14.29,1200,52.470Z"
    opacity=".5"
    className="shape-fill"></path>

<path
    d="M0,0V46.29c47.79,22.2,103.9,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.c438.
    64,32.43,512.34,3.67,583,72.05c69.27,18,138.3,24,88,209.4,13.08,36.15-66,69.85-17.86
    104.4-29.34c989.49,25,1113-14.29,1200,52.470Z"
    
    className="shape-fill"></path>
</svg>
</div>
    </section>
</main>



    );
    
};





