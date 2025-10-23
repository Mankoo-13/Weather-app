import React, { useState, useEffect } from 'react'
import classes from "../Components/Searchbar.module.css"
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { GiSunCloud } from "react-icons/gi";
import { CiLineHeight } from "react-icons/ci";
import Weathercard from './Weathercard';




function Searchbar() {
    const [city, setcity] = useState("")
    const [weatherdata, setweatherdata] = useState(null)
    const [searchedcity, setsearchedcity] = useState("")



    async function fetchingdata() {
        if (city === "") {
            alert("please enter the city first")
        }
        try {
            let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=3c5387f3d3b94881a7c31133251310&q=${city}&aqi=yes`)
            let data = await res.json()
            console.log(data)
            setweatherdata(data)
            setsearchedcity(city)
        }
        catch (error) {
            console.log("Unable to fetch the weather data")
        }
    }


    return (
        <div>
            <h1 className={classes.heading1}>ACCUWEATHER </h1>
            <span className={classes.icon1}>
                <GiSunCloud />
            </span>

            {searchedcity && <div className={classes.location} >
                <CiLocationOn /><span>{searchedcity}</span>
            </div>}




            <input type='text' className={classes.searchbar} placeholder='Enter your city here' value={city} onChange={(e) => setcity(e.target.value)}></input>
            <button className={classes.btn1} onClick={fetchingdata}  >
                <span className={classes.icon2}>
                    <BsSearch />
                </span>
            </button>


            <div className={classes.collectedata}>
                {weatherdata && (
                    <>
                        <p className={classes.wdata2}>{weatherdata?.current?.temp_c}°C</p>
                        <p className={classes.wdata1}> Time and date <br></br> {weatherdata?.location?.localtime}</p>
                        <p className={classes.wdata4}>Feels like {weatherdata?.current?.feelslike_c}°</p>


                        <p className={classes.wdata3}>Precipitation: 0%<br></br>
                            Humidity: {weatherdata?.current?.humidity} <br></br>
                            Wind: {weatherdata?.current?.wind_kph} km/h
                        </p>


                    </>
                )}
                {weatherdata && <Weathercard weatherdata={weatherdata} />}

                {/* <p className={classes.footer}> all right reserved © accuweather</p> */}


            </div>
        </div>
    )
}

export default Searchbar
