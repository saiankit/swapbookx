import React from 'react'

import Sidebar from '../components/sidebar'

function TransactionsDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">TransactionsDashboard</h1>
        <span className="text-7xl">📞</span>
      </div>
    </div>
  )
}

export default TransactionsDashboard
