import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

import '../App.css'

const Item = (props) => {
  // console.log(props)

  const handleDelete =(friendId) => {
    console.log(friendId)
    axiosWithAuth().delete(`/friends/${friendId}`, )
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleEdit = (friendId) => {
    console.log(friendId)

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
    </div>
  )
}

export default Item