import {React, useState} from 'react'
import axios from 'axios'

const RequestsCardLender = ({ lenderID, borrowerID, bookID, dateIssued, returnDate, requestID }) => {

  const [formValue] = useState({
    lenderID: lenderID,
    borrowerID: borrowerID,
    bookID: bookID,
    dateIssued: dateIssued,
    returnDate: returnDate
  })

  const handleSubmit = (event) => {
    
    addTransaction()

    deleteRequest()
  }

  const handleDecline = (event) => {
    
    deleteRequest()
  }


  function deleteRequest () {
    try {
      const res = axios.delete('http://localhost:8080/api/requests/' + requestID)

      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  const addTransaction = async () => {
    try {
      console.log(formValue)
      const res = await axios.post(
        'http://localhost:8080/api/transactions',
        formValue
      )

      console.log(res)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mx-auto flex justify-between items-center w-full py-2">
      <button
        type="submit"
        onClick={handleSubmit}
       className="px-4 py-1.5 rounded-full text-gray-800 bg-green-200 font-semibold text-sm flex align-center w-max cursor-pointer hover:scale-110 duration-150 ease-in-out  active:bg-gray-300 transition duration-300 ease">
        APPROVE
      </button>
      <button
       onClick={handleDecline}
      className="px-4 py-1.5 rounded-full text-gray-800 bg-red-200 font-semibold text-sm flex align-center w-max cursor-pointer hover:scale-110 duration-150 ease-in-out  active:bg-gray-300 transition duration-300 ease">
        DECLINE
      </button>
    </div>
  )
}

export default RequestsCardLender
