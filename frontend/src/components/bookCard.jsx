import React from 'react'

const BookCard = ({ title, author, imgSrc }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-xl h-100 p-4 max-w-md hover:scale-105 duration-150 ease-in-out">
      <div className="max-w-md">
        <img
          alt="Book Image"
          className="rounded-lg shadow-xl object-contain h-60 hover:scale-105 duration-150 ease-in-out"
          src={imgSrc}
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 max-w-md">
        <h5 className="truncate w-full text-ellipsis max-w-md text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <h5 className="text-md tracking-tight text-gray-900 ">{author}</h5>

        <div className="flex justify-between items-center w-full">
          <h1 className="text-md tracking-tight text-gray-600 font-bold ">
            VIEW DETAILS
          </h1>
          <span className="px-4 py-2 rounded-full text-gray-800 bg-yellow-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            Fantasy
          </span>
        </div>
      </div>
    </div>
  )
}

export default BookCard
