import styles from "./Netflix.module.css";
import styled from "styled-componets";

export const SeriesCard = ({data}) => {
  const {  img_url, name, rating, description, cast, genre, watch_url } =
    data;
    // const btn_style ={
      // const ButtonThapa = styled.button (
      //   {
      //     padding:"1.2rem 2.4rem", 
      //     border:"none",
      //    font-size:"1.6rem",
      //     backgroundcolor: '${rating > 8.5 ? "#7dcea0" : "#f7dc6f"}',
      //     color:"var(--btn-color)",
      //     font-weight: "bold",
      //     cursor: "pointer",
      //   }
      // )
      const ButtonThapa = styled.button `
      padding:1.2rem 2.4rem
          border:none;
         fontsize:1.6rem;
          background-color: ${(Props) => Props.rating > 8.5 ? "#7dcea0" : "#f7dc6f"};
          color:var(--btn-color);
          fontweight: bold ;
          cursor: pointer;
      `
      
      
        const Rating =styled.h3`
        fontsize:1.6rem;
        color:#7dcea0;
        text-transfrom:capitalize;
        `;  
      const ratingClass = rating > 8.5 ? styles.super_hit :styles.averege;


  return (
    <li className={styles.card}>
      <div>
      <img src={img_url} alt={name} width="40%" hight="40%" />
      </div>
      {/* <div className={styles["card-content"]}> */}
      <div classname="flex flex-col gap-6 py-[3.2rem]px-[1.2rem]">
      <h2>Name: {name} </h2>
        <rating>
        Rating:
        <span 
        className={'${style.rating }${ratingClass}'}>{rating}</span> 
      </rating>
      <p className="text-3xl font-bold underline text-ctan-300">summary: {description} </p>
      <p>Genre:{Genre.join} </p>
      <p>Cast:{Cast.join} </p>
       <a href={Watch_url} target="_blank">
      {/* <button style={btn_style} >
      Watch Now</button> */}
      <ButtonThapa rating={ratring}>Watch Now</ButtonThapa>
      </a>
      </div>
    </li>
  );
};
