import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import UploadIcon from '../assets/icons/upload'
import Sidebar from '../components/sidebar'
const AddBook = () => {
  const [bookInfo, setBookInfo] = useState({})
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }

  const handleInputChange = (event) => {
    event.persist()
    setBookInfo((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }))

    console.log(bookInfo)
  }

  return (
    <div className="flex w-screen">
      <Sidebar />
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
                  {!isSelected ? (
                    <>
                      <UploadIcon />
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Upload Book Cover Image
                      </p>
                    </>
                  ) : (
                    <h1>{selectedFile}</h1>
                  )}
                </div>
                <input name="bookCover" type="file" onChange={changeHandler} />
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
