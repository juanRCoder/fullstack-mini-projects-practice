import { Box, Typography } from "@mui/material";


export default function Header() {
  return (
    <Box component="header">
      <Typography 
        variant="h4"
        component="h1"
        align="center"
        className="font-semibold pt-5"
      >
        CALCULATE
      </Typography>
      <Typography
        align="center"
        className="p-0 font-light mt-2"
      >
        Mejora tu agilidad mental y pensamiento logico matematico.
      </Typography>
    </Box>
  )
}
