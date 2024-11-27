


// eslint-disable-next-line react/prop-types
const Middle = ({ whetherdata}) => {

  return (
    <div>
      <div className="flex justify-center items-center gap-4 h-36 mt-2 py-5  ">
        
        <h1 className="text-8xl bg-white/25 text-[#f0e61a] rounded-lg">{whetherdata.temp}°<span className="text-6xl text-blue-200">C</span></h1>
        
      </div>
      <h2 className="text-4xl  w-[20%]  mx-auto flex justify-center items-center text-[#d6ef2f] font-bold font-sans tracking-wide " >{whetherdata.text}</h2>
    </div>
  )
}

export default Middle
