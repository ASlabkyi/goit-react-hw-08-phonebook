export const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const password = form.elements.password.value;

    const userData = { name, password };

    console.log(userData);

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User name
        <input type="text" name="name" />
      </label>
      <label>
        User password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
