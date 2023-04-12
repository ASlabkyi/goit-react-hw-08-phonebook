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
    <form
      onSubmit={handleSubmit}
      className="p-3 bg-light d-flex justify-content-center"
      style={{ height: '100vh' }}
    >
      <div className="col-md-6 mt-5">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            User email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            User password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary mx-auto w-100 d-block">
          Login
        </button>
      </div>
    </form>
  );
};
