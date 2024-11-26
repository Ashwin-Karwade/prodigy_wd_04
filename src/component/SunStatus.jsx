import { GiSunrise, GiSunset, } from "react-icons/gi";



const SunStatus = ({whetherdata}) => {  
  return (
    <div>
        <div className="flex justify-center items-center">
         <div className="mt-8 border-2 border-black rounded-xl h-48 w-[90%] sm:w-[70%] lg:w-[50%] mx-auto text-white py-3 px-6 flex justify-evenly gap-3 bg-blue-950">
            <div className="flex flex-col justify-center gap-5 items-center ">
               <div>
                 <GiSunrise className="size-10 text-yellow-200"/>
                 <h3 className="text-white font-bold font-sans">Sunrise</h3>
               </div>
                <h1 className="text-[18px] font-semibold">{whetherdata.sunrise}</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <h4 className="text-3xl font-bold font-sans tracking-wide">{whetherdata.name}</h4>
              <h2 className="text-[20px] font-semibold text-[#21d8a3]">{whetherdata.region}  <sapn className="text-2xl">||  </sapn><span>{whetherdata.country}</span></h2>
              <img src={whetherdata.icon} alt=""  className="h-96   text-yellow-400"/> 
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div>
                <GiSunset className="size-10 text-yellow-200"/>
                <h3 className="text-white font-bold font-sans">Sunset</h3>
              </div>
                <h1 >{whetherdata.sunset}</h1>
            </div>
        </div>
     </div>
    </div>
  )
}

export default SunStatus

    