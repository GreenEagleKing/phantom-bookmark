import React from 'react'

//import icons from heroIcons
import { TrashIcon } from '@heroicons/react/24/solid'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

export default function Bookmark({ link }) {
  return (
    <>
        <div className='link-container grow'>
            <div className='link-info-container '>
            {/* bookmark title wrapped in a link tag */}
                <a href={link.url} target='_blank' className='link-title'>
                    {/* favicon img from website*/}
                    <img height="24" width="24" src={link.icon}  />
                    <div >{link.title}</div>
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
