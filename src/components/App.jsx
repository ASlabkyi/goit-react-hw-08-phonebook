import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Phonebook } from '../Pages/Phonebook/Phonebook';
import { Login } from 'Pages/Login/Login';
import { SignIn } from 'Pages/SignIn/SignIn';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Welcome</div>} />

        <Route path="/phonebook" element={<Phonebook />} />

        <Route path="/login" element={<Login />} />

        <Route path="/reg" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
