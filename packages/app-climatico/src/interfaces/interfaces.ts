export interface WeatherInterface {
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: { all: number };
  sys: { country: string };
  name: string;
  dt_txt?: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
