// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: ''
    },
    {
      id: 2,
      name: 'Gloire Belem',
      email: 'belem.b19@yahoo.com'
    }
  ]
  return (
    <>
      <Header />
      { users.map((user) => (
        <Card key={user.id} {...user} /> 
      )) 
      }
      {/* <Card id={783} name="Gloire Bekoutou Belem" /> */}
      <Footer />
    </>
  )
}

export default App
