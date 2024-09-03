import Lottie from 'lottie-react';
import animationSoleado from '../assets/animationSoleado.json';
import animationNubes from '../assets/animationNubes.json';
import animationPocasNubes from '../assets/animationPocasNubes.json';
import animationTrueno from '../assets/animationTrueno.json';
import animationNieves from '../assets/animationNieves.json';
import animationLluvia from '../assets/animationLluvia.json';


export function Soleado() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationSoleado}
      />
    </div>
  )
}

export function Nubes() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationNubes}
      />
    </div>
  )
}

export function PocasNubes() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationPocasNubes}
      />
    </div>
  )
}

export function Trueno() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationTrueno}
      />
    </div>
  )
}

export function Nieves() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationNieves}
      />
    </div>
  )
}

export function Lluvia() {
  return (
    <div>
      <Lottie
        className='w-10 h-10'
        animationData={animationLluvia}
      />
    </div>
  )
}