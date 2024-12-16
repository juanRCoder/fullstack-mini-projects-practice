import { Button, Stack, Typography } from "@mui/material";
import { operators } from "../data/Operators";
import { useStore } from "../zustand/store";
import { changeBorder, changeColor } from "../utils/changeColors";

export default function Operators() {
  const { handleOperator, generateNewNumbers, isCorrect } = useStore();

  const newOperation = (op: string) => {
    handleOperator(op) //ESCOGER OPERADOR
    generateNewNumbers() // CAMBIAR OPERACION
  }

  const customBackground = ( bgCustom: string) => {
    return isCorrect == 1 ? "bg-green-500/[4%]" : ( isCorrect === 0 ? "bg-red-500/[4%]" : bgCustom )
  }

  return (
    <>
      <Typography variant="h6" component='p' className={`my-4 font-light ${changeColor(isCorrect)}`}>
        operadores
      </Typography>
      <Stack direction="row" spacing={2}>
        {operators.map(operator => (
          <Button
            key={operator.label}
            type="button"
            variant="outlined"
            onClick={()=>newOperation(operator.label)}
            className={`${customBackground(operator.bg)} border ${changeBorder(isCorrect, operator.border)} flex-grow `}
            TouchRippleProps={{
              style: {
                color: operator.color,
              },
            }}
          >
            <operator.icon size={30} strokeWidth={3} className={`${changeColor(isCorrect)}`}/>
          </Button>
        ))}
      </Stack>
    </>
  )
}
