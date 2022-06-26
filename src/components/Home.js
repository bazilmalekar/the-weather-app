import React, { useEffect, useState } from "react";
import {StyledHome, HomeContainer} from "../styledComponent/styledHome";
import { useLoadUserQuery } from "../services/weatherApi";
import { CircularProgress } from "@mui/material";
import WeatherInfo from "./WeatherInfo";
import Debounce from "./Debounce";

const Home = () => {
  const [city, setCity] = useState("Bengaluru");
  const debounceSearch = Debounce(city, 500);
  const {data, error, isLoading} = useLoadUserQuery(debounceSearch);

  return (
    <StyledHome>   
      <HomeContainer>
        <input style={{textTransform: "capitalize"}} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Search" />
        <div className="nameDiv">
            <h1 style={{textTransform: "capitalize"}}>{city}</h1>
          </div>                  
          {
            isLoading ? (
              <>
                <CircularProgress />
              </>
            ) : (
              error ? (
                <p>Data not found</p>
              ) : (
                <WeatherInfo data={data} />
              )              
            )
          }                                       
      </HomeContainer>          
    </StyledHome>
  )
}

export default Home;
