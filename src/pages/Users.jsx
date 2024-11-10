import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UserList from '../components/UserList';

export default function Users({ loggedUser, setLoggedUser }) {
  const history = useHistory();

  function logOut() {
    setLoggedUser(null);
    history.push('/login');
  }
  const navigateToProductDetails = () => {
    history.push('/productdetails');
  };
  return (
    <>
      <p onClick={logOut}>{loggedUser}</p>
      <h1>Deneme</h1>
      <UserList />
      <h2
        onClick={navigateToProductDetails}
        style={{ cursor: 'pointer', color: 'blue' }}
      >
        Click here for Product Details
      </h2>
    </>
  );
}
