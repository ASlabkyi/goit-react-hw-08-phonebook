import { NavLink, Outlet } from 'react-router-dom';
import { NavAuth } from 'components/NavAuth/AuthNav';
import { NavUser } from 'components/NavUser/NavUser';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/phonebook">Contacts</NavLink>
          </div>
          <NavAuth />
          <NavUser />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
