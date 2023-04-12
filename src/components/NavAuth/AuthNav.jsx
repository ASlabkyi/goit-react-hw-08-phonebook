import { NavLink } from 'react-router-dom';

export const NavAuth = () => {
  return (
    <div className="d-flex gap-3">
      <NavLink className="flex-sm-fill text-sm-center nav-link " to="/reg">
        Sign In
      </NavLink>
      <NavLink className="flex-sm-fill text-sm-center nav-link " to="/login">
        Log In
      </NavLink>
    </div>
  );
};
