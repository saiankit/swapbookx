import React from 'react'

import DeleteButtonModal from '../modal'

const BookCardLender = ({ title, author, imgSrc, bookID }) => {
  return (
    <div className="flex justify-center items-center w-full py-2">
      <DeleteButtonModal bookID={bookID} />
    </div>
  )
}

export default BookCardLender
