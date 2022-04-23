import React from 'react'
import { useLocation, Link } from 'react-router-dom'
const ConfirmBook = () => {
  const location = useLocation()
  const {
    bookTitle,
    bookAuthor,
    bookEdition,
    bookPublisher,
    bookYearOfPublishing,
  } = location.state.bookInfo

  return (
    <div className="flex w-screen">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <h1 className="m-3 xl:w-96 text-4xl font-bold leading-tight tracking-tight">
          CONFIRM BOOK
        </h1>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold">Book Title: </h1>
            <h1>{bookTitle}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold">Book Author: </h1>
            <h1>{bookAuthor}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold">Book Publisher: </h1>
            <h1>{bookPublisher}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold">Book Edition: </h1>
            <h1>{bookEdition}</h1>
          </div>
        </div>

        <div className="m-3 xl:w-96">
          <div className="flex space-x-4">
            <h1 className="font-bold">Book Year of Publishing: </h1>
            <h1>{bookYearOfPublishing}</h1>
          </div>
        </div>
        <Link to="/lender/confirmBook">
          <button className="m-3 xl:w-60 btn-primary flex justify-center">
            CONFIRM
          </button>
        </Link>
      </div>

      <div className="w-1/3 flex items-center">
        <div className="w-4/5 rounded-lg shadow-xl bg-gray-50">
          <div className="m-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-4 border-slate-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmBook
