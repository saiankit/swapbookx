import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import {
  LenderIcon,
  BorrowerIcon,
  RequestsIcon,
  TransactionsIcon,
} from '../assets/icons'
import LogoIcon from '../assets/icons/logo'
function Sidebar() {
  const location = useLocation()
  const path = location.pathname
  let lender = false
  let borrower = false
  let requests = false
  let transactions = false

  if (path === '/lender') {
    lender = true
  } else if (path === '/borrower') {
    borrower = true
  } else if (path === '/requests') {
    requests = true
  } else if (path === '/lender/addBook') {
    lender = true
  } else {
    transactions = true
  }

  return (
    <div className="w-64 fixed top-0 left-0 h-screen flex shadow-lg bg-light flex-col justify-between">
      <div className="px-4">
        <Link to="/lender">
          <div className="h-16 w-full flex items-center">
            <LogoIcon />
          </div>
        </Link>

        <ul className="mt-8 space-y-3 flex flex-col">
          <Link to="/lender">
            <li
              className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                lender && 'bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <LenderIcon />
                <span className="text-md  ml-2">Lender Dashboard</span>
              </div>
            </li>
          </Link>
          <Link to="/borrower">
            <li
              className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                borrower && 'bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <BorrowerIcon />
                <span className="text-md  ml-2">Borrower Dashboard</span>
              </div>
            </li>
          </Link>
          <Link to="/requests">
            <li
              className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                requests && 'bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <RequestsIcon />
                <span className="text-md  ml-2">Requests</span>
              </div>
            </li>
          </Link>
          <Link to="/transactions">
            <li
              className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                transactions && 'bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <TransactionsIcon />

                <span className="text-md  ml-2">Transactions</span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
