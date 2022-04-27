import React from 'react'

const BookCardBorrower = ({ title, author, imgSrc }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-md tracking-tight text-gray-600 font-bold ">
        VIEW DETAILS
      </h1>
      <span className="px-4 py-2 rounded-full text-gray-800 bg-yellow-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
        Fantasy
      </span>
    </div>
  )
}

export default BookCardBorrower
