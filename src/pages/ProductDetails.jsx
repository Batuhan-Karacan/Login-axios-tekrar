import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function ProductDetails({ loggedUser, setLoggedUser }) {
  const [user, setUser] = useState(null);
  const history = useHistory();

  function logOut() {
    setLoggedUser(null);
    history.push('/login');
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users/1');
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleSelectUser = () => {
    // Add user to team state
    console.log('User selected:', user);
  };

  return (
    <div>
      <h1>Product Details</h1>
      {user && (
        <div>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <p>Email: {user.email}</p>
        </div>
      )}
      <button onClick={handleSelectUser}>Select User</button>
      <p onClick={logOut}>{loggedUser}</p>
    </div>
  );
}

export default ProductDetails;
