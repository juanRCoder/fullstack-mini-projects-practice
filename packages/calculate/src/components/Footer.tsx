import { Typography } from '@mui/material'
import { changeColor } from '../utils/changeColors'
import { useStore } from '../zustand/store'

export default function Footer() {
  const { isCorrect } = useStore();

  return (
    <Typography component="footer" align='center' className={`py-4 ${changeColor(isCorrect)}`}>
      Realizado por JuanRCoder | 2024
    </Typography>
  )
}
