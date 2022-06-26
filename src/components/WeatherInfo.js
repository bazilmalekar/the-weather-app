import React, { useEffect, useRef } from "react";
import { InfoDiv } from "../styledComponent/styledHome";
import { Fade } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import {Switch} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";
import {degreeF, degreeC, toggleDisplay, hideDiaplay} from "../services/toggleUnits";

const WeatherInfo = ({data}) => {
    const unitDiv = useRef();
    const dispatch = useDispatch();
    const switchState = useSelector((state) => state.toggle);

    const handleClick = (e) => {
        if(!unitDiv.current.contains(e.target)){
            dispatch(hideDiaplay())
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [])
    return(
        <>
            <Fade in={true}>
                <InfoDiv ref={unitDiv}> 
                    <div className="temp_info">
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon" />
                        {
                            switchState.valueC ?
                            <h1>{Math.round(data?.main.temp)}°C</h1> :
                            <h1>{Math.round((Math.round(data?.main.temp) * 9/5) + 32)}°F</h1>
                        }                                                
                    </div>
                    <div className="min_max_temp">
                        {
                            switchState.valueC ?
                            <p>Min: {Math.round(data?.main.temp_min)}°C &nbsp; || &nbsp; Max: {Math.round(data?.main.temp_max)}°C</p> :
                            <p>Min: {Math.round((Math.round(data?.main.temp_min) * 9/5) + 32)}°F &nbsp; || &nbsp; Max: {Math.round((Math.round(data?.main.temp_max) * 9/5) + 32)}°F</p>
                        }
                    </div>
                    <p style={{textTransform: "capitalize"}}>{data.weather[0].description}</p>
                    <div className="set_ico" >
                        <SettingsIcon onClick={() => dispatch(toggleDisplay())} className="set_ico_i" />
                    </div>
                    {
                        switchState.display && 
                        <Fade in={true}>
                            <div className="set_div" >
                                <div className="set_div_chr">
                                    <Switch onClick={() => dispatch(degreeC())} checked={switchState.valueC} size="small" />
                                    <h4>°C</h4>       
                                </div>
                                <div className="set_div_chr">
                                    <Switch onClick={() => dispatch(degreeF())} checked={switchState.valueF} size="small" />
                                    <h4>°F</h4>    
                                </div>
                            </div>
                        </Fade>
                    }                    
                </InfoDiv>
            </Fade>
        </>
    )
}

export default WeatherInfo;