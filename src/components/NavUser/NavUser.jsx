import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/options';
import { selectUser } from 'redux/auth/selectors';

export const NavUser = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>Welcome {name}</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};
