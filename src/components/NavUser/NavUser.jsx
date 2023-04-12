import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/options';
import { selectUser } from 'redux/auth/selectors';

export const NavUser = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className="d-flex gap-3">
      <p className="mb-0 d-flex align-items-center gap-1">
        Welcome <span className="fw-bold">{name}</span>
      </p>
      <button className="btn btn-primary" type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};
