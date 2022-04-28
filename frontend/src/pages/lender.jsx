import { React, useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'

import { AddIcon } from '../assets/icons/index'
import BookCard from '../components/BookCard'
import Sidebar from '../components/sidebar'

function LenderDashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    const userID = localStorage.getItem('userID')

    async function fetchBooks() {
      const result = await axios(
        'http://localhost:8080/api/books/owner/' + userID
      )

      setData(result.data)
    }
    fetchBooks()
  })

  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="pl-72 m-0 overflow-hidden flex flex-col overflow-y-scroll items-center py-12 h-full w-full">
          <div className="flex items-end justify-end ">
            <Link to="/lender/addBook">
              <button
                className=" py-10 px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center space-x-4"
                type="button"
              >
                Add a new Book
                <AddIcon />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 space-4 gap-8">
            {data.map((book, index) => {
              return (
                <BookCard
                  key={index}
                  author={book.author}
                  bookID={book.bookID}
                  imageSrc={book.imageSrc}
                  isLender={true}
                  title={book.title}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default LenderDashboard
