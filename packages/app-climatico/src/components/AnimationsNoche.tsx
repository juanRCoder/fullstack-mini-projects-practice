import Lottie from 'lottie-react';
import animationNeblina from '../assets/animationNeblina.json';
import animationSoleadoN from '../assets/animationSoleadoN.json';
import animationPocasNubesN from '../assets/animationPocasNubesN.json';
import animationTruenoN from '../assets/animationTruenoN.json';
import animationNievesN from '../assets/animationNievesN.json';
import animationLluviaN from '../assets/animationLluviaN.json';


export function SoleadoN() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationSoleadoN}
      />
    </div>
  )
}

export function Neblina() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationNeblina}
      />
    </div>
  )
}

export function PocasNubesN() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationPocasNubesN}
      />
    </div>
  )
}

export function TruenoN() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationTruenoN}
      />
    </div>
  )
}

export function NievesN() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationNievesN}
      />
    </div>
  )
}

export function LluviaN() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationLluviaN}
      />
    </div>
  )
}