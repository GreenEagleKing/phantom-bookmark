import { useState } from 'react'

//import components
import Header from './Components/Header'
import AddBookmark from './Components/AddBookmark'

function App() {
  const [links, setLinks] = useState([])

  function addLink(link) {
    console.log(link)
  }

  return (
    <div className="App">
      <Header />
      <AddBookmark addLink={addLink}/>
    </div>
  )
}

export default App
