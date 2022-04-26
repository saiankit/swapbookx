import React from 'react'

import LogoDark from '../assets/icons/logoDark'
const LoginPage = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center justify-center">
          <LogoDark />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form action="#" className="mt-8 space-y-6" method="POST">
          <input name="remember" type="hidden" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="email-address">
                Email address
              </label>
              <input
                required
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Email address"
                type="email"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                required
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center" />

            <div className="text-sm">
              <a
                className="font-medium text-indigo-600 hover:text-indigo-500"
                href="#"
              >
                {' '}
                Forgot your password?{' '}
              </a>
            </div>
          </div>

          <div>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ">
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
