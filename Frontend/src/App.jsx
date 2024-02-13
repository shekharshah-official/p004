import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((Response) => {
      setJokes(Response.data)
    })
  })

  return (
    <>
    <h1>p004 test frontend</h1>
    <p>JOKES:{jokes.length}</p>
    {
      jokes.map((jokes,index) => (
        <div key={jokes.id}>
          <h3>{jokes.tittle}</h3>
          <p>{jokes.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App;
