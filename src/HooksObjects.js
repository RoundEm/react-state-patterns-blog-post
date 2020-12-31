import React, { useState } from "react";

function HooksObjects() {
  const [friend, setFriend] = useState('')
  const [propertyToDelete, setPropertyToDelete] = useState('')
  const [userProfile, setUserProfile] = useState({
    userName: '',
    friends: []
    // TODO: add nested object?
  })
  console.log('friend: ', friend)
  console.log('userProfile: ', userProfile)

  // TODO: add something to article (maybe first one?) that discusses generic function state setting for class and functional components
  // function handleInputChange(e) {
  //   setUserProfile({
  //     ...userProfile,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // TODO: add property, update existing property, remove property

  function handleAddFriend() {
    let _friend 
    if (friend === '') {
      _friend = 'No friend added'
    } else {
      _friend = friend
    }
    setUserProfile({      
      ...userProfile, 
      friends: [
        ...userProfile.friends,
        _friend
      ]
    })
    setFriend('')
  }
  
  function handleAddNewProperty() {
    const stateCopy = {...userProfile}
    stateCopy.newProperty = 'I\'m a new property'
    setUserProfile(stateCopy)
  }

  function handleDeleteProperty() {
    const stateCopy = {...userProfile}
    delete stateCopy[propertyToDelete]
    setUserProfile(stateCopy)
  }

  return (
    <section id="objects">
      <h1>Objects</h1>
      <h2>'userProfile' State Object:</h2>

      <pre>{JSON.stringify(userProfile, null, 2)}</pre>
      <br />

      <input 
        type="text"
        name="userName"
        onChange={(e) => {
          setUserProfile({
            ...userProfile,
            userName: e.target.value
          })
        }}
        value={userProfile.userName}
        placeholder="username" 
      />
      <br />

      <input 
        type="text"  
        name="friendToAdd"
        onChange={(e) => {
          setFriend(e.target.value)
        }}
        value={friend}
        placeholder="add friend"
      />
      <button onClick={handleAddFriend}>
        Add Friend
      </button>
      <br />

      <button onClick={handleAddNewProperty}>
        Add New Property
      </button>
      <br />
      
      <button onClick={handleDeleteProperty}>
        Delete this Property:
      </button>
      <select 
        onChange={(e) => setPropertyToDelete(e.target.value)}
      >
        {Object
          .keys(userProfile)
          .concat('')
          .reverse()
          .map(property => {
            return <option value={property}>{property}</option>
        })}
      </select>
      {/* <ul>
        {userProfile.friends.map((friend, i) => {
          return <li key={i}>{friend}</li>
        })}
      </ul> */}
      
    </section>
  )
}

export default HooksObjects