import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

import '../App.css'

const Item = (props) => {
  // console.log(props)
  const [friend, setFriend] = useState({})

  // useEffect(() => {
  //   axiosWithAuth().get(`/friends/${}`)
  //   .then(res => {
  //     console.log(res.data)
  //     setFriends(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // },[])

  const handleFriend = (friendId) => {
    console.log(friendId)
    setFriend()
  }

  return (
    <div className="item">
      <h2>{props.friend.name}</h2>  
      <p>age: {props.friend.age}</p>
      <p>email: {props.friend.email}</p>
      <Link to={`friends/${props.friend.id}`} >Visit</Link>
    </div>
  )
}

export default Item