import { Button, Stack, Typography } from "@mui/material";
import { useStore } from "../zustand/store";
import { useState } from "react";
import { changeBorder, changeColor } from "../utils/changeColors";


export default function Results() {
  const { num, num2, operator, generateNewNumbers, setIsCorrect, isCorrect } = useStore();
  const [order, setOrder] = useState<number>(0);

  const base = operator === "sumar" 
    ? num + num2 
    : num - num2;

  const correct = base;
  const incorrect = base + (operator === "sumar" ? 1 : - 1);

  const handleResults = (isCorrect: number) => {
    setOrder(Math.round(Math.random())) // numero aleatorio 0 - 1
    generateNewNumbers()
    setTimeout(()=> {
      setIsCorrect(2)
    }, 500)
    setIsCorrect(isCorrect)
  }
  


  return (
    <>
      <Typography variant="h6" component='p' className={`my-4 font-light ${changeColor(isCorrect)}`}>
        resultados
      </Typography>
      <Stack direction={`column${order ? "-reverse" : ""}`} spacing={2}>
        <Button
          onClick={()=>handleResults(1)}
          type="button"
          variant="outlined"
          className={`hover:bg-transparent flex-grow text-3xl font-light border ${changeColor(isCorrect)} ${changeBorder(isCorrect)}`}
          disableRipple
        >
          {correct}
        </Button>
        <Button
          onClick={()=>handleResults(0)}
          type="button"
          variant="outlined"
          className={`hover:bg-transparent flex-grow text-3xl font-light border ${changeColor(isCorrect)} ${changeBorder(isCorrect)}`}
          disableRipple
        >
          {incorrect}
        </Button>
      </Stack>
    </>
  )
}
