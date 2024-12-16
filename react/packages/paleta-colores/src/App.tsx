import { useEffect, useState } from 'react';
import { copyToClipboard, randomColorHexa } from './utils/functions';
import './App.css'
import CopyColor from './components/CopyColors';
import Footer from './components/Footer';
import Colores from './components/Colores';

function App() {
  const [colors, setColors] = useState<string[]>([]);
  const [change, setChange] = useState<boolean>(false);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const coloresRandom = randomColorHexa();
    setColors(coloresRandom);
  }, [change]);


  return (
    <>
      <main className='fondo-paleta relative font-InriaSans'>
        <CopyColor copy={copy} />
        <section className='flex flex-col mx-auto max-w-3xl min-h-screen'>
          <div className='flex-1'>
            <h1 className="text-4xl font-bold text-center my-10 text-blue-800">Paleta de Colores</h1>
            <Colores colors={colors} copyToClipboard={(color: string) => copyToClipboard({ color, setCopy })} />
            <div className='mx-4 sm:grid sm:place-items-center'>
              <button
                onClick={() => setChange(!change)}
                className="w-full sm:px-24 mt-8 py-3 text-lg sm:text-3xl text-slate-200 rounded-md bg-blue-600 hover:bg-blue-600/90">
                Generar Paleta
              </button>
            </div>
          </div>
          <Footer clases="text-[14px] sm:text-lg text-center py-3 text-stone-600" />
        </section>
      </main>
    </>
  )
}

export default App
