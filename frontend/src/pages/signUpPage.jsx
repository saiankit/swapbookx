import React from 'react'

import LogoDark from '../assets/icons/logoDark'

const SignUpPage = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center justify-center">
          <LogoDark />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-4">
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <input
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Name"
                type="text"
              />
            </div>
            <div>
              <input
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Email address"
                type="email"
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
              />
            </div>
            <div>
              <textarea
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="message"
                placeholder="Address"
                rows="4"
              />
            </div>
            <div>
              <input
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Phone Number"
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm font-medium text-orange-600 hover:text-orange-500">
              {' '}
              Sign In
            </div>
            <div className="text-sm">
              <a className="font-medium text-orange-600 hover:text-orange-500">
                {' '}
                Already have an account{' '}
              </a>
            </div>
          </div>

          <div>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-800 hover:bg-orange-700 ">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
