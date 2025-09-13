import React from 'react'
import { FaBookmark } from "react-icons/fa6";
import { RiNewsFill } from "react-icons/ri";


function SavedItems() {
  return (
    <div className='bg-white flex flex-col gap-2 rounded-xl text-sm border border-gray-300 p-4'>

        <div className='flex flex-row text-md items-center gap-3'>
            <span><FaBookmark /></span>
            <p>Saved Items</p>
        </div>

        <div className='flex flex-row text-md items-center gap-3'>
            <span><RiNewsFill /></span>
            <p>Newsletter</p>
        </div>

    </div>
  )
}

export default SavedItems
