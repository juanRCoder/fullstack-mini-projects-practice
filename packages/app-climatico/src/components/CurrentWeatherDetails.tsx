import { FaDroplet } from "react-icons/fa6";
import { FaWind, FaEye, FaCloud } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";

import useCallWeather from "../hook/CallWeather";
import { degWind, visibility } from "../helpers/conversions";


function CurrentWeatherDetail({ searchCity }: { searchCity: string }) {
  const { current } = useCallWeather(searchCity);

  return (
    <section  className='grid grid-flow-col auto-cols-[minmax(0,_2fr)] my-7'>
      {[
        [FaWind , `${current?.wind.speed}m/s ${current && degWind(current.wind.deg)}`],
        [LuWaves , `${current?.main.sea_level} msnm`],
        [FaDroplet, `${current?.main.humidity}%`],
        [FaEye, `${current && visibility(current?.visibility)}km`],
        [FaCloud, `${current?.clouds.all}%`]
      ].map(([Component, text], i) => (
        <div key={i} className='flex flex-col items-center gap-2'>
          <Component className='h-7 w-7 sm:h-8 sm:w-8' />
          <p className='text-center text-base sm:text-xl font-semibold'>{String(text)}</p>
        </div>
      ))}
    </section>
  )
}

export default CurrentWeatherDetail