import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddContact } from 'redux/phonebook/options';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const isDuplicate = newContact => {
    return contacts.find(({ name }) => {
      return name.toLowerCase() === newContact.name.toLowerCase();
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };

    if (isDuplicate(newContact)) {
      alert(`${name} is already in contacts`);
      setName('');
      setNumber('');

      return;
    }

    dispatch(setAddContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <form
      className="p-3 bg-light d-flex justify-content-center"
      onSubmit={handleSubmit}
    >
      <div className="col-md-6 mt-5">
        <div className="mb-3">
          <label htmlFor="email" className="form-label w-100">
            Name
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label w-100">
            Number
            <input
              className="form-control"
              type="tel"
              name="number"
              value={number}
              id="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="btn btn-primary mx-auto w-100 d-block" type="submit">
          Add Contact
        </button>
      </div>
    </form>
  );
};
