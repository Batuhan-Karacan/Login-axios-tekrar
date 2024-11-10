import LoginForm from '../components/LoginForm';

export default function Login({ setLoggedUser }) {
  return (
    <>
      <h1>Login</h1>
      <LoginForm setLoggedUser={setLoggedUser} />
    </>
  );
}
