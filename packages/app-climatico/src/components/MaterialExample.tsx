// COMPONENTE PRUEBA DE MATERIAL UI

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  backgroundColor: '#a7f3d0',
  color: '#333',
  border: 'none',
  outline: '1px solid white',
  '&:hover': {
    backgroundColor: '#6ee7b7',
    border: 'none',
    outline: '1px solid white',
  }
});

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" className="p-4">
      <StyledButton variant="outlined" className="text-emerald-300">
        Outlined
      </StyledButton>
    </Stack>
  );
}
