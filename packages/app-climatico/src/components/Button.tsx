import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IoSearchOutline } from "react-icons/io5";



const StyledButton = styled(Button)({
  backgroundColor: '#2193B0',
  color: '#FFFFFF',
  border: '1px solid #FFFFFF',
  borderRadius: '0px 5px 5px 0px',
  borderLeft: 'none',
  padding: '0px',
  '&:hover': {
    border: '1px solid #FFFFFF',
    borderRadius: '0px 5px 5px 0px',
    borderLeft: 'none',
  },
});

export default function SearchButton({ onClick }: {onClick: ()=> void}) {
  return (
    <Stack spacing={2} direction="row">
      <StyledButton variant="outlined" onClick={onClick}>
        <IoSearchOutline className='scale-150 h-8 w-5'/>
      </StyledButton>
    </Stack>
  );
}
