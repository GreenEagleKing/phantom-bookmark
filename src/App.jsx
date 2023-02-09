import { useState } from 'react'

//import custom hook
import useLocalStorage from './assets/hooks/useLocalStorage'

//import components
import Header from './Components/Header'
import AddBookmark from './Components/AddBookmark'
import BookmarkList from './Components/BookmarkList'

function App() {
  // setting links to use the local storage custom hook to store the data
  const [links, setLinks] = useLocalStorage('bookmarks', [])
  //holds the value of the current item being edited
  const [editedLink, setEditedLink] = useState(null)

  // Due to cors policy error the URL validation is being run through a proxy server - this must be accepted
  window.onload = function() {
    window.open('https://cors-anywhere.herokuapp.com/corsdemo','','width=400,height=250')
  }

  // Adding new link to list, including validation
  function addLink(link) {

    const url = link.url
    //setting the url variable to use cors workaround
    const corsUrl = `https://cors-anywhere.herokuapp.com/${url}`

    // Checking the URL starts with http/https
    if (url.slice(0,7) === 'http://' || url.slice(0,8) === 'https://') {
      console.log('Valid')

      // Fetch api checks the URL exists
      fetch(corsUrl)
        .then(res => {
          if (res.ok) {
            // Checks if URL already exists in bookmark array
            if(links.some(link => link.url === url)) {
              console.log(link)
              alert("URL already exists in your bookmarks")
              return
            }
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
