import './App.css';
import { degWind, gradeCelsius, nubocidad, visibility } from './helpers/conversions';
import { currentTime, transformTime } from './helpers/dateTime';
import useCallWeather from './hook/CallWeather';
import useCallFiveForecasts from './hook/CallFiveForecasts';
import ImageWeather from './components/ImageWeather';
import SearchInput from './components/SearchInput';
import SearchButton from './components/Button';
import { useState } from 'react';


function App() {
  const [location, setLocation] = useState<string>('lima');
  const [sendLocation, setSendLocation] = useState('');
  const { current, error } = useCallWeather(sendLocation);
  const { fiveForecast } = useCallFiveForecasts();
  const time = currentTime();

  // Recolecto la palabra
  const searchCity = (city: string) => {
    setLocation(city)
  }
  // Envio la frase final al hook callWeather
  const sendCity = () => {
    setSendLocation(location)
  };



  return (
    <>
      {error
        ? (
          <p>Ciudad no encontrada!</p>
        )
        : (
          <main className='background-fondo'>
            <h1 className='text-4xl font-semibold'>App Climatico</h1>
            <div className='py-14 pl-5 flex'>
              <SearchInput onChange={searchCity} />
              <SearchButton onClick={sendCity} />
            </div>
            <p>{current?.name} {current?.sys.country} - {time.dayWeek}, {time.dayMonth} {time.month}</p>
            <div>
              <p>Temp max: {current && gradeCelsius(current?.main.temp_max)}°C</p>
              <p>Temp min: {current && gradeCelsius(current?.main.temp_min)}°C</p>
            </div>
            <ImageWeather icon={current?.weather[0].icon || ''} />
            <h2 className='text-2xl font-semibold'>{current && gradeCelsius(current?.main.temp)}°</h2>
            <p> Sensacion de {current && gradeCelsius(current?.main.feels_like)}°C </p>
            <p>{current && nubocidad(current.clouds.all)}</p>
            <hr />
            <section className='flex gap-10'>
              <div>
                <p>Viento: {current?.wind.speed}m/s {current && degWind(current.wind.deg)}</p>
                <p>Humedad: {current?.main.humidity}%</p>
                <p>Nivel del mar: {current?.main.sea_level} msnm</p>
              </div>
              <div>
                <p>Presion Aftmosferica: {current?.main.pressure}hPa</p>
                <p>Visibilidad: {current && visibility(current?.visibility)}km</p>
                <p>Nubosidad: {current?.clouds.all}%</p>
              </div>
            </section>
            <hr />
            <section>
              <h1 className='text-2xl font-semibold'>Pronostico</h1>
              {fiveForecast.map((day, i) => {
                const date = transformTime(day.dt_txt || '');
                const hour = (day.dt_txt || '').split(' ')[1];
                return (
                  <section key={i}>
                    <p>{date.dayWeek}, {date.dayMonth} {date.month}</p>
                    <ImageWeather icon={day.weather[0].icon || ''} />
                    <h2 className='text-2xl font-semibold'>{current && gradeCelsius(fiveForecast[i].main.feels_like)}°</h2>
                    <h3>{hour.split(':')[0]}:00 hrs</h3>
                    <p> Sensacion de {day && gradeCelsius(day?.main.feels_like)}°C </p>
                    <p>{current && nubocidad(day.clouds.all)}</p>
                    <div className='pb-4'>
                      <p>Nubosidad: {day?.clouds.all}%</p>
                      <p>Humedad: {day?.main.humidity}%</p>
                    </div>
                    <hr />
                  </section>
                );
              })}
            </section>
          </main>
        )}
    </>
  )
}

export default App
