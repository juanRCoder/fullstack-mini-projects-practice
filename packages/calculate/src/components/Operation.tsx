import { Stack, Typography } from "@mui/material";
import { Minus, Plus } from "lucide-react";
import { formatNumber } from "../utils/formatNumbers";
import { useStore } from "../zustand/store";
import { changeColor, changeBorder } from "../utils/changeColors";


export default function Operation() {
  const { num, num2, operator, isCorrect } = useStore();

  const defineOperator = () => {
    switch(operator) {
      case "sumar":
        return <Plus size={40} />
      case "restar":
        return <Minus size={40} />
    }
  }
  return (
    <>
      <Typography variant="h6" component="p" className={`my-4 font-light ${changeColor(isCorrect)}`}>
        operacion
      </Typography>
      <Stack direction="row" component="section" 
        className={`border border-1 rounded-md h-28 flex gap-5 justify-center items-center ${changeBorder(isCorrect)}`}>
        <Typography className={`text-6xl ${changeColor(isCorrect)}`}>
          {formatNumber(num)}
        </Typography>
        <Typography className={`text-7xl ${changeColor(isCorrect)}`}>
          {defineOperator()}
        </Typography>
        <Typography 
          className={`text-6xl ${changeColor(isCorrect)}`}
        >
          {formatNumber(num2)}
        </Typography>
      </Stack>
    </>
  )
}
