import { FaReact } from 'react-icons/fa'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <main className='bg-[#111] font-inter'>
        <section className='sm:max-w-7xl mx-auto flex flex-col py-4 min-h-screen'>
          <div className='flex-1'>
            <header className='py-5 flex flex-col sm:flex-row justify-center items-center gap-5'>
              <FaReact className='text-sky-300 w-24 h-24 shadow-react' />
              <h1 className='text-4xl text-[#ddd] font-bold text-center'>
                Proyectos React
              </h1>
            </header>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 mx-4 text-center gap-4'>
              {[
                ['Paleta Colores', 'https://paleta-colores.vercel.app/',],
                ['Calculadora Propinas', 'https://calculadora-propinas-02.vercel.app/']
              ].map(([text, path,], i) => (
                <a key={i} href={path} target='_blank' className={`bg-[#222] hover:bg-[#333] transition cursor-pointer rounded-md py-2 no-underline`}>
                  <p className='text-center text-lg text-white'>{text}</p>
                </a>
              ))}
            </div>
          </div>
          <Footer clases="md:text-base text-center text-white mb-3" />
        </section>
      </main>
    </>
  )
}

export default App
