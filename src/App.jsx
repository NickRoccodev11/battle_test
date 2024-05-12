import { useEffect, useState } from 'react'


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const result = await fetch('/user')
        const userData = await result.json()
        setUsers(userData)
      } catch (error) {
        console.error("error fetching users", error)
      }
    }
    fetchAllUsers()
  }, [])

  return (
    <div>
      <h1>the Purrgrammers are: </h1>
      {
        users &&
        users.map(user => {
          return <p key={user.id}> {user.name} </p>
        })
      }
    </div>
  )
}

export default App
