import { cloudiness, gradeCelsius } from "../helpers/conversions";
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

function WeatherCard({ iconCloud: IconCloud, iconDrop: IconDrop, icon, hour, minute, ampm, dayWeek, dayMonth, month, feels_like, cloud, humidity }: propWeatherCard) {
  return (
    <section className='flex items-center justify-center bg-slate-200/30 rounded-md gap-4'>
      <div className='flex flex-col items-center gap-2 pl-5'>
        <ImageWeather customClass={'w-16 h-16'} icon={icon} />
        <h3 className='text-sm'>{hour}:{minute} {ampm}</h3>
      </div>
      <section className='sm:flex-1 py-2'>
        <p className='text-base'>{dayWeek}, {dayMonth} {month}</p>
        <div className='flex sm:gap-4 items-center justify-between'>
          <h2 className='text-4xl font-semibold'>{gradeCelsius(feels_like)}°</h2>
          <div className='flex flex-col gap-2 px-2'>
            <div className='flex items-center gap-2'>
              <IconCloud className='h-6 w-6' />
              <p className='text-lg font-semibold'>{cloud}%</p>
            </div>
            <div className='flex items-center gap-2'>
              <IconDrop className='h-6 w-6' />
              <p className='text-lg font-semibold'>{humidity}%</p>
            </div>
          </div>
        </div>
        <div className='text-sm pt-1'>
          <p>
            Sensacion de {gradeCelsius(feels_like)}°C, {cloudiness(cloud)}
          </p>
        </div>
      </section>
    </section>
  )
}

export default WeatherCard