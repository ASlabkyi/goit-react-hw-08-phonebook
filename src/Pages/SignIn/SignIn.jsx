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
          <label htmlFor="name" className="form-label">
            User name
          </label>
          <input type="text" name="name" className="form-control" id="name" />
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
          Sign In
        </button>
      </div>
    </form>
  );
};
