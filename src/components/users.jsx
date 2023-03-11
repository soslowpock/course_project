import React, {useState} from "react";
import API from "../api";



const Users = () => {
  
  const userDataArray = API.users.fetchAll()
  const [users, setUsers] = useState(userDataArray)


  const renderUsers = (users) => {
    return users.map((user) => renderUser(user))
  }

  const renderUser = (user) => {
    return (
      <tr key={user._id}>
        <th>{user.name}</th>
        <td>{renderQualities(user)}</td>
        <td>{user.profession.name}</td>
        <td >{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>DELETE</button></td>
           
         
      </tr>
    )
  }
  const renderQualities = (user) => {
  
    return user.qualities.map(quality => <li key={quality._id} className={getQualityClasses(quality.color)}>{quality.name}</li>)
  }

  const TableHeader = () => {
    return (
      <tr>
        <th>Имя</th>
        <th>Качества</th>
        <th>Профессии</th>
        <th>Встретился, раз</th>
        <th>Оценка</th>
        <th></th>
      </tr>
    )
  }


  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter(user => user._id !== id))
  }


  const handleRefresh = () => {
    setUsers(userDataArray)
  }

  
  
  const getQualityClasses = (color) => {
    return `badge bg-${color} m-1`
  }

  const getLabelClasses = () => {
    if (users.length === 0) {
      return `badge bg-danger`
    } else return `badge bg-primary`
  }

  const getLabelOutput = () => {
    if (users.length === 1) return 'Один человек тусанёт с тобой сегодня'
    else if (users.length >= 1 && users.length <= 4) return `${users.length} человека тусанут с тобой сегодня`
    else if (users.length >= 5 && users.length <= 20) return `${users.length} человек тусанёт с тобой сегодня`
    else if (users.length === 0) return `Никто не тусанёт с тобой сегодня`
  }
  


    return (
      <>
        <h1 className={getLabelClasses()}>
          {getLabelOutput()}
        </h1>
        <button
          className="btn btn-small btn-light p-2 m-3"
          onClick={handleRefresh}>Обновить</button>
        <table
          className="table table-striped table-hover">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {renderUsers(users)}
          </tbody>
        </table>
      </>

    )

  }


export default Users


