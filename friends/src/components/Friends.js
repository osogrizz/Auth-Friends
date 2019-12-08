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

  return (
    <div>
      <h1>Friends</h1>
      <div className="friends">
        {friends.map( friend => (
          <Item key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  )
}

export default Friends
