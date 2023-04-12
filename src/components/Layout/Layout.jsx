import { NavLink, Outlet } from 'react-router-dom';
import { NavAuth } from 'components/NavAuth/AuthNav';
import { NavUser } from 'components/NavUser/NavUser';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className="mx-3 pt-2 pb-2">
        <nav className=" nav nav-pills flex-column flex-sm-row d-flex justify-content-between align-items-center ">
          <div className="d-flex gap-3">
            <NavLink className="flex-sm-fill text-sm-center nav-link " to="/">
              Home Page
            </NavLink>
            {isLoggedIn && (
              <NavLink
                className="flex-sm-fill text-sm-center nav-link "
                to="/phonebook"
              >
                Contacts
              </NavLink>
            )}
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
