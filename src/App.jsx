import { useState } from 'react'

//import components
import Header from './Components/Header'
import AddBookmark from './Components/AddBookmark'

function App() {
  const [links, setLinks] = useState([])

  return (
    <div className="App">
      <Header />
      <AddBookmark />
    </div>
  )
}

export default App
