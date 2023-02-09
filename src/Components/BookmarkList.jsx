import React from 'react'

// import component
import Bookmark from './Bookmark'

export default function BookmarkList({ links, deleteLink, deleteAll, enterEditMode, editedLink, updateLink }) {

  return (
    <>
        <div className='bookmark-container'>
            {/* If list of links is 0 or less then show no bookmarks */}
            {links.length <= 0 ? 
                <p>No Bookmarks Added</p> :
            // else show links
            <div className='list-container'>
                <button
                    className='btn delete-all'
                    aria-label='Delete All Bookmarks'
                    onClick={() => deleteAll()}
                    >Delete All
                </button>
                <ul className='linkList'>
                    {/* Links sorted from newest to oldest */}
                    {links.sort((a,b) => b.id - a.id)
                    // each link is populated using the bookmarkLink component
                        .map(link => (
                            <Bookmark
                                key={link.id}
                                link={link}
                                deleteLink={deleteLink}
                                enterEditMode={enterEditMode}
                                editedLink={editedLink}
                                updateLink={updateLink}
                            />
                    ))}
                </ul>
            </div>
            }
        </div>
    </>
  )
}
