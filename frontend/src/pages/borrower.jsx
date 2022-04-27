import { React, useState } from 'react'

import BookCard from '../components/bookCard'
import Sidebar from '../components/sidebar'

const data = [
  {
    title: 'Novo Nordisk A/S',
    author: 'Peirce',
    imgSrc: 'http://dummyimage.com/1593x2551.png/5fa2dd/ffffff',
  },
  {
    title: 'Atossa Genetics Inc.',
    author: 'Tabbie',
    imgSrc: 'http://dummyimage.com/1593x2551.png/cc0000/ffffff',
  },
  {
    title: 'ITT Inc.',
    author: 'Dex',
    imgSrc: 'http://dummyimage.com/1593x2551.png/5fa2dd/ffffff',
  },
  {
    title: 'Horizon Technology Finance Corporation',
    author: 'Laetitia',
    imgSrc: 'http://dummyimage.com/1593x2551.png/ff4444/ffffff',
  },
  {
    title: 'Cytokinetics, Incorporated',
    author: 'Bartholomeo',
    imgSrc: 'http://dummyimage.com/1593x2551.png/cc0000/ffffff',
  },
  {
    title: 'EMC Insurance Group Inc.',
    author: 'Ninnette',
    imgSrc: 'http://dummyimage.com/1593x2551.png/cc0000/ffffff',
  },
  {
    title: 'Compass Diversified Holdings',
    author: 'Rosalia',
    imgSrc: 'http://dummyimage.com/1593x2551.png/ff4444/ffffff',
  },
  {
    title: 'CST Brands, Inc.',
    author: 'Gustaf',
    imgSrc: 'http://dummyimage.com/1593x2551.png/5fa2dd/ffffff',
  },
  {
    title: 'Motif Bio plc',
    author: 'Augy',
    imgSrc: 'http://dummyimage.com/1593x2551.png/5fa2dd/ffffff',
  },
  {
    title: 'Welltower Inc.',
    author: 'Gusella',
    imgSrc: 'http://dummyimage.com/1593x2551.png/ff4444/ffffff',
  },
]

function BorrowerDashboard() {
  const [search, setNewSearch] = useState('')

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)
  }

  const filtered = !search
    ? data
    : data.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )

  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="pl-64 m-0 overflow-hidden flex flex-col overflow-y-scroll items-center py-12 h-full w-full">
          <div className="flex space-x-4">
            <input
              className="max-w-md justify-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
              placeholder="Search for a book"
              type="text"
              value={search}
              onChange={handleSearchChange}
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              id="button-addon2"
              type="button"
            >
              <svg
                aria-hidden="true"
                className="w-4"
                data-icon="search"
                data-prefix="fas"
                focusable="false"
                role="img"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 space-4 gap-8">
            {filtered.map((book, index) => {
              return (
                <BookCard
                  key={index}
                  author={book.author}
                  imgSrc={book.imgSrc}
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

export default BorrowerDashboard
