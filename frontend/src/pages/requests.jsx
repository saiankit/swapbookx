import React from 'react'

import SideBar from '../components/sidebar'
function RequestsDashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">RequestsDashboard</h1>
        <span className="text-7xl">📞</span>
      </div>
    </div>
  )
}

export default RequestsDashboard
