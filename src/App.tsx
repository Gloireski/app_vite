// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import Task from './components/Task'

function App() {
  // const [count, setCount] = useState(0)
  // const users = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     email: ''
  //   },
  //   {
  //     id: 2,
  //     name: 'Gloire Belem',
  //     email: 'belem.b19@yahoo.com'
  //   }
  // ]
  type Task = {
    id: number;
    title: string;
    isDone: string;
  }
  const tasks: Task[] = [ 
    { id: 1, title: 'Faire la vaisselle', isDone: 'false' }, 
    { id: 2, title: 'Promener le chien', isDone: 'true' }, 
    { id: 3, title: 'Faire les courses', isDone: 'false' }, 
  
  ]

  return (
    <>
    {
      tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))
    }
      {/* <Header />
      { users.map((user) => (
        <Card key={user.id} {...user} /> 
      )) 
      }
      <Footer /> */}
    </>
  )
}

export default App
