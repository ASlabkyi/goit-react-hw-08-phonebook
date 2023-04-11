import { NavLink, Outlet } from 'react-router-dom';
import { NavAuth } from 'components/NavAuth/AuthNav';
import { NavUser } from 'components/NavUser/NavUser';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header>
        <nav>
          <div>
            <NavLink to="/">Home Page</NavLink>
            {isLoggedIn && <NavLink to="/phonebook">Contacts</NavLink>}
          </div>
          {isLoggedIn ? <NavUser /> : <NavAuth />}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
