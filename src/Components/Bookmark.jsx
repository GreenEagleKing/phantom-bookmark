import React from 'react'

//import icons from heroIcons
import { TrashIcon } from '@heroicons/react/24/solid'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

export default function Bookmark({ link }) {
  return (
    <>
        <div className='link-container'>
            <div className='link-info-container'>
            {/* favicon img from website*/}
            <img height="24" width="24" src={link.icon}  />
            {/* bookmark title wrapped in a link tag */}
                <a href={link.url} target='_blank'>
                <div>{link.title}</div>
                </a>
            </div>
            
            {/* edit and delete buttons */}
            <div className='edit-delete-container'>
                <button 
                className='btn link edit'>
                    <PencilSquareIcon width={24} height={24}/>
                </button>
                <button 
                className='btn link trash'>
                    <TrashIcon width={24} height={24}/>
                </button>
            </div>
        </div>
    </>
  )
}
