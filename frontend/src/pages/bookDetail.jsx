import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import axios from 'axios'

import Sidebar from '../components/sidebar'
const BookDetails = ({
  bookTitle,
  bookAuthor,
  bookEdition,
  bookPublisher,
  bookImgSrc,
  bookYearOfPublishing,
  id,
}) => {
  const [collectionDate, setCollectionDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const { bookID } = useParams()
  const [bookDeets, setBookDeets] = useState([])
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState({ accepted: false })
  const userID = localStorage.getItem('userID')

  useEffect(() => {
    async function fetchBooks() {
      const result = await axios('http://localhost:8080/api/books/' + bookID)

      setBookDeets(result.data)
      setData((inputs) => ({
        ...inputs,
        lenderID: result.data.lenderID,
        borrowerID: parseInt(userID),
        bookID: result.data.bookID,
      }))
    }
    fetchBooks()
  })
  const handleSubmit = (event) => {
    setLoading(true)
    setIsError(false)

    addRequest()
    setLoading(false)
  }

  const addRequest = async () => {
    try {
      console.log(data)
      setData((inputs) => ({
        ...inputs,
        collectionDate: collectionDate,
        returnDate: returnDate,
      }))
      const res = await axios.post('http://localhost:8080/api/requests/', data)

      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="pl-72 m-0 overflow-hidden flex flex-col overflow-y-scroll justify-center items-center py-12 h-full w-full">
        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">Book Title: </h1>
            <h1 className="font-bold">{bookDeets.title}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">Book Author: </h1>
            <h1 className="font-bold">{bookDeets.author}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">Book Publisher: </h1>
            <h1 className="font-bold">{bookDeets.publisher}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">Book Edition: </h1>
            <h1 className="font-bold">{bookDeets.edition}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">
              Book Year of Publishing:{' '}
            </h1>
            <h1 className="font-bold">{bookDeets.year}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96 flex items-center">
          <div className="flex flex-col items-start">
            <span className="my-0.5 text-gray-500">Collection Date</span>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              selected={collectionDate}
              onChange={(date) => {
                setCollectionDate(date)
                setData((inputs) => ({
                  ...inputs,
                  dateIssued: date.toISOString(),
                }))
              }}
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="flex flex-col items-start">
            <span className="my-0.5 text-gray-500">Return Date</span>
            <DatePicker
            className='border-red-500'
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              selected={returnDate}
              onChange={(date) => {
                setReturnDate(date)
                setData((inputs) => ({
                  ...inputs,
                  returnDate: date.toISOString(),
                }))
              }}
            />
          </div>
        </div>
        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <Link to="/requests">
          <button
            className="m-3 xl:w-60 btn-primary flex justify-center"
            disabled={loading}
            type="submit"
            onClick={handleSubmit}
          >
            REQUEST BOOK
          </button>
        </Link>
      </div>

      <div className="w-1/3 flex items-center">
        <div className="max-w-md">
          <img
            alt="Book Image"
            className="rounded-lg shadow-xl object-contain h-96"
            src={bookDeets.imageSrc}
          />
        </div>
      </div>
    </div>
  )
}

export default BookDetails
