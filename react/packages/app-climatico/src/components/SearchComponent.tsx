import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import { useState } from 'react';


function SearchComponent({ sendLocation }: { sendLocation: (location: string) => void }) {
  const [location, setLocation] = useState<string>('Lima');

  // Recolecto la palabra
  const searchCity = (city: string) => {
    setLocation(city)
  }
  // Envio la frase final al hook callWeather
  const sendCity = () => {
    sendLocation(location)
  };
  // Maneja el evento de presionar la tecla Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendCity();
    }
  };

  return (
    <div className='flex justify-center py-5'>
      <SearchInput onChange={searchCity} onKeyDown={handleKeyDown} />
      <SearchButton onClick={sendCity} />
    </div>
  )
}

export default SearchComponent