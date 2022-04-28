import { React, useState, useEffect } from 'react'
import axios from 'axios'

import TransactionCard from '../components/TransactionCard/index'

function BorrowerTx() {
  const [data, setData] = useState([])

  useEffect(() => {
    const userID = localStorage.getItem('userID')

    async function fetchRequests() {
      const result = await axios(
        'http://localhost:8080/api/transactions/borrower/' + userID
      )

      setData(result.data)
    }

    fetchRequests()
  })

  return (
    <div className="flex flex-col">
      {data.map((request, index) => {
        return (
          <TransactionCard
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
            bookID = {request.bookID}
          />
        )
      })}
    </div>
  )
}

export default BorrowerTx
