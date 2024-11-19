import { Stack, Typography } from "@mui/material";
import { Minus, Plus } from "lucide-react";
import { formatNumber } from "../utils/formatNumbers";
import { useStore } from "../zustand/store";


export default function Operation() {
  const { num, num2, operator } = useStore();

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
      <Typography variant="h6" component="p" className="my-4 font-light">
        operacion
      </Typography>
      <Stack direction="row" component="section" 
        className="outline outline-1 rounded-sm h-28 flex gap-5 justify-center items-center">
        <Typography className="text-6xl">{formatNumber(num)}</Typography>
        <Typography className="text-7xl">
          {defineOperator()}
        </Typography>
        <Typography className="text-6xl">{formatNumber(num2)}</Typography>
      </Stack>
    </>
  )
}
