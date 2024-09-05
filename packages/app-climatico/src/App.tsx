import './App.css';
import { currentTime } from './helpers/dateTime';
import useCallWeather from './hook/CallWeather';
import CurrentWeatherDetail from './components/CurrentWeatherDetails';
import CurrentWeather from './components/CurrentWeather.component';
import FiveForeCastComponent from './components/FiveForeCastComponent';
import { TbMapSearch } from "react-icons/tb";
import { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import Footer from './components/Footer';


function App() {
  const [sendLocation, setSendLocation] = useState('');
  const { error } = useCallWeather(sendLocation);


  // Toma la ciudad encontrada y lo manda a buscar en el hook
  const handleSearchCity = (city: string) => {
    setSendLocation(city)
  }
  // Cambio de colores segun el periodo de tiempo
  const ampm = currentTime();

  return (
    <>
      <main className={`${ampm.dateHour == 'a.m.' ? 'background-night' : 'background-day'} min-h-screen flex flex-col`}>
        <article className='max-w-[40rem] m-auto py-5 px-2 flex-grow'>
          <div className='flex-1'>
            <h1 className='sm:text-6xl text-4xl font-semibold text-center pb-4'>App Climatico</h1>
            <SearchComponent sendLocation={handleSearchCity} />
            {error
              ? (
                < >
                  <TbMapSearch className='h-32 w-32 m-auto' />
                  <p className='text-center text-2xl'>Ciudad/Provincia no encontrada!</p>
                </>
              )
              : (
                <>
                  <CurrentWeather searchCity={sendLocation} />
                  <CurrentWeatherDetail searchCity={sendLocation} />
                  <FiveForeCastComponent searchCity={sendLocation} />
                </>
              )
            }
          </div>
        </article>
        <Footer clases="flex-none md:text-base text-center text-white pb-3 pt-10" />
      </main>
    </>
  )
}

export default App
