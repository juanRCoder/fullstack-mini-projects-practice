import { useEffect, useState } from "react";
import { WeatherInterface } from "../interfaces/interfaces";
import { apikey } from "../secrets/data";
import { currentWeather, forecastWeather } from "../services/CurrentWeather";

function useCallWeather(searchedCity: string) {
  const [current, setCurrent] = useState<WeatherInterface>();
  const [forecast, setForecast] = useState<WeatherInterface[]>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {

    // Obtener datos actuales del clima segun ciudad
    const getCurrentWeather = async (searchedCity?: string) => {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apikey}&lang=es`;
      const getCurrent = await currentWeather(API)
      if (!getCurrent.error) {
        setCurrent(getCurrent.data)
        setError(getCurrent.error)
      }
      setError(getCurrent.error)
    }

    // Obtener los pronosticos de los siguientes 5 dias de la fecha actual
    const getDaysWeather = async (searchedCity?: string) => {
      const API = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=${apikey}&lang=es`;
      const getForecast = await forecastWeather(API)
      if (!getForecast.error) {
        setForecast(getForecast.data.list)
        setError(getForecast.error)
      }
      setError(getForecast.error)
    }

    getCurrentWeather(searchedCity ? searchedCity: 'lima')
    getDaysWeather(searchedCity ? searchedCity: 'lima')
  }, [searchedCity])

  return { current, forecast, error };
}

export default useCallWeather;