import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/options';

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newUser = { name, email, password };

    console.log(newUser);
    dispatch(register(newUser));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User email
        <input type="email" name="email" />
      </label>
      <label>
        User name
        <input type="text" name="name" />
      </label>
      <label>
        User password
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};
