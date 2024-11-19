import { Container, Box } from '@mui/material'
import './App.css'
import Header from './components/Header'
import Operators from './components/Operators'
import Operation from './components/Operation'
import Results from './components/Results'
import Footer from './components/Footer'

function App() {
  return (
    <Container className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Box>
        <Operators />
        <Operation />
        <Results />
      </Box>
      <Footer />
    </Container>
  )
}

export default App
