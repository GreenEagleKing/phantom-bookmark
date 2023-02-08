import { useState } from 'react'

//import components
import Header from './Components/Header'
import AddBookmark from './Components/AddBookmark'
import BookmarkList from './Components/BookmarkList'

function App() {
  const [links, setLinks] = useState([])

  function addLink(link) {
    setLinks(prevState => [...prevState, {
      id: link.id,
      title: link.title,
      url: link.url,
      icon: link.icon
    }])
    console.log(link)
  }

  return (
    <div className="App">
      <Header />
      <AddBookmark addLink={addLink} />
      <BookmarkList links={links} />
    </div>
  )
}

export default App
