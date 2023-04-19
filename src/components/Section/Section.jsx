import React from 'react'
import './Section.css'

const Section = (props) => {
    console.log(props.users);
   
  return (
    <div>
        <h2>Acter List </h2>
        <table>
            
            <tr>
    <th>Name</th>
    <th>LastName</th>
    <th>Age</th>
  </tr>

 {props.users.map(e => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.lastName}</td>
              <td>{e.age}</td>
            </tr>
 ))}
</table>
    </div>
  )
}

export default Section