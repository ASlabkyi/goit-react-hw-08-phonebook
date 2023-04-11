import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/options';

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userData = { email, password };
    dispatch(login(userData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User email
        <input type="email" name="email" />
      </label>
      <label>
        User password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
