import { useState } from 'react'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-hidden'>
       <Header/>
    </div>
  )
}

export default App
