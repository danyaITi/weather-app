import React, { ChangeEvent, ChangeEventHandler, useCallback, useState } from "react"
import axios from "axios";


const Content: React.FC =  () => {

  type DataState = {
    name: string,
    main: {
      temp: number,
      feels_like: number,
      humidity: number
    }
    weather: {
      0:{
        main:string
      }
    }
    wind: {
      speed:number
    }
    
    

  }
  
    const [data,setData] = useState<DataState>({} as DataState )
    const [location, setLocation]= useState("")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&hourly=${location}&appid=e595263b1e9f24f4657f185b135dac93`
   

 const addCity = async (event:any) => {
 if(event.key === "Enter"){
 await axios.get(url)
  .then((res)=> {
   setData(res.data)
  
 })
 .catch((error:Error)=>{
  alert("Такой город не существует")
 })
 setLocation("") 
}
}

const updateValue = useCallback((e:ChangeEvent<HTMLInputElement>) => {
  setLocation(e.target.value)
},[location])

 
    return(
      <div className="box">       
          <div  className="input-box">
            <input type="text" placeholder="Enter City" onKeyPress={addCity} onChange={updateValue} value={location} />                
          </div>
         
          <div className="title-box">{data.name}</div>
          
          <div className="deg-box">{data.main ? <h2>{Math.round(data.main.temp)}<sup>o</sup>C</h2> : null}</div>

          <div className="box-weather">{data.weather ? data.weather[0].main  : null}</div>

          <div className="box-feels">{data.main ? <div>Feels like:<h3>{Math.round(data.main.feels_like)}<sup>o</sup>C</h3></div> : null}</div>

          <div className="flex">
              <div className="box-wind">{data.wind ? <div className="wind-img"><h4>{data.wind.speed}MPH</h4></div> : null}</div>
              <div className="box-humidity">{data.main ? <div className="humidity-img"><h4>{data.main.humidity}%</h4></div> : null}</div>
          </div>
      </div>
    )

}
export default Content;