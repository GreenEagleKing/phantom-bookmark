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
  // function addLink(link) {
  //   setLinks(prevState => [...prevState, {
  //     id: link.id,
  //     title: link.title,
  //     url: link.url,
  //     icon: link.icon
  //   }])
  //   console.log(link)
  // }

  window.onload = function() {
    window.open('https://cors-anywhere.herokuapp.com/corsdemo','','width=400,height=250')
  }

  function addLink(link) {
    const url = link.url
    const corsUrl = `https://cors-anywhere.herokuapp.com/${url}`

    if (url.slice(0,7) === 'http://' || url.slice(0,8) === 'https://') {
      console.log('Valid')

      fetch(corsUrl)
        .then(res => {
          if (res.ok) {
            setLinks(prevState => [...prevState, {
              id: link.id,
              title: link.title,
              url: link.url,
              icon: link.icon
            }])
            console.log(link)
            return res.json();
          }
          alert("URL does not exist. Please check URL is correct or check popup cors policy is accepted")
      })
      .catch(error => {
        console.log(error)
        // const syntaxError = error.toString().slice(0,12)
        // syntaxError === 'SyntaxError:' ? console.log('Cors syntax error') : alert("URL does not exist. Please check URL is correct")
      })

    } else {
      alert("URL does not exist. Please check URL is correct or check popup cors policy is accepted")
    }
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
