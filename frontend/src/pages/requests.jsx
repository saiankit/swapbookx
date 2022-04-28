import { React } from 'react'

import SideBar from '../components/sidebar'

import TabsRender from './tabs'
function RequestsDashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="pl-64 m-0 overflow-hidden flex flex-col overflow-y-scroll items-center py-12 h-full w-full">
        <TabsRender />
      </div>
    </div>
  )
}

export default RequestsDashboard
