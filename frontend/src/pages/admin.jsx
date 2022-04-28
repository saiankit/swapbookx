import { React, useState, useEffect } from 'react'

import axios from 'axios'

const AdminPage = () => {
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
    <div>{data[0].name}</div>
  )
}

export default AdminPage