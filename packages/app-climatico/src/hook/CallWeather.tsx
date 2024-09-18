import { useEffect, useState } from "react";
import { WeatherInterface } from "../interfaces/interfaces";
import { currentWeather, forecastWeather } from "../services/CurrentWeather.services";
import useCallCity from "./CallCity";

const apiKey = import.meta.env.VITE_API_KEY;


export default function useCallWeather(searchedCity?: string) {
  const { city } = useCallCity();
  const [current, setCurrent] = useState<WeatherInterface>();
  const [forecast, setForecast] = useState<WeatherInterface[]>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const cityToUse = searchedCity || city;

    if (!cityToUse) return; 

    const getWeatherData = async () => {
      try {
        const currentAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityToUse}&appid=${apiKey}&lang=es`;
        const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityToUse}&appid=${apiKey}&lang=es`;

        const getCurrent = await currentWeather(currentAPI);
        const getForecast = await forecastWeather(forecastAPI);

        if (getCurrent.error) {
          setError(getCurrent.error);
        } else {
          setCurrent(getCurrent.data);
        }

        if (getForecast.error) {
          setError(getForecast.error);
        } else {
          setForecast(getForecast.data.list);
        }
      } catch (err) {
        console.error(err)
        setError(false);
      }
    };

    getWeatherData();
  }, [searchedCity, city])

  return { current, forecast, error };
}