import { propSelectTip } from "../interfaces/interfaces"


function SelectTip({ Calculator, custom, handleChange }: propSelectTip) {
  return (
    <div className="mt-4">
      <label htmlFor="custom" className={`text-xl font-semibold text-cyan-100 block`}>Select Tip %</label>
      <div className="mt-2 gap-4 grid grid-cols-2">
        {[
          [5],
          [10],
          [15],
          [25],
          [50],
        ].map(([number], i) => (
          <button key={i} className="transition font-bold hover:text-cyan-100 hover:bg-sky-700 text-xl rounded-md bg-sky-900 py-2"
            onClick={() => Calculator(number)}
          >
            {number}%
          </button>
        ))}
        <input type="number" name="custom" placeholder="Custom"
          className={`border-none text-slate-700 rounded-md focus:outline focus:outline-sky-700 text-xl font-bold bg-slate-200/50 text-right pr-2 placeholder:text-slate-700`}
          value={custom}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SelectTip