import { FaTemperatureFull, FaTemperatureQuarter } from "react-icons/fa6"
import { gradeCelsius, cloudiness } from "../helpers/conversions"
import ImageWeather from "./ImageWeather"
import { currentTime } from "../helpers/dateTime";
import useCallWeather from "../hook/CallWeather";

function CurrentWeather({searchCity}: {searchCity: string}) {
  const { current } = useCallWeather(searchCity);
  const time = currentTime();

  return (
    <article className='flex justify-center'>
      <div className='sm:w-fit w-full'>
        <section className='sm:flex-nowrap sm:text-xl flex items-center flex-wrap justify-between text-lg'>
          <p className='sm:text-2xl'>{current?.name} {current?.sys.country}</p>
          <p>{time.dayWeek}, {time.dayMonth} {time.month}</p>
        </section>

        <section className='sm:gap-10 sm:flex-row flex flex-col items-center justify-between'>

          <ImageWeather customClass={'sm:h-56 sm:w-56 h-32 w-32'} icon={current?.weather[0].icon || ''} />
          
          <div className='sm:pt-10 sm:flex-col w-full sm:w-[18.2rem] flex flex-col-reverse justify-between'>
            <section className='flex-row flex items-center justify-center gap-6'>
              {/* TEMPERATURA */}
              <h2 className='text-5xl sm:text-7xl font-semibold'>{current && gradeCelsius(current?.main.temp)}°</h2>
              {/* TEMPERATURA  RANGOS*/}
              <div className='flex flex-col sm:flex-col gap-4'>
                {[
                  [<FaTemperatureFull className='text-lg sm:text-2xl' />, 'max', `${current && gradeCelsius(current?.main.temp_max)}°C`],
                  [<FaTemperatureQuarter className='text-lg sm:text-2xl' />, 'max', `${current && gradeCelsius(current?.main.temp_min)}°C`],
                ].map(([component, text, weather], i) => (
                  <div key={i} className='inline-flex gap-2 justify-end'>
                    <p className='text-lg sm:text-2xl w-10 text-center flex flex-col items-center'>
                      {component} {text}
                    </p>
                    <p className='text-2xl font-semibold w-20'>{weather}</p>
                  </div>
                ))}
              </div>
            </section>
            {/* SENSACION */}
            <section className='sm:pt-6 text-left sm:text-left text-base pb-3'>
              <p>
                Sensación de <b>{current && gradeCelsius(current?.main.feels_like)}°C </b>,
                {" "}{current && cloudiness(current.clouds.all)}
              </p>
            </section>
          </div>
        </section>
      </div>
    </article>
  )
}

export default CurrentWeather