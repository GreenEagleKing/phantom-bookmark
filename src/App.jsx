import { useState } from 'react'

//import components
import Header from './Components/Header'

function App() {
  const [links, setLinks] = useState([])

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
