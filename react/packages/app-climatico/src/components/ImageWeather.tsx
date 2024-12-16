
import { Lluvia, Nieves, Nubes, PocasNubes, Soleado, Trueno } from "./Animations";
import { LluviaN, Neblina, NievesN, PocasNubesN, SoleadoN, TruenoN } from "./AnimationsNoche";

function ImageWeather({ icon, customClass }: { icon: string , customClass: string}) {
  switch (icon) {
    case '01d':
      return <Soleado className={customClass}/>
    case '01n':
      return <SoleadoN className={customClass}/>
    case '02d':
      return <PocasNubes className={customClass}/>
    case '02n':
      return <PocasNubesN className={customClass}/>
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return <Nubes className={customClass}/>
    case '09d':
      return <Lluvia className={customClass}/>
    case '09n':
      return <LluviaN className={customClass}/>
    case '10d':
      return <Trueno className={customClass}/>
    case '10n':
      return <TruenoN className={customClass}/>
    case '13d':
      return <Nieves className={customClass}/>
    case '13n':
      return <NievesN className={customClass}/>
    case '50d':
    case '50n':
      return <Neblina className={customClass}/>
  }
}

export default ImageWeather