import React, { useState, useRef, useEffect } from "react";

const initialUsers = [
  {
    name: 'Jason',
    id: 1
  },
  {
    name: 'Tom',
    id: 2
  },
  {
    name: 'Sarah',
    id: 3
  }
]

function HooksArrayOfObjects() {
  const [idOfUserBeingEdited, setIdOfUserBeingEdited] = useState(null)
  const [nameOfUserBeingEdited, setNameOfUserBeingEdited] = useState('')
  const [userName, setUserName] = useState('')
  const [users, setUsers] = useState(initialUsers)
  const id = useRef(initialUsers.length + 1)
  // console.log('id: ', id)
  console.log('users: ', users)

  function handleAddUser() {
    setUsers([
      ...users,
      {
        name: userName,
        id: id.current
      }
    ])
    setUserName('')
    id.current++
  }

  function handleEditUserName(userId) {
    setIdOfUserBeingEdited(userId)
  }

  function handleDeleteUser(userId) {
    const updatedUsers = users.filter(user => {
      return user.id !== userId
    })
    setUsers(updatedUsers)
  }

  function handleSaveUpdatedName() {
    const updatedUsers = users.map(user => {
      if (user.id === idOfUserBeingEdited) {
        return {
          ...user,
          name: nameOfUserBeingEdited
        }
      }
      return user
    })

    // method 2:
    // const indexOfUserToUpdate = users.findIndex(user => {
    //   return user.id === idOfUserBeingEdited
    // })
    // const updatedUser = users[indexOfUserToUpdate]
    // updatedUser.name = nameOfUserBeingEdited
    // setUsers([
    //   ...users.slice(0, indexOfUserToUpdate),
    //   updatedUser,
    //   ...users.slice(indexOfUserToUpdate + 1)
    // ])

    setUsers(updatedUsers)
    setIdOfUserBeingEdited('')
    setNameOfUserBeingEdited('')
  }

  return (
    <section id="arrOfObjects">
      <h1>Array of Objects</h1>

      <input 
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='name'
      />

      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>ID: {user.id}</p>
              {idOfUserBeingEdited === user.id && (
                <input
                  type='text'
                  value={nameOfUserBeingEdited}
                  onChange={(e) => setNameOfUserBeingEdited(e.target.value)}
                  placeholder='enter updated name'
                />
              )}

              {idOfUserBeingEdited === user.id
                ? <button onClick={() => handleSaveUpdatedName()}>
                    Save Name
                  </button>
                : <button onClick={() => handleEditUserName(user.id)}>
                    Edit Name
                  </button>
              }

              <button
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete User
              </button>

            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default HooksArrayOfObjects