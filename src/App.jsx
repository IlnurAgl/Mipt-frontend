import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bar from './Bar'
import Films from './Films/Films'

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Bar page={page}/>
      <Films page={page}/>
    </div>
  )
}

export default App
