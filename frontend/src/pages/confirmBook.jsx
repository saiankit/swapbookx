import React from 'react'

const ConfirmBook = () => {
  
  return <div className='flex flex-col'>
        <div className="flex w-screen justify-center">
          <h1 className="m-3 xl:w-96 text-4xl font-bold leading-tight tracking-tight">
            Hello
          </h1>
        </div>
        <div className='flex flex-row'>
                <div className='w-1/2 items-center'>
                <div className="w-3/5 rounded-lg shadow-xl bg-gray-50">
              <div className="m-4">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-4 border-slate-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <input className="opacity-0" type="file" />
                  </label>
                </div>
              </div>
              
        </div>
            </div>
            <div className='w-1/2 items-center'>
              <h1>hola</h1>
              <h1>hola</h1>
              <h1>hola</h1>
              <h1>hola</h1>
              <h1>hola</h1>
              <h1>hola</h1>

            </div>
        </div>
        <div className="flex justify-center p-2">
            <button className="btn-primary ">Confirm</button>
        </div>
      

  </div>
}

export default ConfirmBook
