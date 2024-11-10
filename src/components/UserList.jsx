import { useEffect, useState } from 'react';
import User from './User';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users').then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  return (
    <div>
      {users.map((item) => (
        <User user={item} />
      ))}
    </div>
  );
}
