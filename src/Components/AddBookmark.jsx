import React from 'react'

export default function AddBookmark() {
  return (
    <div>
         <div className='addBookmark-container'>
            <form>
                <div className='form border-gradient purple'>
                    <input type='text' className='input' placeholder='Name'></input>
                    <input type='text' className='url' placeholder='URL'></input>
                    <button className='btn' aria-label='Add Bookmark' type='submit'
                    >Add Bookmark</button>
                </div>      
            </form>
        </div>
    </div>
  )
}
