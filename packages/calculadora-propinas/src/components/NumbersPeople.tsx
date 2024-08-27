import iconPerson from '../assets/icon/icon-person.svg';
import { propNumberPeople } from "../interfaces/interfaces"


function NumberPeople({ statusPeople, people, handleChange }: propNumberPeople) {
  return (
    <div className="mt-4">
      <label htmlFor="people" className={`text-xl font-semibold text-cyan-100 block`}>Number of People</label>
      {statusPeople &&
        <p className="text-right font-semibold text-gray-800">Can't the Zero</p>
      }
      <div className={` rounded-md bg-slate-200/50 mt-2 p-3 justify-between flex`}>
        <img src={iconPerson}
          className="w-4 h-4 m-auto"
        />
        <input type="number" id="people" name="people" placeholder="0"
          className={`border-none placeholder:text-slate-700 w-full text-3xl font-semibold outline-none text-slate-700 text-right bg-transparent`}
          value={people}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default NumberPeople