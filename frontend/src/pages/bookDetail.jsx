import { React, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
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

  return (
    <div className="flex w-screen h-screen">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">Book Title: </h1>
            <h1 className="font-bold">{bookID}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">Book Author: </h1>
            <h1 className="font-bold">{bookAuthor}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">Book Publisher: </h1>
            <h1 className="font-bold">{bookPublisher}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">Book Edition: </h1>
            <h1 className="font-bold">{bookEdition}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold text-gray-500">
              Book Year of Publishing:{' '}
            </h1>
            <h1 className="font-bold">{bookYearOfPublishing}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96 flex items-center">
          <div className="flex flex-col items-start">
            <span className="my-0.5 text-gray-500">Collection Date</span>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              selected={collectionDate}
              onChange={(date) => setCollectionDate(date)}
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="flex flex-col items-start">
            <span className="my-0.5 text-gray-500">Return Date</span>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
            />
          </div>
        </div>

        <Link to="/requests">
          <button className="m-3 xl:w-60 btn-primary flex justify-center">
            REQUEST BOOK
          </button>
        </Link>
      </div>

      <div className="w-1/3 flex items-center">
        <div className="max-w-md">
          <img
            alt="Book Image"
            className="rounded-lg shadow-xl object-contain h-96"
            src="https://images-na.ssl-images-amazon.com/images/I/9167i2ioFaS.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default BookDetails
