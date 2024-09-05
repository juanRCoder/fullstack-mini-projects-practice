import Lottie from 'lottie-react';
import animationSoleado from '../assets/animationSoleado.json';
import animationNubes from '../assets/animationNubes.json';
import animationPocasNubes from '../assets/animationPocasNubes.json';
import animationTrueno from '../assets/animationTrueno.json';
import animationNieves from '../assets/animationNieves.json';
import animationLluvia from '../assets/animationLluvia.json';


export function Soleado({ className }: { className: string }) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationSoleado}
      />
    </div>
  )
}

export function Nubes({ className }: { className: string }) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationNubes}
      />
    </div>
  )
}

export function PocasNubes({ className }: { className: string }) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationPocasNubes}
      />
    </div>
  )
}

export function Trueno({ className }: { className: string }) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationTrueno}
      />
    </div>
  )
}

export function Nieves({ className }: { className: string }) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationNieves}
      />
    </div>
  )
}

export function Lluvia({ className }: { className: string }) {
  return (
    <div>
      <Lottie
        className={className}
        animationData={animationLluvia}
      />
    </div>
  )
}