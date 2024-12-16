import Lottie from 'lottie-react';
import animationNeblina from '../assets/animationNeblina.json';
import animationSoleadoN from '../assets/animationSoleadoN.json';
import animationPocasNubesN from '../assets/animationPocasNubesN.json';
import animationTruenoN from '../assets/animationTruenoN.json';
import animationNievesN from '../assets/animationNievesN.json';
import animationLluviaN from '../assets/animationLluviaN.json';


export function SoleadoN({className}: {className: string}) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationSoleadoN}
      />
    </div>
  )
}

export function Neblina({className}: {className: string}) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationNeblina}
      />
    </div>
  )
}

export function PocasNubesN({className}: {className: string}) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationPocasNubesN}
      />
    </div>
  )
}

export function TruenoN({className}: {className: string}) {
  return (
    <div>
      <Lottie
       className={className}
        animationData={animationTruenoN}
      />
    </div>
  )
}

export function NievesN({className}: {className: string}) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationNievesN}
      />
    </div>
  )
}

export function LluviaN({className}: {className: string}) {
  return (
    <div>
      <Lottie
       className={className}
        animationData={animationLluviaN}
      />
    </div>
  )
}