import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Middle from "./Middle";
import SunStatus from "./SunStatus";
import DailyForecast from "./DailyForecast";
import OtherInfo from "./OtherInfo";

const Header = () => {
    
    const [whetherdata, setWhetherdata] = useState(false);
    const [city, setCity] = useState('pune')
    

    const handleCity = (e)=>{
     e.target.value;
     setCity(e.target.value)
    }

    const search = async (city) =>{
           try {
            const url = `http://api.weatherapi.com/v1/forecast.json?key=8e4959e6a9a248e5921141225242311&q=${city}&days=10&aqi=no&alerts=no`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setWhetherdata({
                temp :  Math.floor(data.current.temp_c),
                text : data.current.condition.text,
                icon : data.current.condition.icon,
                sunrise : data.forecast.forecastday[0].astro.sunrise,
                sunset : data.forecast.forecastday[0].astro.sunset,
                forecastday : data.forecast.forecastday,
                name: data.location.name,
                region :data.location.region,
                country : data.location.country,
                uv: data.current.uv,
                feels_like: data.current.feelslike_c,
                humidity: data.current.humidity,
                se_wind: data.current.wind_mph,
                air_pressure: data.current.pressure_mb,
                visibility: data.current.vis_km,

            })
            
           } catch (error) {
            console.log(error);
            
           }
    }
    
      useEffect(() => {
      search(city)
      }, [city])
   
  return (
    
    <div >
        <div className="flex justify-around items-center bg-black  w-full h-24 sticky top-0 pr-10 pl-5 ">
            <h1 className="sm:text-4xl text-2xl font-bold font-sans tracking-wide text-yellow-400">Whether <span className="text-white">Forecast</span> </h1>
            <div className="h-11 w-96 rounded-lg px-3 py-4 flex gap-4 items-center bg-white">
                <input onChange={handleCity} value={city} className="text-[18px] text-blue-700  w-full  outline-none tracking-wider" type="text" placeholder="Search..." />
                <RiSearch2Line className="text-[25px] text-blue-950 opacity-60"/>
            </div>
            <div className="flex sm:gap-6 gap-3 bg-black/80 px-2 rounded-lg  justify-evenly items-center" >
                <img className="sm:size-12 size-6 rounded-full hover:size-20" src="/public/summer-season.jpg" alt=""/>
                <img className="sm:size-12 size-6 rounded-full hover:size-20"  src="/public/winter-season.jpg" alt=""/>
                <img className="sm:size-12 size-6 rounded-full hover:size-20" src="/public/rainee-season.jpg" alt=""/>
            </div>
        </div>
        <Middle city={city} whetherdata={whetherdata}/>
        <SunStatus city={city} whetherdata={whetherdata}/>
        <DailyForecast whetherdata={whetherdata}/>
        <OtherInfo uv={whetherdata.uv} feels_like={whetherdata.feels_like} humidity={whetherdata.humidity} se_wind={whetherdata.se_wind} air_pressure={whetherdata.air_pressure} visibility={whetherdata.visibility} />
     </div>

  )
}

export default Header
