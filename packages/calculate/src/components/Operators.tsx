import { Button, Stack, Typography } from "@mui/material";
import { operators } from "../data/Operators";
import { useStore } from "../zustand/store";

export default function Operators() {
  const { handleOperator, generateNewNumbers } = useStore();

  const newOperation = (op: string) => {
    handleOperator(op) //ESCOGER OPERADOR
    generateNewNumbers() // CAMBIAR OPERACION
  }

  return (
    <>
      <Typography variant="h6" component='p' className="my-4 font-light">
        operadores
      </Typography>
      <Stack direction="row" spacing={2}>
        {operators.map(operator => (
          <Button
            key={operator.label}
            type="button"
            variant="outlined"
            onClick={()=>newOperation(operator.label)}
            className={`${operator.bg} border ${operator.border} flex-grow`}
            TouchRippleProps={{
              style: {
                color: operator.color,
              },
            }}
          >
            <operator.icon className="text-white" size={30} strokeWidth={3}/>
          </Button>
        ))}
      </Stack>
    </>
  )
}
