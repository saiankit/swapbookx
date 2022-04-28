import { React, useState } from 'react'
import axios from 'axios'
/* eslint handle-callback-err: "warn" */
import { Link } from 'react-router-dom'

import LogoDark from '../assets/icons/logoDark'

const SignUpPage = () => {
  const [formValue, setformValue] = useState({ isAdmin: false })
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    setIsError(false)
    setformValue((inputs) => ({
      ...inputs,
    }))
    sendLoginRequest()
    setLoading(false)
  }

  const sendLoginRequest = async () => {
    try {
      console.log(formValue)
      const res = await axios.post(
        'http://localhost:8080/api/users/register',
        formValue
      )

      console.log(res)

      localStorage.setItem('userID', res.data.userID)
    } catch (err) {
      console.log(err)
    }
  }

  const handleInputChange = (event) => {
    event.persist()
    setformValue((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }))
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center justify-center">
          <LogoDark />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new Account
          </h2>
        </div>
        <form className="mt-8 space-y-4">
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <input
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                value={formValue.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email"
                name="email"
                placeholder="Email address"
                type="email"
                value={formValue.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="userName"
                name="userName"
                placeholder="username"
                type="userName"
                value={formValue.userName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={formValue.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <textarea
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="address"
                placeholder="Address"
                rows="4"
                value={formValue.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                type="text"
                value={formValue.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {isError && (
            <small className="mt-3 d-inline-block text-danger">
              Something went wrong. Please try again later.
            </small>
          )}

          <Link to="/lender">
            <button
              className="mt-3 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-800 hover:bg-orange-700 "
              disabled={loading}
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? 'Loading...' : 'REGISTER'}
            </button>
          </Link>
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center" />
            <div className="text-sm font-medium text-gray-600">
              Already have an account ?
            </div>
          </div>
          <Link to="/login">
            <button className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-400 hover:bg-slate-500 ">
              SIGN IN
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
