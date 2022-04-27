import {React, useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'

import Sidebar from '../components/sidebar'
const ConfirmBook = () => {
  const location = useLocation()
  const {
    bookTitle,
    bookAuthor,
    bookEdition,
    bookPublisher,
    bookYearOfPublishing,
    bookCover,
    bookGenre,
  } = location.state.bookInfo
const [formValue, setformValue] = useState({})
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    setIsError(false)
    setformValue((inputs) => ({
      ...inputs,
    }))

    axios.post('http://localhost:8080/api/users/', formValue).then((res) => {
      console.log(res)
      setLoading(false)
    })
  }
  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="pl-64 m-0 overflow-hidden flex overflow-y-scroll items-center justify-center py-12 h-full w-full">
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

          <div className="m-3 xl:w-96">
            <div className="flex space-x-4">
              <h1 className="font-bold">Book Genre: </h1>
              <h1>{bookGenre}</h1>
            </div>
          </div>
          <Link to="/lender">
            <button
            
            className="m-3 xl:w-60 btn-primary flex justify-center">
              CONFIRM
            </button>
          </Link>
        </div>

        <div className="max-w-md">
          <img
            alt="Book Image"
            className="rounded-lg shadow-xl object-contain h-60"
            src={bookCover}
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmBook
