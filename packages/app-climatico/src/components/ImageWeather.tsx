
import { Lluvia, Nieves, Nubes, PocasNubes, Soleado, Trueno } from "./Animations";
import { LluviaN, Neblina, NievesN, PocasNubesN, SoleadoN, TruenoN } from "./AnimationsNoche";

function ImageWeather({ icon }: { icon: string }) {
  switch (icon) {
    case '01d':
      return <Soleado />
    case '01n':
      return <SoleadoN />
    case '02d':
      return <PocasNubes />
    case '02n':
      return <PocasNubesN />
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return <Nubes />
    case '09d':
      return <Lluvia />
    case '09n':
      return <LluviaN />
    case '10d':
      return <Trueno />
    case '10n':
      return <TruenoN />
    case '13d':
      return <Nieves />
    case '13n':
      return <NievesN />
    case '50d':
    case '50n':
      return <Neblina />
  }
}

export default ImageWeather