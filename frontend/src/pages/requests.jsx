import React from 'react'

import SideBar from '../components/sidebar'
function RequestsDashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="pl-64 m-0 overflow-hidden flex flex-col overflow-y-scroll items-center py-12 h-full w-full">
        <h1 className="text-4xl mb-5 font-bold">RequestsDashboard</h1>
        <span className="text-7xl">📞</span>
      </div>
    </div>
  )
}

export default RequestsDashboard
