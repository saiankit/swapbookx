import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../components/sidebar'
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
      <Sidebar />
      <div className="pl-64 m-0 overflow-hidden flex flex-col overflow-y-scroll items-center justify-center py-12 h-full w-full">
        <h1 className="m-3 xl:w-96 text-4xl font-bold leading-tight tracking-tight">
          ADD A NEW BOOK FOR LENDING
        </h1>

        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="title"
            placeholder="Enter Book Title"
            type="text"
            value={bookInfo.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="author"
            placeholder="Enter Author Name"
            type="text"
            value={bookInfo.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="publisher"
            placeholder="Enter Publisher"
            type="text"
            value={bookInfo.publisher}
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="edition"
            placeholder="Enter Edition"
            type="text"
            value={bookInfo.edition}
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="year"
            placeholder="Enter Year of Publishing"
            type="text"
            value={bookInfo.year}
            onChange={handleInputChange}
          />
        </div>

        <div className="m-3 xl:w-96">
          <input
            className="form-input"
            id="imageSrc"
            placeholder="Enter Book Cover URI"
            type="text"
            value={bookInfo.imageSrc}
            onChange={handleInputChange}
          />
        </div>

        <div className="m-3 xl:w-96">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="genre"
            value={bookInfo.genre}
            onChange={handleInputChange}
          >
            <option selected="">Choose a Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Self Help">Self Help</option>
          </select>
        </div>
        <Link
          state={{
            bookInfo: bookInfo,
          }}
          to="/lender/confirmBook"
        >
          <button className="m-3 xl:w-96 btn-primary hover:scale-105 duration-100 flex justify-center">
            REGISTER A NEW BOOK
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AddBook
