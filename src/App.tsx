// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Card />
      <Card title="Bonjour" content="Bienvenue à notre cours de MERN Stack" />
      <Footer />
    </>
  )
}

export default App
