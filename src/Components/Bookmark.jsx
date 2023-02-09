import React from 'react'

//import component
import UpdateBookmark from './UpdateBookmark'

//import icons from heroIcons
import { TrashIcon } from '@heroicons/react/24/solid'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

export default function Bookmark({ link, deleteLink, enterEditMode, editedLink, updateLink }) {
  return (
    <>
        <div>
            {/* if edited link id is the same as link id then show update bookmark component */}
            {editedLink === link.id ? 
            <UpdateBookmark link={link} updateLink={updateLink}/> :
            // if it is not the same show normal bookmark
            <div className='link-container grow load'>
                <div className='link-info-container '>
                {/* bookmark title wrapped in a link tag */}
                    <a 
                        href={link.url}
                        target='_blank'
                        className='link-title'
                        aria-label='Go to Bookmark'
                        >
                        {/* favicon img from website*/}
                        <img height="24" width="24" src={link.icon}  />
                        <div>{link.title}</div>
                    </a>
                </div>
                
                {/* edit and delete buttons */}
                <div className='edit-delete-container'>
                    <button 
                    className='btn link edit'
                    aria-label='Edit Bookmark'
                    onClick={() => enterEditMode(link) }>
                        <PencilSquareIcon width={24} height={24}/>
                    </button>
                    <button 
                    className='btn link trash'
                    aria-label='Delete Bookmark'
                    onClick={() => deleteLink(link.id) }>
                        <TrashIcon width={24} height={24}/>
                    </button>
                </div>
            </div>
            }   
        </div>
    </>
  )
}
