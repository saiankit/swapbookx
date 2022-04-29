import { React, useState, useEffect } from 'react'

import axios from 'axios'
import LogoDark from '../assets/icons/logoDark'

const AdminPage = () => {

  function deleteBookNetworkRequest (userID) {

    try {

      const res = axios.delete('http://localhost:8080/api/users/' + userID)

      console.log(res)

    } catch (err) {

      console.log(err)
    }
  }
    const [data, setData] = useState([])

    useEffect(() => {
  
      async function fetchUsers() {
        const result = await axios(
          'http://localhost:8080/api/users/'
        )

        setData(result.data)

        console.log(result.data)
      }

      fetchUsers()

      console.log(data)
    })

  return (
    <div className="flex flex-col justify-center items-center pt-4">
    <LogoDark/>
    <h1 className='p-8 text-2xl font-bold text-gray-700'>ADMIN DASHBAORD</h1>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" className="px-6 py-3">
User ID
</th>
<th scope="col" className="px-6 py-3">
User Name
</th>
<th scope="col" className="px-6 py-3">
User Email
</th>
<th scope="col" className="px-6 py-3">
username
</th>
<th scope="col" className="px-6 py-3">
<span className="sr-only">DELETE</span>
</th>
</tr>
</thead>
<tbody>
{data.map((user, index) => {
              return (
                <tr
                key={index}
                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
{user.userID}
</th>
<td className="px-6 py-4">
{user.name}
</td>
<td className="px-6 py-4">
{user.email}
</td>
<td className="px-6 py-4">
{user.userName}
</td>
<td className="px-6 py-4 text-right">
<button
       onClick= {
         () => deleteBookNetworkRequest(user.userID)
       }

className="font-medium text-red-600 dark:text-red-500 hover:underline">DELETE</button>
</td>
</tr>
              )
            })}


</tbody>
</table>
</div>

    </div>
  )
}

export default AdminPage