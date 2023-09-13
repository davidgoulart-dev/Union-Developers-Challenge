import "./UsersTable.scss";
import { api } from "../../api/api";
import { useQuery } from "react-query";
import { useState } from "react";
import SearchInput from "./SearchInput";
import PaginationButtons from "./PaginationButtons";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';


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
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = searchTerm ?
    (data?.results?.filter((user: User) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [])
    : (data?.results || []);



  return (
    <div className="table-users">
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
         <hr className="hr" />
      <thead>
   
        <motion.tr animate={{}} initial={{}}>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Title</th>
          <th>Date</th>
          <th>Age</th>
          <th>Actions</th>
        </motion.tr>
      </thead>
      <tbody>
        {filteredUsers.map((user: User) => (
           <motion.tr
           key={user.uuid}
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -10 }}
           transition={{ duration: 0.5 }}
           whileHover={{ scale: 1.05, backgroundColor:'rgba(129, 26, 192, 0.2)' }} // Aumenta a escala e altera a cor ao passar o mouse
         >
           <td>{user.login.uuid}</td>
           <td>{user.name.first}</td>
           <td>{user.name.last}</td>
           <td>{user.name.title}</td>
           <td>{new Date(user.dob.date).toLocaleDateString()}</td>
           <td>{user.dob.age}</td>
           <td>
             <Link to={`/user/${user.uuid}`}>View profile</Link>
           </td>
         </motion.tr>
        ))}
      </tbody>
      <PaginationButtons currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />

    </div>

  );
}

export default UsersTable;
