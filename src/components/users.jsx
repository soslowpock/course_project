import React, {useState} from "react";
import API from "../api";
// import "bootstrap/dist/css/bootstrap.css"



/*

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


*/


// const users = API.users.fetchAll()

const TableHeader = () => {
  return (
    <tr>
      <th>Имя</th>
      <th>Качества</th>
      <th>Профессии</th>
      <th>Встретился, раз</th>
      <th>Оценка</th>
  </tr>
  )
}

const TableRows = () => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
  </tr>
  )
}

const Table = () => {
  return (
    <table className="table table-dark table-striped">
  <thead>
   <TableHeader />
  </thead>
  <tbody>
    <TableRows />
  </tbody>
    </table>
  )

}

const Users = () => {
  return <Table />
  
  }
export default Users


