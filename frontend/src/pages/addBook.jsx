import { React, useState } from 'react'
import { Link } from 'react-router-dom'
const AddBook = () => {
  const [bookInfo, setBookInfo] = useState({})

  const handleInputChange = (event) => {
    event.persist()
    setBookInfo((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }))
  }

  return (
    <div className="flex w-screen">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <h1 className="m-3 xl:w-96 text-4xl font-bold leading-tight tracking-tight">
          ADD A NEW BOOK FOR LENDING
        </h1>

        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="bookTitle"
            placeholder="Enter Book Title"
            type="text"
            value={bookInfo.bookTitle}
            onChange={handleInputChange}
          />
        </div>

        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="bookAuthor"
            placeholder="Enter Author Name"
            type="text"
            value={bookInfo.bookAuthor}
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="bookPublisher"
            placeholder="Enter Publisher"
            type="text"
            value={bookInfo.bookPublisher}
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="bookEdition"
            placeholder="Enter Edition"
            type="text"
            value={bookInfo.bookEdition}
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="bookYearOfPublishing"
            placeholder="Enter Year of Publishing"
            type="text"
            value={bookInfo.bookYearOfPublishing}
            onChange={handleInputChange}
          />
        </div>
        <Link
          state={{
            bookInfo: bookInfo,
          }}
          to="/lender/confirmBook"
        >
          <button className="m-3 xl:w-96 btn-primary flex justify-center">
            REGISTER A NEW BOOK
          </button>
        </Link>
      </div>
      <div className="w-1/3 flex items-center">
        <div className="w-4/5 rounded-lg shadow-xl bg-gray-50">
          <div className="m-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-4 border-slate-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Upload Book Cover Image
                  </p>
                </div>
                <input className="opacity-0" type="file" />
              </label>
            </div>
          </div>
          <div className="flex justify-center p-2">
            <button className="btn-primary w-full">Upload</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBook
