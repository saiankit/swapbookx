import React from 'react'
import { Link } from 'react-router-dom'

import BookCardBorrower from './bookCard.borrower'
import BookCardLender from './bookCard.lender'

const BookCard = ({ title, author, imageSrc, isLender, bookID }) => {
  return (
    <Link to={isLender ? '/lender' : '/borrower/book/' + bookID}>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-xl h-96 p-4 max-w-md">
        <div className="max-w-md">
          <img
            alt="Book Image"
            className="rounded-lg shadow-xl object-contain h-60"
            src={imageSrc}
          />
        </div>
        <div className="flex flex-col items-start w-full pt-4 max-w-md">
          <h5 className="truncate w-full text-ellipsis max-w-md text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
          <h5 className="text-md tracking-tight text-gray-900 ">{author}</h5>
          {isLender ? <BookCardLender bookID = {bookID}/> : <BookCardBorrower />}
        </div>
      </div>
    </Link>
  )
}

export default BookCard
