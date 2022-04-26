import React from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from '../assets/icons/logo'

const HomeScreen = () => {
  return (
    <div>
      <nav className="px-2 sm:px-4 py-2.5 bg-gray-800 w-screen fixed">
        <div className="px-4 flex flex-wrap justify-between">
          <a className="flex items-center" href="http://localhost:3000/">
            <LogoIcon />
          </a>
          <div className="flex md:order-2">
            <Link to="/login">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Login / Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HomeScreen
