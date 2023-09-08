import "./UsersTable.scss";
import { api } from "../../api/api";
import { useQuery } from "react-query";
import { useState } from "react";


interface User {
  uuid: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  dob: {
    date: string;
    age: number;
  };
  login: {
    uuid: string;
  }
 
}

export const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery(['users', currentPage], () => api.getUsers(10, currentPage));
  

  

  return (
    <div className="table-users">
      
      <thead>
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
        {data?.results?.map((user: User) => (
          <tr key={user.uuid}>
            <td>{user.login.uuid}</td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.name.title}</td>
            <td>{new Date(user.dob.date).toLocaleDateString()}</td>
            <td>{user.dob.age}</td>
            <td>View profile</td>
          </tr>
        ))}
      </tbody>
      <div className="pagination">
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
        Anterior
      </button>
      {[1, 2, 3, 4, 5].map((pageNum) => (
        <button 
          key={pageNum}
          onClick={() => setCurrentPage(pageNum)}
          className={currentPage === pageNum ? "active" : ""}
        >
          {pageNum}
        </button>
      ))}
      <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === 5}>
        Próximo
      </button>
    </div>
    
    </div>
    
  );
}

export default UsersTable;
