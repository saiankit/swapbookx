import React from 'react'

import DeleteButtonModal from '../modal'

const BookCardLender = ({ title, author, imgSrc, bookID }) => {
  return (
    <div className="flex justify-between items-center w-full py-2">
      <span className="px-4 py-1.5 rounded-full text-gray-800 bg-blue-200 font-semibold text-sm flex align-center w-max cursor-pointer hover:scale-110 duration-150 ease-in-out  active:bg-gray-300 transition duration-300 ease">
        EDIT
      </span>
      <DeleteButtonModal bookID={bookID} />
    </div>
  )
}

export default BookCardLender
