import WeatherCard from './WeatherCard';
import { transformTime } from '../helpers/dateTime';
import { FaCloud, FaDroplet } from 'react-icons/fa6';
import useCallFiveForecasts from '../hook/CallFiveForecasts';

function FiveForeCastComponent({searchCity}: {searchCity: string}) {
  const { fiveForecast } = useCallFiveForecasts(searchCity);

  return (
    <section className='grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2'>
      {fiveForecast.map((day, i) => {
        const date = transformTime(day.dt_txt || '');
        return (
          <WeatherCard
            key={i}
            iconCloud={FaCloud}
            iconDrop={FaDroplet}
            icon={day.weather[0].icon || ''}
            hour={date.hour}
            minute={date.minute}
            ampm={date.ampm}
            dayWeek={date.dayWeek}
            dayMonth={date.dayMonth}
            month={date.month}
            feels_like={fiveForecast[i].main.feels_like}
            cloud={day?.clouds.all}
            humidity={day?.main.humidity}
          />
        );
      })}
    </section>
  )
}

export default FiveForeCastComponent