import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import { useState } from 'react';


function SearchComponent({ sendLocation }: { sendLocation: (location: string) => void }) {
  const [location, setLocation] = useState<string>('lima');

  // Recolecto la palabra
  const searchCity = (city: string) => {
    setLocation(city)
  }
  // Envio la frase final al hook callWeather
  const sendCity = () => {
    sendLocation(location)
  };

  return (
    <div className='flex justify-center py-5'>
      <SearchInput onChange={searchCity} />
      <SearchButton onClick={sendCity} />
    </div>
  )
}

export default SearchComponent