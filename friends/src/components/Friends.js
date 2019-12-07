import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
// import axios from 'axios'

const Friends = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth.get('/friends')
  },[])

  return (
    <div>
      <h1>Friends</h1>
      {friends.map( friend => (
        <h2>{friend.name}</h2>  
      ))}
    </div>
  )
}

export default Friends
