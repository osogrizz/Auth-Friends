import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Item from './Item'

import '../App.css';

const Friends = () => {
  const [friends, setFriends] = useState([])
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  })
 
  useEffect(() => {
    axiosWithAuth().get('/friends')
    .then(res => {
      console.log(res.data)
      setFriends(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[newFriend])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newFriend)
    axiosWithAuth().post('/friends', newFriend)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Friends</h1>
      <div className="friends">
        {friends.map( friend => (
          <Item key={friend.id} friend={friend} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="forms">
        <h2>Add New Friend</h2>
        <input 
          type="text" 
          name="name" 
          placeholder="name" 
          value={newFriend.name} 
          onChange={handleChange}
          />

        <input 
          type="text" 
          name="age"  
          placeholder="age" 
          value={newFriend.age} 
          onChange={handleChange}
          />

        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          value={newFriend.email} 
          onChange={handleChange}
        />

        <button className="Btn">Add Friend</button>
      </form>
    </div>
  )
}

export default Friends
