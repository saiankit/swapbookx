import { React, useState, useEffect } from 'react'
import axios from 'axios'

function BorrowerRequests() {
  const [data, setData] = useState([])

  useEffect(() => {
    const userID = localStorage.getItem('userID')

    async function fetchRequests() {
      const result = await axios(
        'http://localhost:8080/api/requests/borrower/' + userID
      )

      setData(result.data)
    }

    fetchRequests()
  })

  return (
    <div className="flex">
      <h1 className="text-4xl mb-5 font-bold">RequestsDashboard</h1>
      {data.map((book, index) => {
        return <h1 key={index}> {book.requestID}</h1>
      })}
    </div>
  )
}

export default BorrowerRequests
