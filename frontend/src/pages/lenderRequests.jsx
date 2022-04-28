import { React, useState, useEffect } from 'react'
import axios from 'axios'

import RequestsCard from '../components/RequestsCard'

function LenderRequests() {
  const [data, setData] = useState([])

  useEffect(() => {
    const userID = localStorage.getItem('userID')

    async function fetchRequests() {
      const result = await axios(
        'http://localhost:8080/api/requests/lender/' + userID
      )

      setData(result.data)
    }

    fetchRequests()
  })

  return (
    <div className="flex flex-col">
      {data.map((request, index) => {
        return (
          <RequestsCard
            key={index}
            author={request.author}
            borrowerID={request.borrowerID}
            borrowerName={request.borrowerName}
            collectionDate={request.dateIssued}
            imageSrc={request.imageSrc}
            isLender={true}
            lenderID={request.lenderID}
            lenderName={request.lenderName}
            requestID={request.requestID}
            returnDate={request.returnDate}
            title={request.title}
          />
        )
      })}
    </div>
  )
}

export default LenderRequests
