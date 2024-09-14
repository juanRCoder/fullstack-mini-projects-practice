import { TextField, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    color: '#FFFFFF', // Color del input
  },
  '& .MuiInputLabel-root': {
    color: '#FFFFFF', // Color del label
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#FFFFFF', // Color del label cuando está enfocado
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid',
      borderColor: '#FFFFFF', // Color del borde
      backgroundColor: '#FFFFFF33',
      borderRadius: '5px 0px 0px 5px',
    },
    '&:hover fieldset': {
      border: '1px solid',
      borderColor: '#FFFFFF', // Color del borde al pasar el mouse
    },
    '&.Mui-focused fieldset': {
      border: '1px solid',
      borderColor: '#FFFFFF', // Color del borde cuando está enfocado
    },
  },
  '& input[type="search"]::-webkit-search-cancel-button': {
    cursor: 'pointer',
    padding: '3px',
  }
});

export interface propSearchInput {
  onChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ onChange, onKeyDown }: propSearchInput) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Stack className='sm:w-[31rem] w-full'>
      <StyledTextField
        label={'Buscar por ciudad/provincia'}
        variant="outlined"
        placeholder='ejm: Lima, PE(opcional)'
        InputProps={{
          type: 'search'
        }}
        onKeyDown={onKeyDown}
        onChange={handleChange}
      />
    </Stack>
  );
}
