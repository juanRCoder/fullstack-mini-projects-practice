import iconDollar from '../assets/icon/icon-dollar.svg';
import { propsBill } from '../interfaces/interfaces';


function Bill({ bill, handleChange }: propsBill) {
  return (
    <div>
      <label htmlFor="bill" className={` text-xl font-semibold text-cyan-100 block`}>Bill</label>
      <div className={` rounded-md bg-slate-200/50 mt-2 p-3 justify-between flex`}>
        <img src={iconDollar}
          className="w-3 h-6 m-auto"
        />
        <input type="number" id="bill" name="bill" placeholder="0"
          className={`border-none placeholder:text-slate-700 w-full text-3xl font-semibold outline-none text-slate-700 text-right bg-transparent`}
          value={bill}
          onChange={handleChange}
        />
      </div>
    </div>

  )
}

export default Bill