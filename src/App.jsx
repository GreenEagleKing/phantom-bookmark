import { useState } from 'react'

//import custom hook
import useLocalStorage from './assets/hooks/useLocalStorage'

//import components
import Header from './Components/Header'
import AddBookmark from './Components/AddBookmark'
import BookmarkList from './Components/BookmarkList'

function App() {
  const [links, setLinks] = useLocalStorage('bookmarks', [])
  const [editedLink, setEditedLink] = useState(null)

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

  // Deletes all links
  function deleteAll() {
    if (confirm("Do you really want to delete all bookmarks?")) {
      setLinks(prevState => prevState = []);
    }
  }

  // Update individual links
  function updateLink(link) {
    console.log(link)
    setLinks(prevState => prevState.map(linkItem => {
      return linkItem.id === link.id ? {...linkItem, title: link.title, url: link.url} : linkItem
    }) )
    setEditedLink(null)
  }

  // Passing in selected link to be edited and updated
  function enterEditMode(link) {
    setEditedLink(link.id)
  }
  
  return (
    <div className="App">
      <Header addLink={addLink}/>
      <BookmarkList 
        links={links}
        deleteLink={deleteLink}
        deleteAll={deleteAll}
        enterEditMode={enterEditMode}
        editedLink={editedLink}
        updateLink={updateLink}
      />
    </div>
  )
}

export default App
