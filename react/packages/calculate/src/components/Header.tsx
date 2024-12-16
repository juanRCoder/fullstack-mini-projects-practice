import { Box, Typography } from "@mui/material";
import { useStore } from "../zustand/store";
import { changeColor } from "../utils/changeColors";


export default function Header() {
  const { isCorrect } = useStore();

  return (
    <Box component="header">
      <Typography
        variant="h4"
        component="h1"
        align="center"
        className={`font-semibold pt-5 ${changeColor(isCorrect)}`}
      >
        CALCULATE
      </Typography>
      <Typography
        align="center"
        className={`p-0 font-light mt-2 ${changeColor(isCorrect)}`}
      >
        Mejora tu agilidad mental y pensamiento logico matematico.
      </Typography>
    </Box>
  )
}
