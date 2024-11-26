


const DailyForecast = ({whetherdata}) => {

  return (
    <div >
       <div className="mt-12 mb-5">
         <h1 className=" w-[65%] mx-auto text-4xl text-white font-bold font-sans ">Daily <span className="text-[#f0e61a]">Forecast</span></h1>
       </div>
      <div className="w-[65%]  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10 bg-black/70 mx-auto px-4 py-4 rounded-lg shadow-[10px]">
        {
           whetherdata.forecastday?.map((ele, i)=>{
            return (
              <div key={i} className="text-white border-2 rounded-lg px-4 w-40 bg-white/5  h-40 flex flex-col gap-1 justify-center items-center hover:bg-[#d18c8c]">
                <h3 className="text-[20px] font-bold">{ele.date}</h3>
                <img className="size-16" src={ele.day.condition.icon}/>
                <h1 className="text-[15px] font-bold">{ele.day.avgtemp_c}°</h1>
              </div>
            )
          })
        }
        </div>
     </div>
      

  )
}

export default DailyForecast









{/* <div className="flex justify-evenly items-center border-2 rounded-xl h-64  bg-pink-100 w-[1200px]">
            <div className="h-44 w-40 text-white bg-black/75 flex flex-col items-center gap-7 px-4 py-2 border-2 rounded-lg">
                <h3>mon</h3>
                <img className="size-14 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN_vCx8HeJNAuf0OAF_PNJTmtuOu2qx_LMQ&s " alt=""></img>
                <h1>31&deg;</h1>
            </div>
            <div className="h-44 w-40 text-white bg-black/75 flex flex-col items-center gap-7 px-4 py-2 border-2 rounded-lg ">
                <h3>mon</h3>
                <img className="size-14 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN_vCx8HeJNAuf0OAF_PNJTmtuOu2qx_LMQ&s" alt=""></img>
                <h1>31&deg;</h1>
            </div>
            <div className="h-44 w-40 text-white bg-black/75 flex flex-col items-center gap-7 px-4 py-2 border-2 rounded-lg ">
                <h3>mon</h3>
                <img className="size-14 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN_vCx8HeJNAuf0OAF_PNJTmtuOu2qx_LMQ&s " alt=""></img>
                <h1>31&deg;</h1>
            </div>
            <div className="h-44 w-40 text-white bg-black/75 flex flex-col items-center gap-7 px-4 py-2 border-2 rounded-lg ">
                <h3>mon</h3>
                <img className="size-14 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN_vCx8HeJNAuf0OAF_PNJTmtuOu2qx_LMQ&s " alt=""></img>
                <h1>31&deg;</h1>
            </div>
            <div className="h-44 w-40 text-white bg-black/75 flex flex-col items-center  gap-7 px-4 py-2 border-2 rounded-lg">
                <h3>mon</h3>
                <img className="size-14 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN_vCx8HeJNAuf0OAF_PNJTmtuOu2qx_LMQ&s " alt=""></img>
                <h1>31&deg;</h1>
            </div>
        </div> */}