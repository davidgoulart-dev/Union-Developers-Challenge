import "./UsersTable.scss"
export const UsersTable = ( ) => {
    return (
        <div className="table-users">
        <thead >
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Date</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
           <tr>
                <td>gdc456dfvdfb</td>
                <td>Jennie</td>
                <td>Nicohls</td>
                <td>Miss</td>
                <td>11/02/2023</td>
                <td>30</td>
                <td>View profile</td>
           </tr>
        </tbody>


        
        
        </div>
    )
}

export default UsersTable