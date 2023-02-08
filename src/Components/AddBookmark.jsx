import React from 'react'
import { useState } from 'react'

export default function AddBookmark({ addLink }) {

    const [linkTitle, setLinkTitle] = useState('')
    const [linkUrl, setLinkUrl] = useState('')

    function handleFormSubmit(e) {
        e.preventDefault()
        addLink({
            title: linkTitle,
            url: linkUrl,
            id: Date.now(),
            icon: '#'
          })
    }

  return (
    <div>
         <div className='addBookmark-container'>
            <form onSubmit={handleFormSubmit}>
                <div className='form'>
                    <input type='text' className='input'  value={linkTitle} placeholder='Name' onChange={e => setLinkTitle(e.target.value)} ></input>
                    <input type='text' className='url'  value={linkUrl} placeholder='URL' onChange={e => setLinkUrl(e.target.value)} ></input>
                    <button className='btn' aria-label='Add Bookmark' type='submit'
                    >Add Bookmark</button>
                </div>      
            </form>
        </div>
    </div>
  )
}
