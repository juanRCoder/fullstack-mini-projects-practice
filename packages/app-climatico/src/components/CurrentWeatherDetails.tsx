import { FaDroplet } from "react-icons/fa6";
import { FaWind, FaEye, FaCloud } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import { CircleGauge } from 'lucide-react';
import useCallWeather from "../hook/CallWeather";
import { degWind, visibility } from "../helpers/conversions";


function CurrentWeatherDetail({ searchCity }: { searchCity: string }) {
  const { current } = useCallWeather(searchCity);

  return (
    <section className='grid grid-cols-2 sm:grid-cols-3 place-items-center mb-5 pl-0 sm:pl-3 gap-4 gap-y-8'>
      {[
        [<FaWind className='h-8 w-8' />, `${current?.wind.speed}m/s ${current && degWind(current.wind.deg)}`],
        [<CircleGauge className='h-8 w-8' />, `${current?.main.pressure}hPa`],
        [<FaDroplet className='h-8 w-8' />, `${current?.main.humidity}%`],
        [<LuWaves className='h-8 w-8' />, `${current?.main.sea_level} msnm`],
        [<FaEye className='h-8 w-8' />, `${current && visibility(current?.visibility)}km`],
        [<FaCloud className='h-8 w-8' />, `${current?.clouds.all}%`]
      ].map(([component, text], i) => (
        <div key={i} className='flex flex-col sm:flex-row items-center sm:items-start gap-2'>
          {component}
          <p className='text-xl font-semibold'>{text}</p>
        </div>
      ))}
    </section>
  )
}

export default CurrentWeatherDetail