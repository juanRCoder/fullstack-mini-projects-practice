import { randomColors } from "../interfaces/interfaces"

function Colores({ colors, copyToClipboard }: randomColors) {
  return (
    <>
      <section className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-4 mt-4 mx-4'>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: `${color}` }}
            onClick={() => copyToClipboard(color)}
            className={`hover:outline hover:outline-1 hover:outline-slate-700 hover:font-semibold py-4 text-lg rounded-lg text-center text-slate-50 cursor-pointer ${index === colors.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
            {color}
          </div>
        ))}
      </section>
      <section className='grid grid-cols-2 gap-4 mt-4 mx-4 sm:mt-8'>
        <div
          style={{ backgroundColor: '#ffffffe6', color: '#000000' }}
          onClick={() => copyToClipboard('#FFFFFF')}
          className='default-color'>
          #FFFFFF
        </div>
        <div
          style={{ backgroundColor: '#000000e6', color: '#ffffff' }}
          onClick={() => copyToClipboard('#000000')}
          className='default-color'>
          #000000
        </div>
      </section>
    </>
  )
}

export default Colores