import React from 'react'

//import component
import AddBookmark from './AddBookmark'

export default function Header({ addLink }) {
  return (
    <div className='header-container'>
            <h1>Bookmark Library</h1>
            {/* Add new bookmark component */}
            <AddBookmark addLink={addLink}/>
    </div>
  )
}
