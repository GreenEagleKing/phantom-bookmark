import React from 'react'

//import component
import AddBookmark from './AddBookmark'

export default function Header({ addLink }) {
  return (
    <div className='header-container'>
            <h1>Bookmark Library</h1>
            <AddBookmark addLink={addLink}/>
    </div>
  )
}
