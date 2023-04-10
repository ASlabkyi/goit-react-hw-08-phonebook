import { NavLink } from 'react-router-dom';

export const NavAuth = () => {
  return (
    <div>
      <NavLink to="/reg">Sign In</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
