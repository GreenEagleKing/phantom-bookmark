import { useState } from 'react'

//import components
import Header from './Components/Header'
import AddBookmark from './Components/AddBookmark'
import BookmarkList from './Components/BookmarkList'

function App() {
  const [links, setLinks] = useState([])

  // Add new link to link state array
  function addLink(link) {
    setLinks(prevState => [...prevState, {
      id: link.id,
      title: link.title,
      url: link.url,
      icon: link.icon
    }])
    console.log(link)
  }

  // Delete individual link
  function deleteLink(id) {
    setLinks(prevState => prevState.filter(link => id !== link.id))
  }

  function deleteAll() {
    setLinks(prevState => prevState = [])
  }
  
  return (
    <div className="App">
      <Header />
      <AddBookmark addLink={addLink} />
      <BookmarkList links={links} deleteLink={deleteLink} deleteAll={deleteAll}/>
    </div>
  )
}

export default App
