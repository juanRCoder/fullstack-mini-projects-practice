import { Button, Stack, Typography } from "@mui/material";
import { useStore } from "../zustand/store";
import { useEffect, useState } from "react";


export default function Results() {
  const { num, num2, operator, generateNewNumbers } = useStore();
  const [correct, setCorret] = useState<number>(num+num2);
  const [incorrect, setIncorrect] = useState<number>(num+num2+1);

  // renderiza cada vez que cambia los numeros
  useEffect(()=> {
    switch(operator) {
      case "sumar":
        setIncorrect(num+num2+1)
        setCorret(num+num2) 
        break
      default:
        setIncorrect(num-num2-1)
        setCorret(num-num2)
    }
  },[operator, num, num2])


  return (
    <>
      <Typography variant="h6" component='p' className="my-4 font-light">
        resultados
      </Typography>
      <Stack direction="column" spacing={2}>
        <Button
          onClick={generateNewNumbers}
          type="button"
          variant="outlined"
          className="hover:bg-transparent flex-grow text-3xl text-white font-light border border-white"
          TouchRippleProps={{
            style: {
              color: "#fffff",
            },
          }}
        >
          {correct}
        </Button>
        <Button
          onClick={generateNewNumbers}
          type="button"
          variant="outlined"
          className="hover:bg-transparent flex-grow text-3xl text-white font-light border border-white"
          TouchRippleProps={{
            style: {
              color: "#fffff",
            },
          }}
        >
          {incorrect}
        </Button>
      </Stack>
    </>
  )
}
