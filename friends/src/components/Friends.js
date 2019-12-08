import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Item from './Item'

import '../App.css';

const Friends = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth().get('/friends')
    .then(res => {
      console.log(res.data)
      setFriends(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
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
        <input type="text" name="name" placeholder="name"/>
        <input type="text" name="age"  placeholder="age" />
        <input type="email" name="email" placeholder="email" />
        <button className="Btn">Add Friend</button>
      </form>
    </div>
  )
}

export default Friends
