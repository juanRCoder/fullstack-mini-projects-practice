import { useEffect, useState } from 'react';
import useCallWeather from './CallWeather';
import { WeatherInterface } from '../interfaces/interfaces';

function useCallFiveForecasts(searchCity: string) {
  const [fiveForecast, setFiveForescat] = useState<WeatherInterface[]>([]);
  const { forecast } = useCallWeather(searchCity);

  useEffect(() => {
    if (forecast) {
      const forecastArray: WeatherInterface[] = [];
      const times = ['12:00:00', '12:00:00', '12:00:00', '12:00:00']

      times.forEach((t, i) => {
        const forescastDay = forecast?.filter(day => day.dt_txt?.split(' ')[1] === t);
        if (forescastDay[i]) { //Agrega los datos filtrados pero solo en el indice especifico
          forecastArray.push(forescastDay[i]);
        }
      })
      setFiveForescat(forecastArray);
    }
  }, [forecast]);

  return { fiveForecast }
}

export default useCallFiveForecasts