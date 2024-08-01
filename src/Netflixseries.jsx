const NetflixSeries = () => {
    const name = "Queen of Tears";
    const rating = "8.2";
    const summary =
    "Baek Hyun-woo and hong hae-in navigate a tense relationship,";
          //  both at home at a work. but upon deciding his future, 
          // hun-woo pas a visitto his family.";
          let age = 1;
          const returnGanre  = () => {
            const genre = "RomCom";
            return genre;
    
          };
          if(age < 18){
            return (
              <div>
                <div>
                  <img src ="om/wp-content/uploads/2024/02/kim-soo-hyun-kim-ji-won-queen-of-tears-1-696x442.jpg" 
                  alt="Queen of Tears" width="40%"hight="40%" />
                </div>
                <h2>Name: {name} </h2>
                <h3>Rating: {5 + 3.2}</h3>
                <p>Sumamry: {Summary}</p>
                <button>not available</button>
              </div>
            );
            };
          
    return (
      <div>
        <div>
          <img src ="om/wp-content/uploads/2024/02/kim-soo-hyun-kim-ji-won-queen-of-tears-1-696x442.jpg" 
          alt="Queen of Tears" width="40%"hight="40%" />
        </div>
        <h2>Name: {name} </h2>
        <h3>Rating: {5 + 3.2}</h3>
        <p>Sumamry: {Summary}</p>
        <button>{age > 18 ? "watch now" :"not Available"} </button>
      </div>
    );
    };
    export default NetflixSeries;
     
    export const Header = () => {
      return <p>copyright@thapatecnical</p>;
    }
    
     export const Footer = () => {
      return <p>copyright@thapatecnical</p>
    }
