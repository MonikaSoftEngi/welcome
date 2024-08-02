export const SeriesCard = (props) {
    return (
        <li>
                <div>
                <img
                src= {props.curElem.img_url}
                  alt={props.curElem.name}
                  width ="40%"
                  hight = "40%"
                  />
            
                </div>
                <h2>Name: {props.curElem.name} </h2>
                <h3>Rating: {props.curElem.Rating} </h3>
                <p>summary: {props.curElem.summary}   </p>
                <p>Genre: {props.curElem.Genre}  </p>
                <p>Cast: {props.curElem.Cast}  </p>
                <a href= {props.curElem.Watch_url} target="_blank">
                  <button>Watch Now</button>
                  </a>
                </li>
              );
            };