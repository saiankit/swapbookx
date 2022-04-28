import { React, useState, useEffect } from 'react'


import axios from 'axios'

import Sidebar from '../components/sidebar'

const UserProfile = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      const userID = localStorage.getItem('userID')
  
      async function fetchBooks() {
        const result = await axios(
          'http://localhost:8080/api/users/' + userID
        )
  
        setData(result.data)
      }
      fetchBooks()
      console.log(data)
    })
  
    return (
      <>
        <div className="flex">
          <Sidebar />
  
          <div className="pl-72 m-0 overflow-hidden flex flex-col overflow-y-scroll items-center py-12 h-full w-full">
        
            <div className="flex flex-col space-2 gap-2">
                <div className="m-3 xl:w-96">
            <div className="flex space-x-4">
              <h1 className="font-bold">User ID: </h1>
              <h1>{data.userID}</h1>
            </div>
          </div>
          <div className="m-3 xl:w-96">
            <div className="flex space-x-4">
              <h1 className="font-bold">Name: </h1>
              <h1>{data.name}</h1>
            </div>
          </div>
          <div className="m-3 xl:w-96">
            <div className="flex space-x-4">
              <h1 className="font-bold">Username: </h1>
              <h1>{data.userName}</h1>
            </div>
          </div>
          <div className="m-3 xl:w-96">
            <div className="flex space-x-4">
              <h1 className="font-bold">Email: </h1>
              <h1>{data.email}</h1>
            </div>
          </div>
          <div className="m-3 xl:w-96">
            <div className="flex space-x-4">
              <h1 className="font-bold">Phone Number: </h1>
              <h1>{data.phoneNumber}</h1>
            </div>
          </div>
          <div className="m-3 xl:w-96">
            <div className="flex space-x-4">
              <h1 className="font-bold">Wallet Balance: </h1>
              <h1>{data.balance}</h1>
            </div>
          </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default UserProfile