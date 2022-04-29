import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import LogoDark from '../assets/icons/logoDark'
const AdminLogin = () => {
    const [formValue, setformValue] = useState({})
    const [loading] = useState(false)
    const [isError] = useState(false)
    
    const handleInputChange = (event) => {
      event.persist()
      setformValue((inputs) => ({
        ...inputs,
        [event.target.id]: event.target.value,
      }))
    }
  
    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-8">
          <div className="flex flex-col items-center justify-center">
            <LogoDark />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to admin account
            </h2>
          </div>
          <form className="mt-8 space-y-4">
            <div className="rounded-md shadow-sm space-y-8">
              <div>
                <label className="sr-only" htmlFor="email-address">
                  Email address
                </label>
                <input
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  id="userName"
                  name="userName"
                  placeholder="Please enter username"
                  type="text"
                  value={formValue.userName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <input
                  required
                  autoComplete="current-password"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  id="password"
                  name="password"
                  placeholder="Please enter password"
                  type="password"
                  value={formValue.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
        
            {isError && (
              <small className="mt-3 d-inline-block text-danger">
                Something went wrong. Please try again later.
              </small>
            )}
            <Link to="/admin">
              <button
                className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-800 hover:bg-orange-700 "
                disabled={loading}
                type="submit"
                
              >
                {loading ? 'Loading...' : 'ADMIN LOGIN'}
              </button>
            </Link>
            
          </form>
        </div>
      </div>
    )
  }
  
  export default AdminLogin
  