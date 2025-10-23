import React, { useEffect } from 'react'
import { useState } from 'react'
import Rainybg from "../assets/rainybg.png"
import Cloudybg from "../assets/cloudybg.png"
import Sunnybg from "../assets/suunnybg.png"
import Snowybg from "../assets/snowybg.png"
import classes from "../Components/Weathercard.module.css"
import { FaRegMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { PiCloudSunLight } from "react-icons/pi";




function Weathercard({weatherdata}) {
   const [weatherdisplay, setweatherdisplay] = useState("")

  useEffect(()=>{
   
    if (!weatherdata || !weatherdata.current || !weatherdata.current.condition) return;

   const condition  = weatherdata?.current?.condition?.text?.toLowerCase()
   const dewpoint =   weatherdata?.current?.dewpoint_c

   if(condition.includes("snow")){
     setweatherdisplay("snowy")
   }
   else if(condition.includes("rain")){
    setweatherdisplay("rainy")
   }
   else if(condition.includes("cloud")){
    setweatherdisplay("cloudy")
   }
   else{
    setweatherdisplay("sunny")
   }
  },[weatherdata])
    
 const Weatherbg = weatherdisplay === "rainy" ? Rainybg :
                  weatherdisplay === "cloudy" ? Cloudybg:
                  weatherdisplay === "snowy" ? Snowybg :
                  Sunnybg
              
  return (
    <div>
      <img className={classes.weatherbg}src={Weatherbg}></img>

      <div className={classes.weatherbar}> 
        <p className={classes.daynight}>Night</p><br></br>
        <span className={classes.icon1}><FaRegMoon/></span> <br></br>
        <p className={classes.temp}>{weatherdata?.current?.gust_mph}°</p><br></br>

        <p className={classes.daynight}>Morning</p> <br></br>
        <span className={classes.icon1}><MdWbSunny/></span><br></br>
        <p className={classes.temp}>{weatherdata?.current?.temp_c}°</p><br></br>

        <p className={classes.daynight}>Day</p> <br></br>
        <span className={classes.icon1}><FaCloudShowersHeavy /></span><br></br>
        <p className={classes.temp}>{weatherdata?.current?.dewpoint_c}°</p><br></br>

        <p className={classes.daynight}>Evening</p> <br></br>
        <span className={classes.icon1}><PiCloudSunLight /></span><br></br>
        <p className={classes.temp}>{weatherdata?.current?.gust_kph}°</p><br></br>

        

      </div>
    </div>
  )

 
}

export default Weathercard
