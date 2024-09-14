import { gradeCelsius } from "../helpers/conversions";
import ImageWeather from "./ImageWeather";
import { IconType } from "react-icons";

export interface propWeatherCard {
  iconCloud: IconType
  iconDrop: IconType
  icon: string
  hour: string
  minute: string
  ampm: string
  dayWeek: string
  dayMonth: string
  month: string
  feels_like: number
  cloud: number
  humidity: number
}

function WeatherCard({ iconCloud: IconCloud, iconDrop: IconDrop, icon, hour, minute, ampm, dayWeek, dayMonth, feels_like, cloud, humidity }: propWeatherCard) {
  return (
    <section className='flex flex-col bg-slate-200/30 rounded-lg cursor-pointer md:hover:scale-105 transition'>
      <p className='sm:pl-0 sm:text-center pl-3 text-base pt-2 text-left'>{dayWeek}, {dayMonth}</p>
      <section className="sm:block pl-5 sm:pl-0 flex items-center justify-center gap-7">
        <div className='flex flex-col items-center'>
          <ImageWeather customClass={'w-20 h-20'} icon={icon} />
          <h3 className='text-sm'>{hour}:{minute} {ampm}</h3>
        </div>
        <section className='sm:py-2'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-4xl font-semibold'>{gradeCelsius(feels_like)}°</h2>
            <div className='flex gap-4'>
              <div className='flex flex-col items-center gap-2'>
                <IconCloud className='h-6 w-6' />
                <p className='text-base font-semibold'>{cloud}%</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <IconDrop className='h-6 w-6' />
                <p className='text-base font-semibold'>{humidity}%</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default WeatherCard