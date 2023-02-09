import React from 'react'
import { useState } from 'react'

export default function UpdateBookmark({ link, updateLink }) {

    // local state to pass in updated title and url
    const [updatedTitle, setUpdatedTitle] = useState(link.title)
    const [updatedUrl, setUpdatedUrl] = useState(link.url)

    // When form is submitted run updateLink function and pass in updated data
    const handleFormSubmit = (e) => {
        e.preventDefault()
        updateLink({...link, title: updatedTitle, url: updatedUrl})
    }

  return (
    <>
    <div className='link-container edit-container'>
      <form onSubmit={handleFormSubmit}>
          <div className='link-info-container'>
          <input type='text' className='input' value={updatedTitle} onChange={e => setUpdatedTitle(e.target.value)} name='title' placeholder='Name'></input>

          <input type='text' className='url'  value={updatedUrl} onChange={e => setUpdatedUrl(e.target.value)} name='url' placeholder='URL'></input>
          <button className='btn' aria-label='Update Bookmark' type='submit'
                  >Update</button>
          </div>
      </form>
    </div>
  </>
  )
}
