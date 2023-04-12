import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Phonebook } from '../Pages/Phonebook/Phonebook';
import { Login } from 'Pages/Login/Login';
import { SignIn } from 'Pages/SignIn/SignIn';
import { HomePage } from 'Pages/Welcome/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/options';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './restrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
            }
          />

          <Route
            path="/reg"
            element={
              <RestrictedRoute component={<SignIn />} redirectTo="/phonebook" />
            }
          />
        </Route>
      </Routes>
    )
  );
};
