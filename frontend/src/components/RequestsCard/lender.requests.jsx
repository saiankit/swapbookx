import React from 'react'

const RequestsCardLender = ({ requestID }) => {
  return (
    <div className="mx-auto flex justify-between items-center w-full py-2">
      <span className="px-4 py-1.5 rounded-full text-gray-800 bg-green-200 font-semibold text-sm flex align-center w-max cursor-pointer hover:scale-110 duration-150 ease-in-out  active:bg-gray-300 transition duration-300 ease">
        APPROVE
      </span>
      <span className="px-4 py-1.5 rounded-full text-gray-800 bg-red-200 font-semibold text-sm flex align-center w-max cursor-pointer hover:scale-110 duration-150 ease-in-out  active:bg-gray-300 transition duration-300 ease">
        DECLINE
      </span>
    </div>
  )
}

export default RequestsCardLender
