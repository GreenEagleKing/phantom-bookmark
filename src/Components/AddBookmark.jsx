import React from 'react'
import { useState } from 'react'

export default function AddBookmark({ addLink }) {

    // State created to keep track of inputs
    const [linkTitle, setLinkTitle] = useState('')
    const [linkUrl, setLinkUrl] = useState('')

    // function runs when form is submitted
    function handleFormSubmit(e) {
        //prevents page reload
        e.preventDefault()
        // runs addLink function and passes in new data
        addLink({
            title: linkTitle,
            url: linkUrl,
            id: Date.now(),
            icon: `http://www.google.com/s2/favicons?domain=${linkUrl}`
          })
    }

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
          <div className='addBookmark-container'>
            <div className='form'>
                <input type='text' className='input'  value={linkTitle} placeholder='Name' onChange={e => setLinkTitle(e.target.value)} ></input>
                <input type='text' className='url'  value={linkUrl} placeholder='URL' onChange={e => setLinkUrl(e.target.value)} ></input>
                <button className='btn' aria-label='Add Bookmark' type='submit'
                >Add Bookmark</button>
            </div>    
            </div>  
        </form>
    </div>
  )
}
