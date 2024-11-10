import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Users from './pages/Users';
import ProductDetails from './pages/ProductDetails';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [loggedUser, setLoggedUser] = useLocalStorage('user', '');

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login setLoggedUser={setLoggedUser} />
        </Route>
        <Route path="/users">
          <Users loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        </Route>
        <Route path="/productdetails">
          <ProductDetails
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
