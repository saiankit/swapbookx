import React from 'react'

import Arrow from '../assets/icons/arrow'

const TransactionCard = ({ bookTitle, borrowerID, lenderID, bookID }) => {
  return (
    <div className="flex rounded-lg justify-between shadow-lg max-w-4xl h-100 bg-white w-full p-8">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <h1>{bookTitle}</h1>
          <h1>{bookID}</h1>
        </div>

        <div className="flex justify-between">
          <UserComponent
            userID={lenderID}
            userName="Ramaraju"
            userRole="Lender"
          />
          <Arrow />
          <UserComponent
            userID={borrowerID}
            userName="Bheem"
            userRole="Borrower"
          />
        </div>
      </div>
    </div>
  )
}

export default TransactionCard

const UserComponent = ({ userID, userRole, userName }) => {
  return (
    <div className="flex flex-col items-start space-y-0.5">
      <h1>{userRole}</h1>
      <h1 className="text-xl font-medium text-gray-900">{userName}</h1>
      <h1 className="text-sm text-gray-500">{userID}</h1>
    </div>
  )
}
