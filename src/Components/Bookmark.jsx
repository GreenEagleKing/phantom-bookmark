import React from 'react'

export default function Bookmark({ link }) {
  return (
    <>
        <div className='link-container'>
            <div className='link-info-container'>
            {/* will contain favicon img */}
            <img />
            {/* bookmark title wrapped in a link tag */}
                <a href={link.url} target='_blank'>
                <div>{link.title}</div>
                </a>
            </div>
            
            {/* edit and delete buttons */}
            <div className='edit-delete-container'>
                <button 
                className='btn link edit'>
                    Edit
                </button>
                <button 
                className='btn link trash'>
                    trash
                </button>
            </div>
        </div>
    </>
  )
}
