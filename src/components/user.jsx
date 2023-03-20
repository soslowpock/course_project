import React from "react";
import BookMark from "./bookmark";
import Quality from "./quality";



const User = ({user, onBookmark, onDelete}) => {
  
  
  return (
    <tr>
        <th>{ user.name }</th>
      <td>{
        user.qualities.map(quality => <Quality key={quality._id} data={quality} />)
        }
        
      </td>
        <td>{ user.profession.name }</td>
        <td>{ user.completedMeetings }</td>
        <td>{ user.rate } / 5</td>
        <td><BookMark id={user._id} bookmark={user.bookmark} onBookmark={onBookmark} /></td>
        <td><button className="btn btn-danger" onClick={() => onDelete(user._id)}>DELETE</button></td>
        </tr>
  )
  

}


export default User