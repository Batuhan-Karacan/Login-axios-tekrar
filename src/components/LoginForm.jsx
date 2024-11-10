import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function LoginForm({ setLoggedUser }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  const history = useHistory();

  function submitFn(data) {
    axios
      .post('https://reqres.in/api/users', data)
      .then((response) => {
        console.log(response.data);
        if (response.data.id) {
          setLoggedUser(response.data.email);

          reset();
          history.push('/users');
        }
      })
      .catch((error) => toast.error('Error: ' + error.message));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitFn)}>
        <div>
          <label>
            Email:
            <input
              {...register('email', {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Geçerli bir email giriniz',
                },
              })}
            />
          </label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>
            Passsword:
            <input type="password" {...register('password')} />
          </label>
        </div>
        <div>
          <button disabled={!isValid}>Giriş</button>
        </div>
      </form>
    </div>
  );
}
