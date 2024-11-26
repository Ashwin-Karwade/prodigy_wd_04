import { LiaTemperatureHighSolid } from "react-icons/lia"
import { LuDroplets, LuWind } from "react-icons/lu"
import { MdVisibility } from "react-icons/md"
import { PiSunFill } from "react-icons/pi"




const OtherInfo = ({ uv , feels_like, humidity, se_wind, air_pressure, visibility}) => {

  
  return (
    <div>
      <div className="mt-12 mb-5">
         <h1 className=" w-[65%] mx-auto text-4xl text-yellow-400 font-bold font-sans ">Other <span className="text-white">Information</span></h1>
       </div>
      <div className=" mt-5 flex justify-center items-center">
        <div className=" w-[65%]  grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 place-items-center px-5 py-5 rounded-lg bg-black/50">
            <div className="border-2 h-32 w-36 rounded-lg py-4 px-3 bg-white/10 text-white flex flex-col gap-1 hover:bg-[#d18c8c]" >
                <PiSunFill className="size-9 text-[#f08718]"/>
                <h3 className="text-[14px] text-[#21d8a3] font-semibold ml-2">UV</h3>
                <h2 className="text-2xl ml-2 font-bold">{uv}<span className="text-[16px] font-semibold"> very weak</span></h2>
            </div>
            <div className="border-2 h-32 w-36 rounded-lg  py-4 px-3 bg-white/10 text-white  hover:bg-[#d18c8c]"> 
                 <LiaTemperatureHighSolid className="size-9 text-[#f08718]"/>
                <h3 className="text-[14px] text-[#21d8a3] font-semibold ml-2">Feels like</h3>
                <h2 className="text-2xl ml-2 font-bold">{feels_like}<span>&deg;</span></h2>
            </div>
            <div className="border-2 h-32 w-36 rounded-lg  py-4 px-3 bg-white/10 text-white  hover:bg-[#d18c8c]" >
                <LuDroplets className="size-9 text-[#f08718]"/>
                <h3 className="text-[14px] text-[#21d8a3] font-semibold ml-2">Humidity</h3>
                <h2 className="text-2xl ml-2 font-bold">{humidity} <span className="text-[16px]">%</span></h2>
            </div> 
            <div className="border-2 h-32 w-36 rounded-lg  py-4 px-3 bg-white/10 text-white  hover:bg-[#d18c8c]" >
                <LuWind className="size-9 text-[#f08718]"/>
                <h3 className="text-[14px] text-[#21d8a3] font-semibold ml-2">SE Wind</h3>
                <h2 className="text-2xl ml-2 font-bold">{se_wind} <span className="text-[16px]">mi/h</span></h2>
            </div>
            <div className="border-2 h-32 w-36 rounded-lg  py-4 px-3 bg-white/10 text-white hover:bg-[#d18c8c] " >
                <PiSunFill className="size-9 text-[#f08718]"/>
                <h3 className="text-[14px] text-[#21d8a3] font-semibold ml-2">Air pressure</h3>
                <h2 className="text-2xl ml-2 font-bold">{air_pressure}<span className="text-[16px]">hPa</span></h2>
            </div>
            <div className="border-2 h-32 w-36 rounded-lg  py-4 px-3 bg-white/10 text-white hover:bg-[#d18c8c] " >
                <MdVisibility className="size-8 text-[#f08718]"/>
                <h3 className="text-[14px] text-[#21d8a3] font-semibold ml-2">Visibility</h3>
                <h2 className="text-2xl ml-2 font-bold">{visibility}<span className="text-[16px]">km</span></h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OtherInfo
