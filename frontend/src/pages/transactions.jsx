import React from 'react'

import Sidebar from '../components/sidebar'
import TransactionCard from '../components/transactionCard'

function TransactionsDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="pl-64 m-0 overflow-hidden flex flex-col overflow-y-scroll items-center py-12 h-full w-full">
        <TransactionCard
          bookID={121}
          bookTitle={'Harry'}
          borrower={'asdasd'}
          borrowerID={1}
          lenderID={2}
        />
      </div>
    </div>
  )
}

export default TransactionsDashboard
