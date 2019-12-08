import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

import '../App.css'
import Friends from './Friends'

const Item = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete =(friendId) => {
    console.log(friendId)
    axiosWithAuth().delete(`/friends/${friendId}`, )
    .then(res => {
      console.log(res)
      props.setFriends(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleEdit = (friendId) => {
    console.log(friendId)
    setIsEditing(!isEditing)
    // props.setFriends(
    //   ...Friends.map( friend => {

    //   })
    // )
  }

  return (
    <div className="item">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => handleEdit(props.friend.id)} >Edit</button>
        <button onClick={() => handleDelete(props.friend.id)}>X</button>
      </div>
      <h2>{props.friend.name}</h2>  
      <p>age: {props.friend.age}</p>
      <p>email: {props.friend.email}</p>
      <Link to={`friends/${props.friend.id}`} >Visit</Link>

      {isEditing && (
        <form>
          <input type="text" name="name" />
          <input type="text" name="age" />
          <input type="email" name="email" />
        </form>  
      )}
    </div>
  )
}

export default Item