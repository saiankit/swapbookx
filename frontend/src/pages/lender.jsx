import React from 'react'

import { Link } from 'react-router-dom'

import { AddIcon } from '../assets/icons/index'
function LenderDashboard() {
  return (
    <>
      <div className="flex flex-col mx-auto py-12 px-12">
        <Link to="/lender/addBook">
          <button
            className=" px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center space-x-4"
            type="button"
          >
            Add a new Book
            <AddIcon />
          </button>
        </Link>
      </div>
    </>
  )
}

export default LenderDashboard
