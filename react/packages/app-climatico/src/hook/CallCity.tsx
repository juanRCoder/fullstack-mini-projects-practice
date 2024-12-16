import { useEffect, useState } from "react";
import { getCity } from "../services/CurrentWeather.services";

export default function useCallCity() {
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    // Obtener la ciudad del cliente
    const getCurrentCity = async () => {
      const getData = await getCity("https://ipapi.co/json/");
      if (!getData.error) {
        setCity(getData.data)
      }
    }
    getCurrentCity()
  }, [])

  return { city }
}