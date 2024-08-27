import Bill from './components/Bill'
import NumberPeople from './components/NumbersPeople'
import Results from './components/Results'
import SelectTip from './components/SelectTip'
import './App.css'
import { useState } from 'react'
import { resetInputs } from './utils/functions'
import Footer from './components/Footer'

function App() {
  const [bill, setBill] = useState<string>('');
  const [people, setPeople] = useState<string>('');
  const [custom, setCustom] = useState<string>('');
  const [statusPeople, setStatusPeople] = useState<boolean>(false);
  const [totalForPerson, setTotalForPerson] = useState<number>(0);
  const [tipAmountForPerson, setTipAmountForPerson] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'bill') {
      setBill(value);
    } else if (name === 'people') {
      if (value === '') setPeople('0');
      else setPeople(value);

    } else if (name === 'custom') {
      if (value === '') Calculator(0); 
      else Calculator(parseInt(value));
      setCustom(value);
    }
  }

  // Calculo de la propinas y por persona
  const Calculator = (tip: number) => {
    if (people !== '0' && people !== '') {
      setStatusPeople(false);
      const tipTotal: number = parseInt(bill) * ((tip) / 100);

      setTotalForPerson(Number(((parseInt(bill) + tipTotal) / parseInt(people)).toFixed(2)));
      setTipAmountForPerson(Number((tipTotal / parseInt(people)).toFixed(2)));
    } else {
      setStatusPeople(true);
    }
  }

  return (
    <>
      <main className="relative bg-sky-700 font-spaceMono">
        <section className="max-w-3xl mx-auto min-h-screen flex flex-col">
          <h1 className="h1 text-cyan-100 tracking-wider font-semibold mt-3 md:my-5 m-auto mb-5 break-words font-spaceMono text-3xl w-20">
            SPLITTER
          </h1>
          <section className="flex-1">
            <div className="flex-col sm:flex-row md:rounded-2xl gap-5 flex font-spaceMono bg-white/25 p-4">
              <section className="sm:w-6/12">
                <Bill bill={bill} handleChange={handleChange} />
                <SelectTip Calculator={Calculator} custom={custom} handleChange={handleChange} />
                <NumberPeople statusPeople={statusPeople} people={people} handleChange={handleChange} />
              </section>
              <Results tipAmountForPerson={tipAmountForPerson} totalForPerson={totalForPerson}
                resetInputs={() => resetInputs({ setBill, setPeople, setCustom, setStatusPeople, setTotalForPerson, setTipAmountForPerson })}
              />
            </div>
          </section>
          <Footer clases="text-[14px] md:text-base text-center text-white my-5" />
        </section>
      </main>
    </>
  )
}

export default App
