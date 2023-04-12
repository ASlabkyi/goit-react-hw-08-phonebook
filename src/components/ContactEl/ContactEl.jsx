import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDeleteContact } from 'redux/phonebook/options';

export const ContactEl = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(setDeleteContact(id));
  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between align-items-center w-100"
    >
      <div>
        <span className="fw-bold">{name}</span>: <span>{number}</span>
      </div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

ContactEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
