import { useEffect, useState } from 'react';
import useCallWeather from './CallWeather';
import { WeatherInterface } from '../interfaces/interfaces';

export default function useCallFiveForecasts(searchCity: string) {
  const [fiveForecast, setFiveForecast] = useState<WeatherInterface[]>([]);
  const { forecast } = useCallWeather(searchCity);

  useEffect(() => {
    if (forecast) {
      setFiveForecast(forecast.slice(0, 4));
    }
  }, [forecast]);

  return { fiveForecast };
}
