import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phonebookSlice';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleOnChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <Label>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        // value={filter}
        placeholder="Type to search ..."
        onChange={handleOnChange}
      />
    </Label>
  );
};
