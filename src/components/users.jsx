import React, {useState} from "react";
import API from "../api";
import User from "./user";
import SearchStatus from "./searchStatus";


const Users = () => {
  
  const userDataArray = API.users.fetchAll()
  const [users, setUsers] = useState(userDataArray)


  const handleDelete = (id) => {
    setUsers(prevState => prevState.filter(user => user._id !== id) )
  }

  const handleBookmark = (id) => {
    setUsers(prevState => prevState.map(user => user._id !== id ? user : { ...user, bookmark: !user.bookmark}))
  }



  return (
    <>
    <SearchStatus usersQuantity={users.length} />
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Избранное</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        {users.map(user => <User key={user._id} user={{ ...user }} onDelete={handleDelete} onBookmark={handleBookmark} />)}
      
    </tbody>
  </table>
    </>
    
  )

  }


export default Users


