import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phonebook/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleOnChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <form className="p-3 bg-light d-flex justify-content-center">
      <div className="col-md-6">
        <label htmlFor="filter" className="form-label w-100">
          <p className="bg-light text-center mb-0 pt-3 pb-3">
            Find contacts by name
          </p>
          <input
            className="form-control"
            type="text"
            name="filter"
            id="filter"
            // value={filter}
            placeholder="Type to search ..."
            onChange={handleOnChange}
          />
        </label>
      </div>
    </form>
  );
};
