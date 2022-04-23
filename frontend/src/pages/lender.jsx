import { React } from 'react'

import { Link } from 'react-router-dom'

import { AddIcon } from '../assets/icons/index'
import BookCard from '../components/bookCard'

const data = [
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: 'Varnam',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: ' Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
  {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'JK Rowling',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg',
  },
]

function LenderDashboard() {
  return (
    <>
      <div className="flex flex-col mx-auto py-12 px-12 w-screen h-screen">
        <div className="flex items-end justify-end ">
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

        <div className="grid grid-cols-3 space-4 gap-8">
          {data.map((book, index) => {
            return (
              <BookCard key={index} author={book.author} title={book.title} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LenderDashboard
