import { ContactEl } from '../ContactEl/ContactEl';
import { fetchAllContacts } from 'redux/options';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { List } from './ContactList.styled';
import { ThreeDots } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(state => {
    const filteredContacts = state.phonebook.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
    );
    return filteredContacts;
  });

  const isLoading = useSelector(state => state.phonebook.contacts.isLoading);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
        }}
      >
        <ThreeDots type="Oval" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactEl key={id} id={id} name={name} number={number}></ContactEl>
      ))}
    </List>
  );
};
