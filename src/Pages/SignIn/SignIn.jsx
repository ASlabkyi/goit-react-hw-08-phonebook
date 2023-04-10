export const SignIn = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const NewUser = { name, email, password };

    console.log(NewUser);

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
