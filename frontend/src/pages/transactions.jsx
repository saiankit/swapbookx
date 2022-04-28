import React from 'react'
import SideBar from '../components/sidebar'
import TxTabsRender from './txTabs'


function TransactionsDashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="pl-64 m-0 overflow-hidden flex flex-col overflow-y-scroll items-center py-12 h-full w-full">
        <TxTabsRender />
      </div>
    </div>
  )
}

export default TransactionsDashboard
